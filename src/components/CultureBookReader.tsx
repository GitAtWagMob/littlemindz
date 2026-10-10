import React, { useState, useEffect } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Volume2,
  VolumeX,
  BookOpen,
  Sparkles,
  Heart,
  Shield,
  ShoppingBag,
  ExternalLink
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
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0); // 0 is cover, 1..N are pages
  const [isReadingAloud, setIsReadingAloud] = useState<boolean>(false);
  const [activeSpeechWord, setActiveSpeechWord] = useState<string>('');

  const totalSlides = (book.pages?.length || 0) + 1; // Cover + pages

  // Stop speech when closing or changing page
  useEffect(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsReadingAloud(false);
    setActiveSpeechWord('');
  }, [currentPageIndex, isOpen]);

  // Handle Speech Synthesis
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
        ? `${book.title}. Written by ${book.author}. ${book.tagline}`
        : book.pages[currentPageIndex - 1]?.narration || '';

    if (!currentText) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(currentText);
    utterance.rate = 0.88; // Gentle, toddler-friendly pace
    utterance.pitch = 1.05;

    // Pick a natural English voice if available
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

  const goToNextPage = () => {
    if (currentPageIndex < totalSlides - 1) {
      setCurrentPageIndex(prev => prev + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(prev => prev - 1);
    }
  };

  if (!isOpen) return null;

  const isCover = currentPageIndex === 0;
  const currentPage: CultureBookPage | undefined = !isCover ? book.pages[currentPageIndex - 1] : undefined;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
    >
      <div className="relative w-full max-w-4xl bg-[#fffdf7] border-3 border-[#24252b] rounded-2xl shadow-[8px_8px_0_#24252b] overflow-hidden flex flex-col max-h-[95vh]">
        {/* Reader Top Bar */}
        <div className="bg-[#f9d54a] border-b-2 border-[#24252b] px-4 py-3 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-white border-2 border-[#24252b] flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-[#286dd7]" />
            </span>
            <div>
              <h3 className="text-sm sm:text-base font-black text-[#24252b] leading-tight">
                {book.title}
              </h3>
              <p className="text-[11px] font-bold text-slate-700">
                Author: {book.author} · {isCover ? 'Cover Page' : `Page ${currentPageIndex} of ${book.totalPages}`}
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
              title="Listen to story read aloud"
            >
              {isReadingAloud ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-emerald-700" />}
              <span className="hidden sm:inline">{isReadingAloud ? 'Stop Reading' : 'Read Aloud'}</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="neo-btn bg-white text-[#24252b] p-1.5 rounded-lg"
              title="Close Reader"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Reader Content Area */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 flex flex-col md:flex-row items-center gap-6 justify-center bg-[#fdfbf6]">
          {/* Left/Main Column: Illustration Display */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-sm aspect-[3/4] rounded-xl overflow-hidden border-3 border-[#24252b] shadow-[4px_4px_0_#24252b] bg-amber-50">
              {isCover ? (
                <img
                  src={book.coverImage}
                  alt={`${book.title} cover by Neha Thakur`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              ) : currentPage?.illustrationType === 'nine_forms' && book.spreadImage ? (
                <img
                  src={book.spreadImage}
                  alt="Nine Forms of Maa Durga"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full relative">
                  <img
                    src={book.coverImage}
                    alt={currentPage?.title || 'Book Page Illustration'}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle banner watermark indicating internal page context */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white text-center">
                    <span className="text-xs font-black tracking-wider uppercase text-yellow-300">
                      Illustration {currentPageIndex}
                    </span>
                    <p className="text-xs font-bold mt-0.5">{currentPage?.theme}</p>
                  </div>
                </div>
              )}

              {/* Page Number Ribbon */}
              <div className="absolute top-3 left-3 bg-[#f9d54a] border-2 border-[#24252b] rounded-full w-8 h-8 flex items-center justify-center font-black text-sm text-[#24252b] shadow-sm">
                {isCover ? '★' : currentPageIndex}
              </div>
            </div>
          </div>

          {/* Right Column: Easy-to-Read Early Reader Text */}
          <div className="w-full md:w-1/2 flex flex-col justify-between self-stretch">
            {isCover ? (
              <div className="space-y-4">
                <span className="text-xs font-black uppercase tracking-wider text-[#286dd7] bg-blue-100 border border-[#24252b] px-3 py-1 rounded-full inline-block">
                  Toddler Culture Learning Book
                </span>

                <h2 className="text-2xl sm:text-3xl font-black text-[#24252b] leading-tight">
                  {book.title}
                </h2>
                <p className="text-sm font-bold text-slate-700">
                  {book.subtitle}
                </p>

                <div className="p-3 bg-amber-50 border-2 border-amber-300 rounded-xl space-y-1.5 text-xs font-bold text-amber-950">
                  <p className="flex items-center gap-1.5 font-black text-amber-900">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span>How this book teaches early reading:</span>
                  </p>
                  <p>• Short 3 to 5 word sentences designed for young sight readers.</p>
                  <p>• Colored & bold keywords highlight core action and emotion words.</p>
                  <p>• Positive values: kindness, courage, honesty, and caring for nature.</p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={goToNextPage}
                    className="neo-btn bg-[#286dd7] text-white py-2.5 px-5 text-sm font-black flex items-center gap-2 w-full justify-center"
                  >
                    <span>Read Book (Start Page 1)</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="border-b-2 border-[#24252b] pb-2 flex items-center justify-between">
                  <span className="text-xs font-black uppercase text-[#286dd7]">
                    Lesson {currentPageIndex} · {currentPage?.theme}
                  </span>
                  <span className="text-xs font-bold text-slate-500">
                    Sight Word Level 1
                  </span>
                </div>

                <div className="bg-white p-5 rounded-xl border-2 border-[#24252b] shadow-[3px_3px_0_#24252b] space-y-3">
                  <h4 className="text-lg font-black text-[#24252b] flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#f9d54a] border border-[#24252b] flex items-center justify-center text-xs">
                      {currentPageIndex}
                    </span>
                    <span>{currentPage?.title}</span>
                  </h4>

                  <div className="space-y-2 pt-1">
                    {currentPage?.lines.map((line, idx) => {
                      const isHighlighted =
                        line.highlightWord &&
                        activeSpeechWord &&
                        line.highlightWord.toLowerCase().includes(activeSpeechWord);

                      return (
                        <p
                          key={idx}
                          className="text-lg sm:text-xl font-black text-[#24252b] leading-relaxed tracking-wide"
                        >
                          {line.text}
                          {line.highlightWord && (
                            <span
                              className={`font-black ml-1 px-1 rounded transition-colors ${
                                isHighlighted
                                  ? 'bg-yellow-300 text-rose-700 underline'
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
                </div>

                {/* Helpful Early Learner Prompt */}
                <div className="bg-emerald-50 border border-emerald-300 p-3 rounded-lg text-xs font-bold text-emerald-900 flex items-center gap-2">
                  <Heart className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>
                    Parent Tip: Ask your child to point to the red word and repeat it together!
                  </span>
                </div>
              </div>
            )}

            {/* Buy / Format Actions */}
            <div className="mt-6 pt-4 border-t-2 border-slate-200">
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-600 block mb-2">
                Order Full Ready Book:
              </span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => onOrderBook(book, 'pdf')}
                  className="neo-btn bg-[#286dd7] text-white py-2 px-3 text-xs font-black flex items-center justify-center gap-1.5"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Instant PDF (₹{book.pdfPrice})</span>
                </button>
                <button
                  onClick={() => onOrderBook(book, 'hardcover')}
                  className="neo-btn bg-[#f9d54a] text-[#24252b] py-2 px-3 text-xs font-black flex items-center justify-center gap-1.5"
                >
                  <ShoppingBag className="w-3.5 h-3.5 text-amber-800" />
                  <span>Hardcover Book (₹{book.printPrice})</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Reader Bottom Navigation Pagination */}
        <div className="bg-white border-t-2 border-[#24252b] px-4 py-3 flex items-center justify-between shrink-0">
          <button
            onClick={goToPrevPage}
            disabled={currentPageIndex === 0}
            className="neo-btn bg-slate-100 disabled:opacity-40 text-[#24252b] py-1.5 px-3 text-xs font-black flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto max-w-[200px] sm:max-w-md px-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPageIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  currentPageIndex === index
                    ? 'w-6 bg-[#286dd7] border border-[#24252b]'
                    : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                title={index === 0 ? 'Cover' : `Page ${index}`}
              />
            ))}
          </div>

          <button
            onClick={goToNextPage}
            disabled={currentPageIndex === totalSlides - 1}
            className="neo-btn bg-[#f9d54a] disabled:opacity-40 text-[#24252b] py-1.5 px-3 text-xs font-black flex items-center gap-1"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
