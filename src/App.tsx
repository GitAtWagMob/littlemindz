/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import coverImg from './assets/images/storybook_cover_siya_1790441764203.jpg';
import momImg from './assets/images/storybook_mom_daughter_1790441775869.jpg';
import mirrorImg from './assets/images/storybook_magic_mirror_1790441787973.jpg';
import calmImg from './assets/images/storybook_calming_steps_1790441800866.jpg';
import printImg from './assets/images/printed_book_showcase_1790441813451.jpg';
import {
  BookOpen,
  Sparkles,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Volume2,
  Copy,
  Check,
  Send,
  Upload,
  Heart,
  Star,
  ShieldCheck,
  Truck,
  Video,
  FileText,
  Printer,
  Gift,
  HelpCircle,
  ExternalLink,
  MessageCircle,
  Smartphone,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

interface StorySlide {
  id: string;
  pageNumber: string;
  title: string;
  excerpt: string;
  tag: string;
  image: string;
  alt: string;
}

interface PackageOption {
  id: string;
  category: 'pdf' | 'print' | 'video' | 'combo';
  name: string;
  badge?: string;
  price: number;
  originalPrice: number;
  features: string[];
  deliverable: string;
  deliveryTime: string;
  popular?: boolean;
}

const STORY_SLIDES: StorySlide[] = [
  {
    id: 'intro',
    pageNumber: 'Page 1',
    title: 'Aarav & Siya ki Kahaani Shuru',
    excerpt: '“Once upon a time, there was a sweet, curious little girl named Siya who was ready for a big day...”',
    tag: 'Cover & Intro',
    image: coverImg,
    alt: 'Personalised children storybook cover page with cheerful girl Siya reading on pastel rug'
  },
  {
    id: 'parent-bond',
    pageNumber: 'Page 6',
    title: 'Mumma Ka Special Message',
    excerpt: '“Mommy sat beside her and whispered, ‘You have something very special inside you—bravery and love.’ ”',
    tag: 'Parent-Child Connection',
    image: momImg,
    alt: 'Mother sitting with daughter sharing gentle guidance and love in warm cozy bedroom'
  },
  {
    id: 'magic-mirror',
    pageNumber: 'Page 7',
    title: 'The Magic Mirror: Hello Siya!',
    excerpt: '“A golden glow sparkled on the mirror. Letters appeared: ‘You are kind, brave, and deeply loved.’ ”',
    tag: 'Self-Esteem Building',
    image: mirrorImg,
    alt: 'Magical golden mirror reflection showing encouraging words for child'
  },
  {
    id: 'calm-down',
    pageNumber: 'Page 8',
    title: 'Pause, Breathe & Choose Kindness',
    excerpt: '“When big feelings come: Stop... take a deep breath... and choose gentle words.”',
    tag: 'Social & Emotional Habits',
    image: calmImg,
    alt: 'Child learning calming steps, deep breathing, and emotional regulation'
  },
  {
    id: 'printed-edition',
    pageNumber: 'Deluxe Print',
    title: 'Physical Hardcover Showcase',
    excerpt: '“Thick 300 GSM glossy, tear-resistant pages printed with vivid colors and delivered right to your home.”',
    tag: 'Doorstep Delivery in India',
    image: printImg,
    alt: 'High-quality printed personalized storybook lying open on wooden table'
  }
];

const PACKAGES: PackageOption[] = [
  {
    id: 'pdf-single',
    category: 'pdf',
    name: '1 Custom Story PDF',
    price: 199,
    originalPrice: 299,
    deliverable: '1 High-Resolution Digital Book PDF',
    deliveryTime: '1–2 Days on WhatsApp',
    features: [
      'Child’s name, age & gender integrated',
      'Targeted for 1 specific habit or milestone',
      'Phone, tablet & laptop friendly PDF',
      'Ready to read anytime without internet'
    ]
  },
  {
    id: 'pdf-combo',
    category: 'pdf',
    name: '5 Custom Stories Combo PDF',
    badge: 'MOST POPULAR',
    price: 699,
    originalPrice: 1000,
    popular: true,
    deliverable: '5 Personalised Digital Book PDFs',
    deliveryTime: '1–2 Days on WhatsApp',
    features: [
      'Covers 5 different everyday habits / situations',
      'Includes School, Manners, Calming, Sleep & Kindness',
      'Customized illustrations with child’s name',
      'Save ₹301 compared to single books'
    ]
  },
  {
    id: 'video-story',
    category: 'video',
    name: 'Personalised Animated Video Story',
    badge: 'NEW & TRENDING',
    price: 599,
    originalPrice: 999,
    deliverable: 'Full HD 1080p MP4 Video (9:16 Reel Format)',
    deliveryTime: '2–3 Days on WhatsApp',
    features: [
      'Animated story video featuring your child’s name',
      'Professional gentle voiceover narration',
      'Soothing bedtime background music',
      'Easy to share with grandparents & family'
    ]
  },
  {
    id: 'print-ready',
    category: 'print',
    name: 'Print-Ready 300 DPI HD Files',
    price: 399,
    originalPrice: 599,
    deliverable: 'Ultra HD Print-Ready PDF & JPEG Spreads',
    deliveryTime: '1–2 Days on WhatsApp',
    features: [
      '300 DPI CMYK files with bleed margins',
      'Print at home or your local photo lab / studio',
      'Includes cover spread & internal pages',
      'Unlimited personal print rights'
    ]
  },
  {
    id: 'print-hardcover',
    category: 'print',
    name: 'Deluxe Printed Hardcover Book',
    badge: 'PREMIUM KEEPSAKE',
    price: 1299,
    originalPrice: 1799,
    deliverable: 'Physical Hardbound Book Delivered Across India',
    deliveryTime: '5–7 Days (Free Shipping)',
    features: [
      'Premium hardbound gloss/matte cover',
      'Tear-resistant, child-safe thick glossy pages',
      'Custom dedication page with your personal message',
      'Free courier delivery with tracking anywhere in India'
    ]
  },
  {
    id: 'all-in-one',
    category: 'combo',
    name: 'The Ultimate Magic Bundle',
    badge: 'BEST VALUE · SAVE ₹1,100',
    price: 1399,
    originalPrice: 2499,
    deliverable: '5 PDFs + 1 Video Story + 300 DPI Print Files',
    deliveryTime: '1–2 Days Priority WhatsApp',
    features: [
      'Complete 5 Custom Storybooks in PDF format',
      '1 Personalised Animated Video Story with voiceover',
      'Full 300 DPI Print-Ready files for printing',
      'Priority delivery within 1–2 days'
    ]
  }
];

export default function App() {
  // Carousel State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Touch Swipe tracking
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Video State
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Order & Configurator State
  const [selectedPackageId, setSelectedPackageId] = useState<string>('pdf-combo');
  const [childName, setChildName] = useState('');
  const [childAge, setChildAge] = useState('');
  const [situations, setSituations] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copiedUpi, setCopiedUpi] = useState(false);

  const selectedPackage = PACKAGES.find(p => p.id === selectedPackageId) || PACKAGES[1];
  const isPhysicalPrint = selectedPackage.category === 'print' && selectedPackage.id === 'print-hardcover';

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % STORY_SLIDES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;

    if (distance > minSwipeDistance) {
      // Swiped Left -> Next
      setCurrentSlide(prev => (prev + 1) % STORY_SLIDES.length);
      setIsAutoPlaying(false);
    } else if (distance < -minSwipeDistance) {
      // Swiped Right -> Prev
      setCurrentSlide(prev => (prev - 1 + STORY_SLIDES.length) % STORY_SLIDES.length);
      setIsAutoPlaying(false);
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // UPI deep link
  const getUpiUrl = () => {
    const note = encodeURIComponent(`LittleMindZ ${selectedPackage.name}`);
    return `upi://pay?pa=8527166662@pthdfc&pn=${encodeURIComponent('Neha Thakur')}&am=${selectedPackage.price}&cu=INR&tn=${note}`;
  };

  const handleCopyUpi = async () => {
    try {
      await navigator.clipboard.writeText('8527166662@pthdfc');
      setCopiedUpi(true);
      setTimeout(() => setCopiedUpi(false), 2000);
    } catch {
      setCopiedUpi(true);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setSelectedFile(null);
      setFileName('');
      return;
    }

    if (!['image/jpeg', 'image/png'].includes(file.type) || file.size > 5 * 1024 * 1024) {
      setErrors(prev => ({
        ...prev,
        proof: 'Kripya JPG/PNG image chunein (5MB se chhota)'
      }));
      e.target.value = '';
      setSelectedFile(null);
      setFileName('');
      return;
    }

    setErrors(prev => {
      const copy = { ...prev };
      delete copy.proof;
      return copy;
    });
    setSelectedFile(file);
    setFileName(file.name.slice(0, 40));
  };

  const validateForm = () => {
    const errs: Record<string, string> = {};

    if (!childName.trim()) {
      errs.childName = 'Bacche ka naam likhein';
    } else if (childName.trim().length < 2) {
      errs.childName = 'Kam se kam 2 akshar likhein';
    }

    if (!childAge) {
      errs.childAge = 'Bacche ki age select karein';
    }

    if (!situations.trim() || situations.trim().length < 8) {
      errs.situations = 'Thoda detail mein batayein (jaise: school jaane mein dar lagta hai)';
    }

    if (isPhysicalPrint && (!deliveryAddress.trim() || deliveryAddress.trim().length < 15)) {
      errs.deliveryAddress = 'Complete delivery address aur 6-digit PIN code likhein';
    }

    const cleanPhone = phone.replace(/[\s-]/g, '');
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      errs.phone = '10 digit ka valid Indian WhatsApp number likhein';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      const firstKey = Object.keys(errors)[0];
      if (firstKey) {
        document.getElementById(firstKey)?.focus();
      }
      return;
    }

    const cleanPhone = phone.replace(/[\s-]/g, '');
    const lines = [
      '🌸 *Hi Neha, mujhe LittleMindZ custom story order karni hai!*',
      '',
      `👶 *Child's Name:* ${childName.trim()}`,
      `🎂 *Age:* ${childAge}`,
      `✨ *Habits / Theme:* ${situations.trim()}`,
      `📦 *Selected Offering:* ${selectedPackage.name}`,
      `💰 *Price:* ₹${selectedPackage.price} (Original: ₹${selectedPackage.originalPrice})`,
      `📱 *My WhatsApp:* +91 ${cleanPhone}`,
      isPhysicalPrint ? `🏠 *Delivery Address:* ${deliveryAddress.trim()}` : null,
      fileName ? `📸 *Payment Proof:* ${fileName} (Attaching screenshot here)` : '📸 *Payment Proof:* Attaching screenshot in this chat',
      '',
      'Please confirm my payment and start crafting my personalized story. Thank you!'
    ].filter(Boolean);

    const message = lines.join('\n');
    window.open(`https://wa.me/918527166662?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#fffdf7] text-[#24252b] selection:bg-[#f9d54a] selection:text-[#24252b]">
      {/* Top Brand Bar */}
      <header className="sticky top-0 z-40 bg-[#286dd7] border-b-2 border-[#24252b] px-4 py-3 shadow-[0_3px_0_#24252b]">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white text-[#286dd7] flex items-center justify-center font-black text-lg border-2 border-[#24252b] shadow-[2px_2px_0_#24252b]">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <span className="font-black tracking-tight text-white text-lg block leading-none">
                LittleMindZ
              </span>
              <span className="text-[11px] font-bold text-yellow-300 tracking-wide">
                Custom Stories & Videos for Kids
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/918527166662"
              target="_blank"
              rel="noreferrer"
              className="neo-btn bg-[#f9d54a] text-[#24252b] px-3 py-1.5 text-xs font-black flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4 text-emerald-700" />
              <span>WhatsApp Neha</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section with Upgraded Touch Carousel */}
      <section className="bg-[#fff3ab] border-b-2 border-[#24252b] pt-8 pb-12 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 border-2 border-[#24252b] bg-white px-3 py-1 rounded-full text-xs font-black uppercase shadow-[2px_2px_0_#24252b]">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
              <span>Har bacche ke liye 100% Unique Kahaani</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black leading-[1.05] tracking-tight">
              Aapke bacche ke naam aur aadat par bani{' '}
              <span className="text-[#286dd7]">
                kahaani & video!
              </span>
            </h1>

            <p className="text-base sm:text-lg font-bold text-slate-800 leading-relaxed">
              Personalised social story books (PDFs & Deluxe Print) aur animated video stories jo bacche ko
              school, sharing, tantrums aur good habits sikhayein—unhe hero banakar.
            </p>

            {/* Quick Hero Offer Card */}
            <div className="neo-box bg-[#f9d54a] p-4 sm:p-5 mt-4">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-slate-800 block">
                    Most Popular Choice
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black">5 Custom Books Combo PDF</h3>
                </div>
                <span className="bg-[#24252b] text-white text-[11px] font-black px-2.5 py-1 rounded-full whitespace-nowrap">
                  BEST VALUE
                </span>
              </div>

              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-black text-[#24252b]">₹699</span>
                <span className="text-base font-bold text-slate-600 line-through">₹1,000</span>
                <span className="text-xs font-black bg-emerald-100 text-emerald-800 border border-[#24252b] px-2 py-0.5 rounded">
                  Save ₹301
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-bold text-slate-800">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>5 Different Situations</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>WhatsApp Delivery in 1–2 Days</span>
                </div>
              </div>

              <div className="mt-4 flex flex-col sm:flex-row gap-2">
                <a
                  href="#order"
                  className="neo-btn bg-[#286dd7] text-white py-3 px-5 text-center text-sm font-black flex items-center justify-center gap-2 flex-1"
                >
                  <span>Order Shuru Karein</span>
                  <span>↓</span>
                </a>
                <a
                  href="#sample-video"
                  className="neo-btn bg-white text-[#24252b] py-3 px-4 text-center text-sm font-black flex items-center justify-center gap-2"
                >
                  <Play className="w-4 h-4 fill-current text-rose-500" />
                  <span>Watch Video</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Upgraded Touch-Responsive Storybook Carousel */}
          <div className="lg:col-span-6">
            <div className="neo-box bg-white p-3 sm:p-4 shadow-[6px_6px_0_#24252b] relative">
              {/* Carousel Header Controls */}
              <div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <span className="bg-[#24252b] text-white text-[11px] font-black px-2 py-0.5 rounded">
                    {STORY_SLIDES[currentSlide].pageNumber}
                  </span>
                  <span className="text-xs font-black text-[#286dd7] uppercase tracking-wide">
                    {STORY_SLIDES[currentSlide].tag}
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    title={isAutoPlaying ? "Pause auto slide" : "Play auto slide"}
                    className="p-1.5 rounded hover:bg-slate-100 text-slate-700 border border-slate-300"
                  >
                    {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    onClick={() => setIsLightboxOpen(true)}
                    title="Enlarge preview"
                    className="p-1.5 rounded hover:bg-slate-100 text-slate-700 border border-slate-300"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Touch Swipeable Image Area */}
              <div
                className="relative overflow-hidden rounded-md border-2 border-[#24252b] bg-slate-100 aspect-[3/4] sm:aspect-[4/3] cursor-pointer group"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onClick={() => setIsLightboxOpen(true)}
              >
                <img
                  src={STORY_SLIDES[currentSlide].image}
                  alt={STORY_SLIDES[currentSlide].alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />

                {/* Mobile Touch Swipe Hint Pill */}
                <div className="absolute top-2 right-2 bg-black/75 text-white text-[10px] font-bold px-2 py-0.5 rounded-full pointer-events-none backdrop-blur-xs flex items-center gap-1">
                  <span>Swipe ↔</span>
                </div>

                {/* Nav Arrows */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentSlide(prev => (prev - 1 + STORY_SLIDES.length) % STORY_SLIDES.length);
                    setIsAutoPlaying(false);
                  }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white text-[#24252b] border-2 border-[#24252b] shadow-[2px_2px_0_#24252b] flex items-center justify-center hover:bg-yellow-200 active:scale-95 transition-all"
                  aria-label="Previous story slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentSlide(prev => (prev + 1) % STORY_SLIDES.length);
                    setIsAutoPlaying(false);
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white text-[#24252b] border-2 border-[#24252b] shadow-[2px_2px_0_#24252b] flex items-center justify-center hover:bg-yellow-200 active:scale-95 transition-all"
                  aria-label="Next story slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Story Slide Excerpt */}
              <div className="mt-3 p-3 bg-amber-50/80 rounded-md border border-amber-200">
                <h4 className="text-base font-black text-[#24252b]">
                  {STORY_SLIDES[currentSlide].title}
                </h4>
                <p className="text-xs font-semibold text-slate-700 italic mt-0.5">
                  {STORY_SLIDES[currentSlide].excerpt}
                </p>
              </div>

              {/* Thumbnail Strip / Scrubber */}
              <div className="mt-3 flex items-center justify-between gap-1.5 overflow-x-auto hide-scrollbar py-1">
                {STORY_SLIDES.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => {
                      setCurrentSlide(idx);
                      setIsAutoPlaying(false);
                    }}
                    className={`relative rounded border-2 transition-all flex-1 min-w-[50px] aspect-[4/3] overflow-hidden ${
                      currentSlide === idx
                        ? 'border-[#286dd7] ring-2 ring-[#286dd7]/40 scale-105'
                        : 'border-slate-300 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-0 inset-x-0 bg-black/60 text-[9px] text-white font-bold text-center py-0.5">
                      {idx + 1}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Full View */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-3xl w-full max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute -top-12 right-0 p-2 bg-white text-[#24252b] rounded-full border-2 border-[#24252b] font-bold"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="neo-box bg-white p-2 rounded-lg overflow-hidden max-h-[80vh]">
              <img
                src={STORY_SLIDES[currentSlide].image}
                alt={STORY_SLIDES[currentSlide].alt}
                referrerPolicy="no-referrer"
                className="max-h-[75vh] w-auto object-contain rounded"
              />
            </div>
            <div className="mt-3 text-center text-white">
              <p className="font-black text-lg">{STORY_SLIDES[currentSlide].title}</p>
              <p className="text-xs text-slate-300">{STORY_SLIDES[currentSlide].excerpt}</p>
            </div>
          </div>
        </div>
      )}

      {/* Playable Sample Video Showcase (YouTube Shorts Player) */}
      <section id="sample-video" className="py-12 px-4 border-b-2 border-[#24252b] bg-[#bce3ef]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider bg-[#24252b] text-white px-3 py-1 rounded-full mb-2">
              <Video className="w-3.5 h-3.5 text-rose-400" />
              <span>Custom Animated Video Story</span>
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#24252b]">
              Dekhiye Sample Video Story 🎬
            </h2>
            <p className="text-sm sm:text-base font-bold text-slate-800 mt-2">
              Aapke bacche ke naam aur cartoon character ke saath animated bedtime story video, gentle voiceover aur soothing music ke saath!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* 9:16 Video Player Container */}
            <div className="md:col-span-5 flex justify-center">
              <div className="neo-box bg-white p-3 rounded-2xl w-full max-w-[320px] shadow-[6px_6px_0_#24252b]">
                <div className="relative aspect-[9/16] rounded-xl overflow-hidden border-2 border-[#24252b] bg-slate-900">
                  {isVideoPlaying ? (
                    <iframe
                      src="https://www.youtube.com/embed/72Y4keyHIDU?autoplay=1&rel=0&modestbranding=1&playsinline=1"
                      title="Sample Custom Video Story for Kids"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  ) : (
                    <div className="relative w-full h-full group cursor-pointer" onClick={() => setIsVideoPlaying(true)}>
                      <img
                        src={mirrorImg}
                        alt="Playable video preview"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-between p-4">
                        <div className="self-end bg-rose-600 text-white text-[10px] font-black px-2 py-0.5 rounded shadow">
                          YouTube Short
                        </div>

                        <div className="text-center my-auto">
                          <div className="w-16 h-16 rounded-full bg-white/95 text-rose-600 border-2 border-[#24252b] flex items-center justify-center mx-auto shadow-[3px_3px_0_#24252b] group-hover:scale-110 transition-transform">
                            <Play className="w-7 h-7 fill-current ml-1" />
                          </div>
                          <span className="text-white font-black text-sm block mt-3 drop-shadow">
                            Tap to Play Sample Video
                          </span>
                          <span className="text-yellow-300 text-xs font-bold drop-shadow">
                            0:59 min · Audio + Animation
                          </span>
                        </div>

                        <div className="text-left text-white text-xs font-bold">
                          <p className="line-clamp-1">Personalised with Child’s Name & Voiceover</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-2.5 text-center">
                  <a
                    href="https://youtube.com/shorts/72Y4keyHIDU?si=dO48HaPpweCO8p10"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-bold text-[#286dd7] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Open directly in YouTube</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Video Highlights & Features */}
            <div className="md:col-span-7 space-y-4">
              <div className="neo-box bg-white p-5">
                <h3 className="text-xl font-black text-[#24252b] mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-500 fill-amber-400" />
                  <span>Custom Video Story mein kya milta hai?</span>
                </h3>

                <ul className="space-y-3 text-sm font-bold text-slate-800">
                  <li className="flex items-start gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 border border-[#24252b]">
                      1
                    </span>
                    <div>
                      <strong className="text-slate-900 block">Personalised Voiceover Narration:</strong>
                      Bacche ka naam story mein baar-baar bola jaata hai jisse wo excited ho kar sunte hain.
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center shrink-0 border border-[#24252b]">
                      2
                    </span>
                    <div>
                      <strong className="text-slate-900 block">Animated 3D Visuals & Magic Elements:</strong>
                      Glowing mirrors, bedtime stars, aur calming cartoon characters jo screen time ko meaningful banayein.
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center shrink-0 border border-[#24252b]">
                      3
                    </span>
                    <div>
                      <strong className="text-slate-900 block">9:16 Full HD Mobile Format (MP4):</strong>
                      Phone, tablet, TV ya WhatsApp par seamlessly play hota hai. Dadi, Nani, aur family ke saath share karne ke liye perfect!
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 border border-[#24252b]">
                      4
                    </span>
                    <div>
                      <strong className="text-slate-900 block">Positive Habit & Calm Mind Reinforcement:</strong>
                      Gussa control karna, bedtime routine, aur polite words sikhane ka sabse asardaar tareeka.
                    </div>
                  </li>
                </ul>

                <div className="mt-5 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="text-xs font-bold text-slate-600 block">Special Launch Price:</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black text-[#286dd7]">₹599</span>
                      <span className="text-sm line-through text-slate-500">₹999</span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedPackageId('video-story');
                      document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="neo-btn bg-[#f9d54a] text-[#24252b] px-4 py-2 text-xs font-black"
                  >
                    Select Video Story Bundle →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Showcase: PDF, Print & Video */}
      <section className="py-12 px-4 border-b-2 border-[#24252b] bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-black uppercase tracking-wider text-[#286dd7] block">
              Flexible Options for Every Family
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#24252b] mt-1">
              Choose What Fits Your Needs
            </h2>
            <p className="text-sm sm:text-base font-bold text-slate-600 mt-2">
              Hamare paas Digital PDFs, High-Resolution Print Options aur Animated Video Stories available hain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Digital PDF Books */}
            <div className="neo-box bg-[#f5cbd0] p-5 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border-2 border-[#24252b] flex items-center justify-center mb-3 shadow-[2px_2px_0_#24252b]">
                  <FileText className="w-6 h-6 text-rose-600" />
                </div>
                <h3 className="text-xl font-black text-[#24252b]">Digital PDF Books</h3>
                <p className="text-xs font-bold text-slate-700 mt-1 mb-3">
                  Mobile aur iPad par padhne ke liye instant social story PDFs.
                </p>
                <ul className="text-xs font-bold space-y-1.5 text-slate-800">
                  <li>✓ 1–2 Days mein WhatsApp delivery</li>
                  <li>✓ Child’s name & personalized story</li>
                  <li>✓ Single Book: ₹199</li>
                  <li>✓ 5 Books Combo: ₹699 (Save ₹301)</li>
                </ul>
              </div>
              <button
                onClick={() => {
                  setSelectedPackageId('pdf-combo');
                  document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="neo-btn bg-white text-[#24252b] py-2 px-3 text-xs font-black mt-5 text-center"
              >
                Choose PDF Options
              </button>
            </div>

            {/* Card 2: Print Editions */}
            <div className="neo-box bg-[#c9e7ca] p-5 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border-2 border-[#24252b] flex items-center justify-center mb-3 shadow-[2px_2px_0_#24252b]">
                  <Printer className="w-6 h-6 text-emerald-700" />
                </div>
                <h3 className="text-xl font-black text-[#24252b]">Print Options</h3>
                <p className="text-xs font-bold text-slate-700 mt-1 mb-3">
                  Ghar par print karein ya premium physical hardcover mangwayein.
                </p>
                <ul className="text-xs font-bold space-y-1.5 text-slate-800">
                  <li>✓ 300 DPI Print-Ready HD Files: ₹399</li>
                  <li>✓ Deluxe Hardbound Physical Book: ₹1,299</li>
                  <li>✓ Free Doorstep Shipping across India</li>
                  <li>✓ Tear-resistant glossy pages for toddlers</li>
                </ul>
              </div>
              <button
                onClick={() => {
                  setSelectedPackageId('print-hardcover');
                  document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="neo-btn bg-white text-[#24252b] py-2 px-3 text-xs font-black mt-5 text-center"
              >
                Choose Print Options
              </button>
            </div>

            {/* Card 3: Video Stories */}
            <div className="neo-box bg-[#dfd0ed] p-5 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border-2 border-[#24252b] flex items-center justify-center mb-3 shadow-[2px_2px_0_#24252b]">
                  <Video className="w-6 h-6 text-purple-700" />
                </div>
                <h3 className="text-xl font-black text-[#24252b]">Custom Video Story</h3>
                <p className="text-xs font-bold text-slate-700 mt-1 mb-3">
                  Bacche ke naam ke saath animated bedtime story reel.
                </p>
                <ul className="text-xs font-bold space-y-1.5 text-slate-800">
                  <li>✓ Professional Hindi/English voiceover</li>
                  <li>✓ 9:16 Full HD video (WhatsApp friendly)</li>
                  <li>✓ Standalone Video Story: ₹599</li>
                  <li>✓ All-in-One Magic Bundle: ₹1,399</li>
                </ul>
              </div>
              <button
                onClick={() => {
                  setSelectedPackageId('all-in-one');
                  document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="neo-btn bg-white text-[#24252b] py-2 px-3 text-xs font-black mt-5 text-center"
              >
                Choose Video & Combos
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Order & Booking Section */}
      <section id="order" className="py-12 px-4 border-b-2 border-[#24252b] bg-[#fffdf7]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-black uppercase tracking-wider text-[#286dd7] bg-blue-100 border border-[#24252b] px-3 py-1 rounded-full">
              2-Minute Fast Order
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#24252b] mt-2">
              Apne Bacche Ki Kahaani Order Karein
            </h2>
            <p className="text-sm font-bold text-slate-600 mt-1">
              Package select karein, details bharein, payment confirm karein aur direct WhatsApp par order bhejein.
            </p>
          </div>

          <form onSubmit={handleOrderSubmit} className="space-y-6">
            {/* Step 1: Package Selection */}
            <div className="neo-box bg-white p-5">
              <label className="text-sm font-black text-[#24252b] flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-[#f9d54a] border-2 border-[#24252b] flex items-center justify-center text-xs">
                  1
                </span>
                <span>Choose Offering / Package:</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PACKAGES.map(pkg => {
                  const isSelected = selectedPackageId === pkg.id;
                  return (
                    <label
                      key={pkg.id}
                      onClick={() => setSelectedPackageId(pkg.id)}
                      className={`relative p-3.5 rounded-lg border-2 cursor-pointer transition-all flex flex-col justify-between ${
                        isSelected
                          ? 'border-[#24252b] bg-[#f9d54a] shadow-[4px_4px_0_#24252b] translate-x-[-1px] translate-y-[-1px]'
                          : 'border-slate-300 bg-white hover:border-slate-400'
                      }`}
                    >
                      <div>
                        <div className="flex items-start justify-between gap-1 mb-1">
                          <input
                            type="radio"
                            name="package"
                            value={pkg.id}
                            checked={isSelected}
                            onChange={() => setSelectedPackageId(pkg.id)}
                            className="w-4 h-4 mt-0.5 accent-[#286dd7]"
                          />
                          {pkg.badge && (
                            <span className="text-[10px] font-black bg-[#24252b] text-white px-2 py-0.5 rounded-full">
                              {pkg.badge}
                            </span>
                          )}
                        </div>

                        <span className="font-black text-sm text-[#24252b] block leading-snug">
                          {pkg.name}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-700 block mt-0.5">
                          {pkg.deliverable}
                        </span>
                      </div>

                      <div className="mt-2.5 pt-2 border-t border-black/10 flex items-baseline justify-between">
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-lg font-black text-[#24252b]">₹{pkg.price}</span>
                          <span className="text-xs text-slate-600 line-through">₹{pkg.originalPrice}</span>
                        </div>
                        <span className="text-[11px] font-extrabold text-[#24252b] bg-black/5 px-2 py-0.5 rounded border border-black/10">
                          ⚡ {pkg.deliveryTime.split(' ')[0]} days
                        </span>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Child Details */}
            <div className="neo-box bg-white p-5 space-y-4">
              <label className="text-sm font-black text-[#24252b] flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#bce3ef] border-2 border-[#24252b] flex items-center justify-center text-xs">
                  2
                </span>
                <span>Bacche ki Details:</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="childName" className="block text-xs font-bold text-slate-700 mb-1">
                    Bacche Ka Naam *
                  </label>
                  <input
                    id="childName"
                    type="text"
                    value={childName}
                    onChange={e => setChildName(e.target.value)}
                    placeholder="Jaise Aarav ya Siya"
                    className={`w-full px-3 py-2.5 border-2 rounded-md font-bold text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#286dd7] ${
                      errors.childName ? 'border-rose-600 bg-rose-50' : 'border-[#24252b]'
                    }`}
                  />
                  {errors.childName && (
                    <p className="text-xs font-bold text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.childName}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="childAge" className="block text-xs font-bold text-slate-700 mb-1">
                    Bacche Ki Age *
                  </label>
                  <select
                    id="childAge"
                    value={childAge}
                    onChange={e => setChildAge(e.target.value)}
                    className={`w-full px-3 py-2.5 border-2 rounded-md font-bold text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#286dd7] ${
                      errors.childAge ? 'border-rose-600 bg-rose-50' : 'border-[#24252b]'
                    }`}
                  >
                    <option value="">Age select karein</option>
                    <option value="1-2 years">1–2 years (Toddler / First Words)</option>
                    <option value="2-3 years">2–3 years (Preschool / Potty / Sharing)</option>
                    <option value="3-4 years">3–4 years (School Prep / Big Emotions)</option>
                    <option value="4-5 years">4–5 years (Confidence / Sibling Love)</option>
                    <option value="5-6 years">5–6 years (Friendship / Focus)</option>
                    <option value="6-8 years">6–8 years (Reading / Responsibility)</option>
                  </select>
                  {errors.childAge && (
                    <p className="text-xs font-bold text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.childAge}</span>
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="situations" className="block text-xs font-bold text-slate-700 mb-1">
                  Daily Situations ya Habits jisme help chahiye *
                </label>
                <textarea
                  id="situations"
                  rows={3}
                  value={situations}
                  onChange={e => setSituations(e.target.value)}
                  placeholder="Jaise: School jaane par rota hai, toys share nahi karta, gusse mein cheekhta hai, veggies nahi khata..."
                  className={`w-full px-3 py-2.5 border-2 rounded-md font-bold text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#286dd7] ${
                    errors.situations ? 'border-rose-600 bg-rose-50' : 'border-[#24252b]'
                  }`}
                />
                <p className="text-[11px] font-semibold text-slate-500 mt-0.5">
                  Isi aadat ke hisaab se Neha story likhein gi taaki baccha easily connect kare.
                </p>
                {errors.situations && (
                  <p className="text-xs font-bold text-rose-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.situations}</span>
                  </p>
                )}
              </div>

              {/* Physical Print Address (conditional) */}
              {isPhysicalPrint && (
                <div className="p-3 bg-emerald-50 rounded-md border-2 border-emerald-600">
                  <label htmlFor="deliveryAddress" className="block text-xs font-black text-emerald-900 mb-1">
                    📦 Courier Delivery Address & Pincode (All India Delivery) *
                  </label>
                  <textarea
                    id="deliveryAddress"
                    rows={2}
                    value={deliveryAddress}
                    onChange={e => setDeliveryAddress(e.target.value)}
                    placeholder="House/Flat No., Landmark, City, State, 6-digit Pincode..."
                    className={`w-full px-3 py-2 border-2 rounded-md font-bold text-xs bg-white focus:outline-none ${
                      errors.deliveryAddress ? 'border-rose-600' : 'border-[#24252b]'
                    }`}
                  />
                  {errors.deliveryAddress && (
                    <p className="text-xs font-bold text-rose-600 mt-1">{errors.deliveryAddress}</p>
                  )}
                </div>
              )}

              <div>
                <label htmlFor="phone" className="block text-xs font-bold text-slate-700 mb-1">
                  Aapka WhatsApp Number (PDF / Video yahan deliver hoga) *
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 font-black text-sm text-slate-700">
                    +91
                  </span>
                  <input
                    id="phone"
                    type="tel"
                    maxLength={10}
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="98765 43210"
                    className={`w-full pl-12 pr-3 py-2.5 border-2 rounded-md font-bold text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#286dd7] ${
                      errors.phone ? 'border-rose-600 bg-rose-50' : 'border-[#24252b]'
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-xs font-bold text-rose-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Step 3: Payment Section */}
            <div className="neo-box bg-[#fff1b4] p-5">
              <div className="flex items-center justify-between pb-3 border-b-2 border-[#24252b]">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#f5cbd0] border-2 border-[#24252b] flex items-center justify-center text-xs font-black">
                    3
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-[#24252b]">
                      Pay ₹{selectedPackage.price} via UPI
                    </h3>
                    <span className="text-xs font-bold text-slate-700 block">
                      {selectedPackage.name}
                    </span>
                  </div>
                </div>
                <span className="bg-[#24252b] text-white text-xs font-black px-2.5 py-1 rounded-full">
                  INSTANT UPI
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center mt-4">
                {/* QR Code */}
                <div className="sm:col-span-5 flex flex-col items-center">
                  <div className="p-2.5 bg-white border-2 border-[#24252b] rounded-lg shadow-[3px_3px_0_#24252b]">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUgAAAFIAQMAAAAI2vVwAAAABlBMVEUAAAD///+l2Z/dAAAAAnRSTlP//8i138cAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAGwSURBVGiB7dXBbsMwDANQ/v9Pc2hNSupQrPIO24UpEDT2Uw4yq4LbC5GR/yFxrucDVPp41Ip3I7dSjYXLqtdg70bu5WN3eHS30buRl9J3t5ov65G3ki9GsY78hVSGK8Reerp3MyTyJ1nbbz81JSJ3si73XIWYe5FrWRtq9Ck/A6I+kXupnvci/f8lAkZeSF99DDyFUA36hZEfpW+9pmhX52e0Iz9JuN3ut1JcC1UUuZLnp2+hvU4xtR65k9V/jgFBpbkmReRaoqaCQ+toE6xYRy4lahzMG0aoEXkhvVtprnGhJ02OyJ0cK2NSVN8rxpFr2amWOOQl3ZFb6f8onwEwuCsi19Ld1oI9yTqHyL30rptOj9cuGe2PXEmowJ2n4RggkSt5IquWQ7Vj15WRawm3WY3uUOsNjLyRZ8cDAT0iqi7yUnZmvUQKzmBHLqRjDHo8fD+PyL305fwWpnPsk4jcyOpvfdUpaNVPkUt5mkyq366YIyLyRlaHqUa/hBvwqIi8kmr0TO84gchbOfosxZnzyK083x1ieMT2SyJvJBzYenDHT5o5DyPyk1xekZF/L78AcKhrO8JdI6gAAAAASUVORK5CYII="
                      alt="UPI QR Code for Neha Thakur"
                      className="w-36 h-36"
                    />
                  </div>
                  <span className="text-[11px] font-bold text-slate-700 mt-1">
                    Scan with GPay, PhonePe, Paytm
                  </span>
                </div>

                {/* Actions */}
                <div className="sm:col-span-7 space-y-2.5">
                  <a
                    href={getUpiUrl()}
                    className="neo-btn bg-[#286dd7] text-white py-3 px-4 text-center text-sm font-black flex items-center justify-center gap-2 w-full"
                  >
                    <Smartphone className="w-4 h-4" />
                    <span>Pay ₹{selectedPackage.price} with UPI App</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyUpi}
                    className="neo-btn bg-white text-[#24252b] py-2.5 px-4 text-xs font-black flex items-center justify-center gap-2 w-full"
                  >
                    {copiedUpi ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span>UPI ID Copied (8527166662@pthdfc)</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy UPI ID: 8527166662@pthdfc</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] font-bold text-slate-700 text-center">
                    Pay karne ke baad screenshot save karein aur niche attach karein.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4: Screenshot Upload & Send */}
            <div className="neo-box bg-white p-5 space-y-4">
              <label className="text-sm font-black text-[#24252b] flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#c9e7ca] border-2 border-[#24252b] flex items-center justify-center text-xs">
                  4
                </span>
                <span>Payment Screenshot (Optional / Recommended):</span>
              </label>

              <label className="border-2 border-dashed border-[#24252b] bg-[#f8f4e9] rounded-lg p-4 flex items-center gap-3 cursor-pointer hover:bg-amber-100/60 transition-colors">
                <div className="w-10 h-10 rounded-full bg-white border-2 border-[#24252b] flex items-center justify-center shrink-0">
                  <Upload className="w-5 h-5 text-[#286dd7]" />
                </div>
                <div className="flex-1 min-w-0">
                  <strong className="block text-sm font-black truncate text-[#24252b]">
                    {fileName || 'Payment screenshot choose karein'}
                  </strong>
                  <span className="block text-[11px] font-semibold text-slate-600">
                    JPG/PNG format, up to 5 MB. (WhatsApp mein bhi bhej sakte hain)
                  </span>
                </div>
                <input
                  type="file"
                  accept="image/jpeg,image/png"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
              {errors.proof && (
                <p className="text-xs font-bold text-rose-600">{errors.proof}</p>
              )}

              <button
                type="submit"
                className="neo-btn bg-[#286dd7] text-white py-3.5 px-6 text-base font-black w-full flex items-center justify-center gap-2 shadow-[4px_4px_0_#24252b] hover:bg-[#1b53a8]"
              >
                <Send className="w-5 h-5" />
                <span>Order WhatsApp Par Bhejo →</span>
              </button>

              <p className="text-center text-xs font-bold text-slate-600">
                🔒 Button dabane par WhatsApp khulega jahan Neha aapke order aur payment ko confirm karengi.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Trust & Delivery Timelines Section */}
      <section className="py-12 px-4 border-b-2 border-[#24252b] bg-[#f9d54a]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="neo-box bg-white p-6">
            <h3 className="text-xl font-black text-[#24252b] mb-3 flex items-center gap-2">
              <Truck className="w-5 h-5 text-[#286dd7]" />
              <span>Delivery Timelines & Quality</span>
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm font-bold text-slate-800">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Digital PDF Books:</strong> 1 se 2 days mein high-res PDF WhatsApp par deliver hota hai.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Custom Video Story:</strong> 2 se 3 days mein 1080p MP4 file with narration WhatsApp par aati hai.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Deluxe Hardcover Books:</strong> 5 se 7 days mein courier se poore India mein doorstep delivery.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Free Corrections:</strong> Agar spelling ya details mein koi error ho to turant WhatsApp par update kiya jata hai.</span>
              </li>
            </ul>
          </div>

          <div className="neo-box bg-white p-6">
            <h3 className="text-xl font-black text-[#24252b] mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>Aapke Parivaar Ki Privacy</span>
            </h3>
            <p className="text-xs sm:text-sm font-bold text-slate-800 leading-relaxed">
              Bacche ka naam, photos, age aur personal situations sirf unki custom storybook aur video generate karne ke liye use hoti hain.
              Aapka koi bhi data kisi third-party ko sell ya share nahi hota.
              Order complete hone ke baad aap jab chahein WhatsApp par message karke apna data delete karwa sakte hain.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-200 flex items-center gap-2 text-xs font-bold text-slate-700">
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
              <span>Crafted with love by Neha Thakur for growing minds.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#24252b] text-[#fffdf7] py-10 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-black text-[#f9d54a]">LittleMindZ</h3>
            <p className="text-xs font-bold text-slate-300 mt-1 max-w-sm">
              Custom social stories, print keepsakes, and animated video stories created lovingly for little minds.
            </p>
            <a
              href="https://instagram.com/faithfamilylife_nehathakur"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold text-sky-300 hover:underline mt-2 inline-block"
            >
              Instagram: @faithfamilylife_nehathakur
            </a>
          </div>

          <div className="text-center md:text-right">
            <div className="inline-flex items-center gap-2 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <a
                href="https://wa.me/918527166662"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold text-white hover:underline"
              >
                Direct WhatsApp: +91 8527166662
              </a>
            </div>
            <p className="text-[11px] font-semibold text-slate-400 mt-2">
              © {new Date().getFullYear()} LittleMindZ. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
