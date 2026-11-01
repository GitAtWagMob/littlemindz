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
  // 0: Cover
  // 1..totalPages: Sample lesson pages (1 to 4)
  // totalPages + 1: End of sample preview card
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const [isFlipping, setIsFlipping] = useState<boolean>(false);
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev'>('next');
  const [isReadingAloud, setIsReadingAloud] = useState<boolean>(false);
  const [imageLoadErrors, setImageLoadErrors] = useState<Record<number, boolean>>({});

  const samplePagesCount = book.pages?.length || 4;
  const maxSlideIndex = samplePagesCount + 1; // last slide is preview completion card

  // Reset page index when opened or book changed
  useEffect(() => {
    if (isOpen) {
      setCurrentPageIndex(0);
      setIsFlipping(false);
      setImageLoadErrors({});
    }
  }, [isOpen, book.id]);

  // Preload all book illustrations for instant, smooth page turns
  useEffect(() => {
    if (isOpen && book) {
      const imagesToPreload: string[] = [book.coverImage];
      if (book.spreadImage) imagesToPreload.push(book.spreadImage);
      if (book.pages) {
        book.pages.forEach(p => {
          if (p.pageImage) imagesToPreload.push(p.pageImage);
        });
      }
      imagesToPreload.forEach(src => {
        if (src) {
          const img = new Image();
          img.src = src;
        }
      });
    }
  }, [isOpen, book]);

  // Touch Swipe tracking
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Stop speech when closing or changing page
  useEffect(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsReadingAloud(false);
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
      return;
    }

    if (isReadingAloud) {
      window.speechSynthesis.cancel();
      setIsReadingAloud(false);
      return;
    }

    let currentText = '';
    if (currentPageIndex === 0) {
      currentText = `${book.title}. Written by Neha Thakur. Sample flipbook preview for little minds. Swipe or tap next to turn the page!`;
    } else if (currentPageIndex <= samplePagesCount) {
      currentText = book.pages[currentPageIndex - 1]?.narration || '';
    } else {
      currentText = `Sample preview complete! Order the full 14 page book to enjoy all lessons and activities!`;
    }

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

    utterance.onend = () => {
      setIsReadingAloud(false);
    };

    utterance.onerror = () => {
      setIsReadingAloud(false);
    };

    setIsReadingAloud(true);
    window.speechSynthesis.speak(utterance);
  };

  const goToNext = () => {
    if (currentPageIndex < maxSlideIndex && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection('next');
      setTimeout(() => {
        setCurrentPageIndex(prev => prev + 1);
        setIsFlipping(false);
      }, 350);
    }
  };

  const goToPrev = () => {
    if (currentPageIndex > 0 && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection('prev');
      setTimeout(() => {
        setCurrentPageIndex(prev => prev - 1);
        setIsFlipping(false);
      }, 350);
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
    if (distance > 45) {
      // Swiped left -> Next page
      goToNext();
    } else if (distance < -45) {
      // Swiped right -> Previous page
      goToPrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (!isOpen) return null;

  const isCover = currentPageIndex === 0;
  const isEndCard = currentPageIndex === maxSlideIndex;
  const currentPage: CultureBookPage | undefined = !isCover && !isEndCard ? book.pages[currentPageIndex - 1] : undefined;

  // Image to render for current page
  const pageImageSrc = isCover
    ? book.coverImage
    : currentPage?.pageImage || book.coverImage;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex flex-col items-center justify-between p-2 sm:p-4 select-none overflow-y-auto"
    >
      {/* Top Header Controls */}
      <div className="w-full max-w-xl bg-[#f9d54a] border-3 border-[#24252b] rounded-xl px-3 sm:px-4 py-2 shadow-[4px_4px_0_#24252b] flex items-center justify-between shrink-0 mb-2">
        <div className="flex items-center gap-2 min-w-0">
          <span className="w-8 h-8 rounded-full bg-white border-2 border-[#24252b] flex items-center justify-center shrink-0 shadow-xs">
            <BookOpen className="w-4 h-4 text-[#286dd7]" />
          </span>
          <div className="min-w-0">
            <h3 className="text-xs sm:text-sm font-black text-[#24252b] truncate leading-tight">
              {book.title}
            </h3>
            <p className="text-[10px] sm:text-[11px] font-bold text-slate-700">
              {isCover
                ? 'Cover Page · Tap to flip'
                : isEndCard
                ? 'Sample Preview Complete'
                : `Sample Page ${currentPageIndex} of ${samplePagesCount}`}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          {/* Read Aloud Button */}
          <button
            onClick={handleToggleReadAloud}
            className={`neo-btn py-1 px-2.5 text-[11px] font-black flex items-center gap-1 transition-colors cursor-pointer ${
              isReadingAloud ? 'bg-rose-500 text-white animate-pulse' : 'bg-white text-[#24252b]'
            }`}
            title="Read aloud with audio"
          >
            {isReadingAloud ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-700" />}
            <span className="hidden sm:inline">{isReadingAloud ? 'Stop' : 'Read'}</span>
          </button>

          {/* Close */}
          <button
            onClick={onClose}
            className="neo-btn bg-white text-[#24252b] p-1.5 cursor-pointer"
            title="Close Book"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Flippable Book Container */}
      <div
        className="w-full max-w-xl flex-1 flex items-center justify-center py-1 sm:py-2 book-perspective relative"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Navigation Hotspot Arrow - Left */}
        <button
          type="button"
          disabled={currentPageIndex === 0 || isFlipping}
          onClick={goToPrev}
          aria-label="Previous Page"
          className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/95 text-[#24252b] border-2 border-[#24252b] shadow-[2px_2px_0_#24252b] flex items-center justify-center hover:bg-[#f9d54a] disabled:opacity-0 disabled:pointer-events-none transition-all z-40 active:scale-95 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* The Realistic Book Page Structure */}
        <div
          className={`relative w-full max-w-[420px] aspect-[1158/1638] max-h-[68vh] sm:max-h-[72vh] bg-white rounded-2xl border-4 border-[#24252b] book-shadow overflow-hidden transition-all duration-350 select-none ${
            isFlipping
              ? flipDirection === 'next'
                ? 'scale-[0.98] -rotate-1 opacity-90'
                : 'scale-[0.98] rotate-1 opacity-90'
              : 'scale-100 rotate-0 opacity-100'
          }`}
        >
          {/* Subtle Spine on Left */}
          {!isCover && (
            <div className="absolute inset-y-0 left-0 w-4 sm:w-5 book-spine z-30 pointer-events-none opacity-30" />
          )}

          {/* Page Curl Shadow Effect on Top Right */}
          <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-black/20 via-white/40 to-transparent pointer-events-none z-20" />

          {/* Slide Content */}
          {isEndCard ? (
            /* End of Sample Preview Card */
            <div className="w-full h-full flex flex-col items-center justify-between p-5 sm:p-7 bg-gradient-to-b from-[#fffaf0] via-white to-amber-50 text-center select-none overflow-y-auto">
              <div className="my-auto space-y-3">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#f9d54a] border-3 border-[#24252b] shadow-[3px_3px_0_#24252b] flex items-center justify-center mx-auto">
                  <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-amber-900 fill-amber-400" />
                </div>

                <div className="inline-block bg-amber-100 text-amber-900 text-[10px] sm:text-xs font-black uppercase px-2.5 py-0.5 rounded-full border border-amber-300">
                  Sample Preview Complete
                </div>

                <h3 className="text-lg sm:text-2xl font-black text-[#24252b] leading-tight">
                  Loved Reading {book.title}?
                </h3>

                <p className="text-xs sm:text-sm font-bold text-slate-700 max-w-xs mx-auto leading-relaxed">
                  You just enjoyed <strong>{samplePagesCount} sample pages</strong>! Order the full <strong>14-page illustrated book</strong> to read all divine lessons, sacred symbols, phonics sight words, and activities.
                </p>

                <div className="space-y-2 pt-2 max-w-xs mx-auto">
                  <button
                    type="button"
                    onClick={() => onOrderBook(book, 'hardcover')}
                    className="neo-btn bg-[#f9d54a] hover:bg-[#ffe366] text-[#24252b] py-2.5 px-3 text-xs font-black w-full flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-amber-900" />
                    <span>Order Deluxe Hardcover (₹{book.printPrice})</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onOrderBook(book, 'pdf')}
                    className="neo-btn bg-[#286dd7] hover:bg-[#1f5ab8] text-white py-2.5 px-3 text-xs font-black w-full flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Order Instant PDF (₹{book.pdfPrice})</span>
                  </button>

                  <a
                    href={book.amazonUrl || "https://www.amazon.in/storefront?me=A3TSASKOI3KWD9&ref_=ssf_share"}
                    target="_blank"
                    rel="noreferrer"
                    className="neo-btn bg-[#ff9900] hover:bg-[#ffad33] text-[#131921] py-2.5 px-3 text-xs font-black w-full flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>Buy on Amazon India 🛍️</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => setCurrentPageIndex(0)}
                  className="text-xs font-black text-[#286dd7] hover:underline block mx-auto pt-2"
                >
                  ↺ Flip back to Cover
                </button>
              </div>
            </div>
          ) : (
            /* Illustrated Book Page */
            <div className="w-full h-full relative overflow-hidden bg-amber-50">
              {!imageLoadErrors[currentPageIndex] ? (
                <img
                  src={pageImageSrc}
                  alt={isCover ? `${book.title} Cover` : `Sample Page ${currentPageIndex}`}
                  referrerPolicy="no-referrer"
                  loading="eager"
                  onError={() => {
                    setImageLoadErrors(prev => ({ ...prev, [currentPageIndex]: true }));
                  }}
                  className="w-full h-full object-cover select-none"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-100 text-center select-none">
                  <div className="w-12 h-12 rounded-full bg-[#f9d54a] border-3 border-[#24252b] shadow-[2px_2px_0_#24252b] flex items-center justify-center mb-2">
                    <Sparkles className="w-6 h-6 text-amber-800" />
                  </div>
                  <h4 className="text-base font-black text-[#24252b]">
                    {isCover ? book.title : `Page ${currentPageIndex}`}
                  </h4>
                </div>
              )}

              {/* Page Number Badge */}
              <div className="absolute top-2.5 left-2.5 bg-[#f9d54a] border-2 border-[#24252b] rounded-full w-7 h-7 flex items-center justify-center font-black text-[11px] text-[#24252b] shadow-xs z-10">
                {isCover ? '★' : currentPageIndex}
              </div>

              {/* Mobile Swipe Hint on Cover */}
              {isCover && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/75 text-white text-[10px] font-bold px-3 py-1 rounded-full pointer-events-none backdrop-blur-xs flex items-center gap-1 z-10">
                  <span>Swipe ↔ or tap next to read</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Navigation Hotspot Arrow - Right */}
        <button
          type="button"
          disabled={currentPageIndex === maxSlideIndex || isFlipping}
          onClick={goToNext}
          aria-label="Next Page"
          className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/95 text-[#24252b] border-2 border-[#24252b] shadow-[2px_2px_0_#24252b] flex items-center justify-center hover:bg-[#f9d54a] disabled:opacity-0 disabled:pointer-events-none transition-all z-40 active:scale-95 cursor-pointer"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Reader Bottom Bar: Quick Purchase & Page Controls */}
      <div className="w-full max-w-xl space-y-2 shrink-0">
        {/* Quick Purchase Strip */}
        <div className="bg-[#131921] border-2 border-[#24252b] rounded-xl px-3 py-2 text-white flex flex-wrap items-center justify-between gap-2 shadow-[3px_3px_0_#24252b]">
          <span className="text-[11px] font-black text-slate-300">
            Order Full 14-Page Book:
          </span>
          <div className="flex items-center gap-1.5 flex-wrap">
            <button
              type="button"
              onClick={() => onOrderBook(book, 'pdf')}
              className="neo-btn bg-[#286dd7] text-white py-1 px-2 text-[10px] sm:text-[11px] font-black flex items-center gap-1 cursor-pointer"
            >
              <ShoppingBag className="w-3 h-3" />
              <span>PDF ₹{book.pdfPrice}</span>
            </button>
            <button
              type="button"
              onClick={() => onOrderBook(book, 'hardcover')}
              className="neo-btn bg-[#f9d54a] text-[#24252b] py-1 px-2 text-[10px] sm:text-[11px] font-black flex items-center gap-1 cursor-pointer"
            >
              <ShoppingBag className="w-3 h-3 text-amber-800" />
              <span>Hardcover ₹{book.printPrice}</span>
            </button>
            <a
              href={book.amazonUrl || "https://www.amazon.in/storefront?me=A3TSASKOI3KWD9&ref_=ssf_share"}
              target="_blank"
              rel="noreferrer"
              className="neo-btn bg-[#ff9900] text-[#131921] py-1 px-2 text-[10px] sm:text-[11px] font-black flex items-center gap-1 cursor-pointer hover:bg-[#ffad33]"
            >
              <ExternalLink className="w-3 h-3" />
              <span>Amazon 🛍️</span>
            </a>
          </div>
        </div>

        {/* Flip Controls & Dots Indicator */}
        <div className="bg-white border-2 border-[#24252b] rounded-xl px-3 py-1.5 shadow-[3px_3px_0_#24252b] flex items-center justify-between">
          <button
            onClick={goToPrev}
            disabled={currentPageIndex === 0 || isFlipping}
            className="neo-btn bg-slate-100 disabled:opacity-30 text-[#24252b] py-1 px-2.5 text-[11px] font-black flex items-center gap-1 cursor-pointer"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>Prev</span>
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-1.5 px-2">
            {Array.from({ length: maxSlideIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isFlipping) {
                    setIsFlipping(true);
                    setFlipDirection(index > currentPageIndex ? 'next' : 'prev');
                    setTimeout(() => {
                      setCurrentPageIndex(index);
                      setIsFlipping(false);
                    }, 250);
                  }
                }}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  currentPageIndex === index
                    ? 'w-5 bg-[#286dd7] border border-[#24252b]'
                    : 'w-2 bg-slate-300 hover:bg-slate-500'
                }`}
                title={index === 0 ? 'Cover' : index === maxSlideIndex ? 'Order Book' : `Sample Page ${index}`}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            disabled={currentPageIndex === maxSlideIndex || isFlipping}
            className="neo-btn bg-[#f9d54a] disabled:opacity-30 text-[#24252b] py-1 px-2.5 text-[11px] font-black flex items-center gap-1 cursor-pointer"
          >
            <span>Next</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
