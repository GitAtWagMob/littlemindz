import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Volume2,
  VolumeX,
  BookOpen,
  Sparkles,
  ShoppingBag,
  Heart,
  Maximize2,
  Minimize2,
  Bookmark
} from 'lucide-react';
import { CultureBook, CultureBookPage } from '../data/cultureBooks';

interface CultureBookReaderProps {
  book: CultureBook;
  isOpen: boolean;
  onClose: () => void;
  onOrderBook: (book: CultureBook, format: 'pdf' | 'hardcover') => void;
}

export const CultureBookReader: React.FC<CultureBookReaderProps> = ({
  book,
  isOpen,
  onClose,
  onOrderBook
}) => {
  // 0: Cover (Page 0)
  // 1..totalPages: Lesson pages
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const [isFlipping, setIsFlipping] = useState<boolean>(false);
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev'>('next');
  const [isReadingAloud, setIsReadingAloud] = useState<boolean>(false);
  const [activeSpeechWord, setActiveSpeechWord] = useState<string>('');
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const totalPages = (book.pages?.length || 0); // 10 pages

  // Touch Swipe tracking
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Stop speech when closing or changing page
  useEffect(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsReadingAloud(false);
    setActiveSpeechWord('');
  }, [currentPageIndex, isOpen]);

  // Keyboard navigation (Arrow keys)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        goToNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        goToPrev();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentPageIndex, isFlipping]);

  const handleToggleReadAloud = () => {
    if (!('speechSynthesis' in window)) {
      alert('Speech synthesis is not supported on this browser.');
      return;
    }

    if (isReadingAloud) {
      window.speechSynthesis.cancel();
      setIsReadingAloud(false);
      setActiveSpeechWord('');
      return;
    }

    const currentText =
      currentPageIndex === 0
        ? `${book.title}. By author ${book.author}. An early learning book for kids. Tap next or swipe to flip the page!`
        : book.pages[currentPageIndex - 1]?.narration || '';

    if (!currentText) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(currentText);
    utterance.rate = 0.85; // Toddler friendly slow pace
    utterance.pitch = 1.05;

    const voices = window.speechSynthesis.getVoices();
    const friendlyVoice = voices.find(
      v =>
        (v.name.includes('Natural') || v.name.includes('Samantha') || v.name.includes('Google UK') || v.name.includes('India')) &&
        v.lang.startsWith('en')
    );
    if (friendlyVoice) utterance.voice = friendlyVoice;

    utterance.onboundary = event => {
      if (event.name === 'word') {
        const spokenWord = currentText.substring(event.charIndex, event.charIndex + event.charLength);
        setActiveSpeechWord(spokenWord.toLowerCase().replace(/[^a-z]/g, ''));
      }
    };

    utterance.onend = () => {
      setIsReadingAloud(false);
      setActiveSpeechWord('');
    };

    utterance.onerror = () => {
      setIsReadingAloud(false);
      setActiveSpeechWord('');
    };

    setIsReadingAloud(true);
    window.speechSynthesis.speak(utterance);
  };

  const goToNext = () => {
    if (currentPageIndex < totalPages && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection('next');
      setTimeout(() => {
        setCurrentPageIndex(prev => prev + 1);
        setIsFlipping(false);
      }, 550);
    }
  };

  const goToPrev = () => {
    if (currentPageIndex > 0 && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection('prev');
      setTimeout(() => {
        setCurrentPageIndex(prev => prev - 1);
        setIsFlipping(false);
      }, 550);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      // Swiped left -> Next page
      goToNext();
    } else if (distance < -50) {
      // Swiped right -> Previous page
      goToPrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (!isOpen) return null;

  const isCover = currentPageIndex === 0;
  const currentPage: CultureBookPage | undefined = !isCover ? book.pages[currentPageIndex - 1] : undefined;

  // Image to render for current page
  const pageImageSrc = isCover
    ? book.coverImage
    : currentPage?.pageImage || (currentPage?.illustrationType === 'nine_forms' ? book.spreadImage : book.coverImage) || book.coverImage;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-between p-2 sm:p-4 overflow-y-auto"
    >
      {/* Top Header Controls */}
      <div className="w-full max-w-4xl bg-[#f9d54a] border-3 border-[#24252b] rounded-xl px-4 py-2.5 shadow-[4px_4px_0_#24252b] flex items-center justify-between shrink-0 mb-3">
        <div className="flex items-center gap-2.5">
          <span className="w-9 h-9 rounded-full bg-white border-2 border-[#24252b] flex items-center justify-center shadow-xs">
            <BookOpen className="w-5 h-5 text-[#286dd7]" />
          </span>
          <div>
            <h3 className="text-sm sm:text-base font-black text-[#24252b] leading-tight">
              {book.title}
            </h3>
            <p className="text-[11px] font-bold text-slate-700">
              Author: {book.author} · {isCover ? 'Cover' : `Page ${currentPageIndex} of ${totalPages}`}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Read Aloud Button */}
          <button
            onClick={handleToggleReadAloud}
            className={`neo-btn py-1.5 px-3 text-xs font-black flex items-center gap-1.5 transition-colors ${
              isReadingAloud ? 'bg-rose-500 text-white animate-pulse' : 'bg-white text-[#24252b]'
            }`}
            title="Read aloud with audio"
          >
            {isReadingAloud ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-emerald-700" />}
            <span className="hidden sm:inline">{isReadingAloud ? 'Stop' : 'Read Aloud'}</span>
          </button>

          {/* Fullscreen Toggle */}
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="neo-btn bg-white text-[#24252b] p-1.5 hidden sm:flex items-center justify-center"
            title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          {/* Close */}
          <button
            onClick={onClose}
            className="neo-btn bg-white text-[#24252b] p-1.5"
            title="Close Book"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main 3D Flippable Book Container */}
      <div
        className={`w-full max-w-4xl flex-1 flex items-center justify-center p-1 sm:p-4 book-perspective select-none transition-all ${
          isFullscreen ? 'max-w-5xl' : ''
        }`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* The Realistic Book Structure */}
        <div
          className={`relative w-full max-w-2xl sm:max-w-3xl aspect-[1/1.4] sm:aspect-[1.5/1] bg-white rounded-2xl border-4 border-[#24252b] book-shadow overflow-hidden flex flex-col sm:flex-row transition-all duration-300 ${
            isFlipping
              ? flipDirection === 'next'
                ? 'scale-[0.98] -rotate-1'
                : 'scale-[0.98] rotate-1'
              : 'scale-100 rotate-0'
          }`}
        >
          {/* Subtle Book Spine / Fold in the Center for Desktop */}
          <div className="hidden sm:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-8 book-spine z-30 pointer-events-none opacity-40" />

          {/* Left Spread (Illustration / Cover on Desktop) */}
          <div className="w-full sm:w-1/2 h-1/2 sm:h-full relative overflow-hidden bg-amber-50 border-b-2 sm:border-b-0 sm:border-r-2 border-[#24252b]">
            <img
              src={pageImageSrc}
              alt={isCover ? `${book.title} Cover` : currentPage?.title || 'Book Page Illustration'}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover select-none"
            />

            {/* Realistic Page Corner Curl on Cover/Pages */}
            <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-black/25 via-white/50 to-transparent pointer-events-none" />

            {/* Badge Indicator */}
            <div className="absolute top-3 left-3 bg-[#f9d54a] border-2 border-[#24252b] rounded-full w-8 h-8 flex items-center justify-center font-black text-xs text-[#24252b] shadow-sm z-10">
              {isCover ? '★' : currentPageIndex}
            </div>

            {/* Mobile Swipe Hint */}
            <div className="absolute bottom-2 left-2 bg-black/75 text-white text-[10px] font-bold px-2.5 py-1 rounded-full pointer-events-none backdrop-blur-xs flex items-center gap-1 sm:hidden">
              <span>Swipe ↔ to flip</span>
            </div>
          </div>

          {/* Right Spread (Text Content & Reading Lesson on Desktop) */}
          <div className="w-full sm:w-1/2 h-1/2 sm:h-full bg-[#fffdf7] p-4 sm:p-8 flex flex-col justify-between overflow-y-auto">
            {isCover ? (
              <div className="space-y-4 my-auto">
                <div className="inline-flex items-center gap-1 bg-[#286dd7] text-white px-2.5 py-0.5 rounded text-[11px] font-black uppercase">
                  <Bookmark className="w-3 h-3" />
                  <span>Early Reader Learning Series</span>
                </div>

                <h1 className="text-2xl sm:text-4xl font-black text-[#24252b] leading-tight">
                  {book.title}
                </h1>
                <p className="text-xs sm:text-sm font-bold text-slate-700">
                  {book.subtitle}
                </p>

                <div className="p-3 bg-amber-50 border-2 border-amber-300 rounded-xl space-y-1 text-xs font-bold text-amber-950">
                  <p className="font-black text-amber-900 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    <span>How this book teaches reading:</span>
                  </p>
                  <p>• Short, rhythmic sentences for young children.</p>
                  <p>• <span className="text-rose-600 font-black">Red bold words</span> reinforce core sight words.</p>
                  <p>• Beautiful loving values: kindness, courage, and prayer.</p>
                </div>

                <button
                  type="button"
                  onClick={goToNext}
                  className="neo-btn bg-[#f9d54a] text-[#24252b] py-3 px-5 text-sm font-black w-full flex items-center justify-center gap-2 mt-4"
                >
                  <span>Open & Flip to Page 1</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="space-y-4 my-auto">
                {/* Page Header */}
                <div className="flex items-center justify-between border-b-2 border-slate-200 pb-2">
                  <span className="text-xs font-black uppercase text-[#286dd7]">
                    Lesson {currentPageIndex} · {currentPage?.theme}
                  </span>
                  <span className="text-xs font-bold text-slate-500">
                    Page {currentPageIndex} of {totalPages}
                  </span>
                </div>

                {/* Lesson Title */}
                <h2 className="text-xl sm:text-2xl font-black text-[#24252b] flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-[#f9d54a] border-2 border-[#24252b] flex items-center justify-center text-xs shrink-0">
                    {currentPageIndex}
                  </span>
                  <span>{currentPage?.title}</span>
                </h2>

                {/* Story Sentences with Sight-Word Highlight */}
                <div className="space-y-3 py-2 bg-amber-50/50 p-4 rounded-xl border border-amber-200/80">
                  {currentPage?.lines.map((line, idx) => {
                    const isWordActive =
                      line.highlightWord &&
                      activeSpeechWord &&
                      line.highlightWord.toLowerCase().includes(activeSpeechWord);

                    return (
                      <p
                        key={idx}
                        className="text-lg sm:text-2xl font-black text-[#24252b] leading-relaxed tracking-wide"
                      >
                        {line.text}
                        {line.highlightWord && (
                          <span
                            className={`font-black ml-1.5 px-1.5 py-0.5 rounded transition-all duration-200 ${
                              isWordActive
                                ? 'bg-yellow-300 text-rose-700 underline shadow-xs'
                                : 'text-rose-600'
                            }`}
                          >
                            {line.highlightWord}
                          </span>
                        )}
                      </p>
                    );
                  })}
                </div>

                {/* Friendly Parent Prompt */}
                <div className="bg-emerald-50 border border-emerald-300 p-2.5 rounded-lg text-xs font-bold text-emerald-900 flex items-center gap-2">
                  <Heart className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>
                    Ask child: &quot;Can you spot the red word on this page?&quot;
                  </span>
                </div>
              </div>
            )}

            {/* Quick Purchase Strip Inside Reader */}
            <div className="pt-3 border-t-2 border-slate-200 flex items-center justify-between gap-2 mt-2">
              <span className="text-[11px] font-black text-slate-600">
                Order full book:
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => onOrderBook(book, 'pdf')}
                  className="neo-btn bg-[#286dd7] text-white py-1 px-2.5 text-[11px] font-black flex items-center gap-1"
                >
                  <ShoppingBag className="w-3 h-3" />
                  <span>PDF ₹{book.pdfPrice}</span>
                </button>
                <button
                  type="button"
                  onClick={() => onOrderBook(book, 'hardcover')}
                  className="neo-btn bg-[#f9d54a] text-[#24252b] py-1 px-2.5 text-[11px] font-black flex items-center gap-1"
                >
                  <ShoppingBag className="w-3 h-3 text-amber-800" />
                  <span>Hardcover ₹{book.printPrice}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Left Arrow Click Hotspot */}
          <button
            type="button"
            disabled={currentPageIndex === 0 || isFlipping}
            onClick={goToPrev}
            aria-label="Previous Page"
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-[#24252b] border-2 border-[#24252b] shadow-[2px_2px_0_#24252b] flex items-center justify-center hover:bg-[#f9d54a] disabled:opacity-0 disabled:pointer-events-none transition-all z-40 active:scale-95"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow Click Hotspot */}
          <button
            type="button"
            disabled={currentPageIndex === totalPages || isFlipping}
            onClick={goToNext}
            aria-label="Next Page"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-[#24252b] border-2 border-[#24252b] shadow-[2px_2px_0_#24252b] flex items-center justify-center hover:bg-[#f9d54a] disabled:opacity-0 disabled:pointer-events-none transition-all z-40 active:scale-95"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Reader Bottom Bar: Page Slider & Controls */}
      <div className="w-full max-w-4xl bg-white border-3 border-[#24252b] rounded-xl px-4 py-3 shadow-[4px_4px_0_#24252b] flex items-center justify-between shrink-0 mt-3">
        <button
          onClick={goToPrev}
          disabled={currentPageIndex === 0 || isFlipping}
          className="neo-btn bg-slate-100 disabled:opacity-40 text-[#24252b] py-2 px-3 text-xs font-black flex items-center gap-1"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Flip Back</span>
        </button>

        {/* Progress Dots with Page Tooltip */}
        <div className="flex items-center gap-1.5 overflow-x-auto px-2 max-w-[200px] sm:max-w-md">
          {Array.from({ length: totalPages + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isFlipping) {
                  setIsFlipping(true);
                  setFlipDirection(index > currentPageIndex ? 'next' : 'prev');
                  setTimeout(() => {
                    setCurrentPageIndex(index);
                    setIsFlipping(false);
                  }, 400);
                }
              }}
              className={`h-2.5 rounded-full transition-all ${
                currentPageIndex === index
                  ? 'w-7 bg-[#286dd7] border border-[#24252b]'
                  : 'w-2.5 bg-slate-300 hover:bg-slate-500'
              }`}
              title={index === 0 ? 'Cover Page' : `Page ${index}`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          disabled={currentPageIndex === totalPages || isFlipping}
          className="neo-btn bg-[#f9d54a] disabled:opacity-40 text-[#24252b] py-2 px-3 text-xs font-black flex items-center gap-1"
        >
          <span>Flip Next</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
