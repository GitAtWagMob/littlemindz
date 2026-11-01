// LittleMindZ Culture & Devotion Early Reader Books by Neha Thakur

export const AMAZON_STOREFRONT_URL = 'https://www.amazon.in/storefront?me=A3TSASKOI3KWD9&ref_=ssf_share';

// Durga Images (Sample Pages: Cover + 4 Lessons)
import durgaCover from '../assets/images/books/durga/page-01.jpg';
import durgaP1 from '../assets/images/books/durga/page-03.jpg';
import durgaP2 from '../assets/images/books/durga/page-04.jpg';
import durgaP3 from '../assets/images/books/durga/page-05.jpg';
import durgaP4 from '../assets/images/books/durga/page-06.jpg';

// Krishna Images (Sample Pages: Cover + 4 Lessons)
import krishnaCover from '../assets/images/books/krishna/page-01.jpg';
import krishnaP1 from '../assets/images/books/krishna/page-03.jpg';
import krishnaP2 from '../assets/images/books/krishna/page-04.jpg';
import krishnaP3 from '../assets/images/books/krishna/page-05.jpg';
import krishnaP4 from '../assets/images/books/krishna/page-06.jpg';

// Hanuman Images (Sample Pages: Cover + 4 Lessons)
import hanumanCover from '../assets/images/books/hanuman/page-01.jpg';
import hanumanP1 from '../assets/images/books/hanuman/page-03.jpg';
import hanumanP2 from '../assets/images/books/hanuman/page-04.jpg';
import hanumanP3 from '../assets/images/books/hanuman/page-05.jpg';
import hanumanP4 from '../assets/images/books/hanuman/page-06.jpg';

// Shiva Images (Sample Pages: Cover + 4 Lessons)
import shivaCover from '../assets/images/books/shiva/page-01.jpg';
import shivaP1 from '../assets/images/books/shiva/page-03.jpg';
import shivaP2 from '../assets/images/books/shiva/page-04.jpg';
import shivaP3 from '../assets/images/books/shiva/page-05.jpg';
import shivaP4 from '../assets/images/books/shiva/page-06.jpg';

// Ganesha Images (Sample Pages: Cover + 4 Lessons)
import ganeshaCover from '../assets/images/books/ganesha/page-01.jpg';
import ganeshaP1 from '../assets/images/books/ganesha/page-03.jpg';
import ganeshaP2 from '../assets/images/books/ganesha/page-04.jpg';
import ganeshaP3 from '../assets/images/books/ganesha/page-05.jpg';
import ganeshaP4 from '../assets/images/books/ganesha/page-06.jpg';

// Diwali Cover
import diwaliCoverImg from '../assets/images/diwali_book_cover_1791651706102.jpg';

export interface CultureBookPage {
  pageNumber: number;
  title: string;
  theme: string;
  pageImage: string;
  narration: string;
}

export interface CultureBook {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  badge?: string;
  category: 'culture' | 'festival';
  tagline: string;
  description: string;
  recommendedAge: string;
  skillsFocus: string[];
  pdfPrice: number;
  pdfOriginalPrice: number;
  printPrice: number;
  printOriginalPrice: number;
  coverImage: string;
  spreadImage?: string;
  isAvailableNow: boolean;
  totalPages: number;
  amazonUrl: string;
  packageIdPdf: string;
  packageIdHardcover: string;
  pages: CultureBookPage[];
}

export const CULTURE_BOOKS: CultureBook[] = [
  {
    id: 'maa-durga',
    title: 'My First Maa Durga Reading Book',
    subtitle: 'An Early Learning Book of Kindness, Courage & Devotion',
    author: 'Neha Thakur',
    badge: 'READY NOW · BESTSELLER',
    category: 'culture',
    tagline: 'Easy-to-read sight word sentences paired with divine, loving illustrations for toddlers.',
    description: 'Specially crafted for ages 2 to 7. Children learn about Maa Durga as a caring mother figure who loves them, teaches kindness, protects nature, and inspires bravery. Includes Nine Forms of Navadurga and Sacred Symbols in the full edition.',
    recommendedAge: 'Ages 2–7',
    skillsFocus: ['Early Reading Sight Words', 'Kindness & Sharing', 'Navadurga & Traditions', 'Love for Animals & Nature'],
    pdfPrice: 149,
    pdfOriginalPrice: 249,
    printPrice: 249,
    printOriginalPrice: 399,
    coverImage: durgaCover,
    spreadImage: durgaP4,
    isAvailableNow: true,
    totalPages: 4,
    amazonUrl: 'https://www.amazon.in/dp/B0HPM8WJJ9',
    packageIdPdf: 'culture-maa-durga-pdf',
    packageIdHardcover: 'culture-maa-durga-hardcover',
    pages: [
      {
        pageNumber: 1,
        title: 'My Maa Durga',
        theme: 'Love & Kindness',
        pageImage: durgaP1,
        narration: 'This is Maa Durga. She is kind. She loves me. I love Maa.'
      },
      {
        pageNumber: 2,
        title: 'Maa Has a Lion',
        theme: 'Strength & Protection',
        pageImage: durgaP2,
        narration: 'This is a lion. The lion is big. The lion is strong. Maa is with him.'
      },
      {
        pageNumber: 3,
        title: 'Maa Helps Me',
        theme: 'Caring & Safety',
        pageImage: durgaP3,
        narration: 'Maa can help. Maa can care. She keeps me safe. I feel happy with Maa.'
      },
      {
        pageNumber: 4,
        title: 'Nine Forms of Maa Durga',
        theme: 'Navadurga for Early Learners',
        pageImage: durgaP4,
        narration: 'Nine Forms of Maa Durga: Shailputri, Brahmacharini, Chandraghanta, Kushmanda, Skandamata, Katyayani, Kaalratri, Mahagauri, and Siddhidatri.'
      }
    ]
  },
  {
    id: 'krishna',
    title: 'My First Krishna Reading Book',
    subtitle: 'An Early Learning Book of Love, Kindness & Friendship',
    author: 'Neha Thakur',
    badge: 'READY NOW · POPULAR',
    category: 'culture',
    tagline: 'Sweet toddler Krishna, gentle cows, playful flute tunes, and heartwarming friendship lessons.',
    description: 'Specially crafted for ages 2 to 7. Children connect with little Krishna playing his flute, caring for animals, sharing butter with playful friends, and spreading pure love.',
    recommendedAge: 'Ages 2–7',
    skillsFocus: ['Sharing & Empathy', 'Love for Animals', 'Early Sight Words', 'Friendship Values'],
    pdfPrice: 149,
    pdfOriginalPrice: 249,
    printPrice: 299,
    printOriginalPrice: 499,
    coverImage: krishnaCover,
    spreadImage: krishnaP4,
    isAvailableNow: true,
    totalPages: 4,
    amazonUrl: 'https://www.amazon.in/dp/B0HP6NP4B9',
    packageIdPdf: 'culture-krishna-pdf',
    packageIdHardcover: 'culture-krishna-hardcover',
    pages: [
      {
        pageNumber: 1,
        title: 'My Krishna',
        theme: 'Divine Love & Sweetness',
        pageImage: krishnaP1,
        narration: 'This is Krishna. He is kind. I love Krishna.'
      },
      {
        pageNumber: 2,
        title: 'Krishna and His Flute',
        theme: 'Music & Melody',
        pageImage: krishnaP2,
        narration: 'This is a flute. Krishna can play. I hear the tune.'
      },
      {
        pageNumber: 3,
        title: 'Krishna and the Cow',
        theme: 'Gentleness to Animals',
        pageImage: krishnaP3,
        narration: 'This is a cow. The cow is big. Krishna is kind.'
      },
      {
        pageNumber: 4,
        title: 'Krishna and His Friends',
        theme: 'Play & Joy',
        pageImage: krishnaP4,
        narration: 'These are my friends. We can run. We can hop.'
      }
    ]
  },
  {
    id: 'hanuman',
    title: 'My First Hanuman Reading Book',
    subtitle: 'An Early Learning Book of Strength, Devotion & Good Habits',
    author: 'Neha Thakur',
    badge: 'READY NOW · FAVORITE',
    category: 'culture',
    tagline: 'Inspiring little Bal Hanuman with his golden gada, bravery, love for parents, and selfless helping.',
    description: 'Specially crafted for ages 2 to 7. Children discover how Hanuman uses his strength only for good, respects his mother Maa Anjani, flies across the sea, and helps everyone in need.',
    recommendedAge: 'Ages 2–7',
    skillsFocus: ['Courage & Bravery', 'Respecting Parents', 'Helping Others', 'Early Reading Phonics'],
    pdfPrice: 149,
    pdfOriginalPrice: 249,
    printPrice: 249,
    printOriginalPrice: 399,
    coverImage: hanumanCover,
    spreadImage: hanumanP4,
    isAvailableNow: true,
    totalPages: 4,
    amazonUrl: 'https://www.amazon.in/dp/B0HPB4KV23',
    packageIdPdf: 'culture-hanuman-pdf',
    packageIdHardcover: 'culture-hanuman-hardcover',
    pages: [
      {
        pageNumber: 1,
        title: 'Lord Hanuman',
        theme: 'Brave and Strong',
        pageImage: hanumanP1,
        narration: 'Lord Hanuman is brave and strong. He loves Lord Rama. He always helps others.'
      },
      {
        pageNumber: 2,
        title: 'The Golden Gada',
        theme: 'Strength for Good',
        pageImage: hanumanP2,
        narration: 'Lord Hanuman holds a golden gada. It shows his great strength. He uses his power for good.'
      },
      {
        pageNumber: 3,
        title: 'Devotion to Rama',
        theme: 'Faith and Love',
        pageImage: hanumanP3,
        narration: 'Hanuman loves Lord Rama. He serves Rama with love. He is always faithful.'
      },
      {
        pageNumber: 4,
        title: 'Flying Far with Herbs',
        theme: 'Selfless Service',
        pageImage: hanumanP4,
        narration: 'Hanuman can fly very far. He carries a mountain of herbs. He helps Lakshmana get well.'
      }
    ]
  },
  {
    id: 'shiva',
    title: 'My First Shiva Reading Book',
    subtitle: 'An Early Learning Book of Peace, Nature & Loving Family',
    author: 'Neha Thakur',
    badge: 'READY NOW · DEVOTIONAL',
    category: 'culture',
    tagline: 'Gentle toddler Shiva on Mount Kailash with Nandi bull, calming damru, and peaceful meditation.',
    description: 'Specially crafted for ages 2 to 7. Children learn how Lord Shiva stays calm and peaceful, cherishes his loving family (Maa Parvati, Ganesha & Kartikeya), and cares tenderly for nature and animals.',
    recommendedAge: 'Ages 2–7',
    skillsFocus: ['Staying Calm & Mindful', 'Family Togetherness', 'Nature Care', 'Gentleness to Animals'],
    pdfPrice: 149,
    pdfOriginalPrice: 249,
    printPrice: 249,
    printOriginalPrice: 399,
    coverImage: shivaCover,
    spreadImage: shivaP3,
    isAvailableNow: true,
    totalPages: 4,
    amazonUrl: 'https://www.amazon.in/dp/B0HPC62PCG',
    packageIdPdf: 'culture-shiva-pdf',
    packageIdHardcover: 'culture-shiva-hardcover',
    pages: [
      {
        pageNumber: 1,
        title: 'Lord Shiva',
        theme: 'Kind and Loving',
        pageImage: shivaP1,
        narration: 'This is Lord Shiva. He is kind and loving. He lives on Mount Kailash.'
      },
      {
        pageNumber: 2,
        title: 'Trishul and Damru',
        theme: 'Always Calm',
        pageImage: shivaP2,
        narration: 'Lord Shiva has a trishul. He has a damru. He is always calm.'
      },
      {
        pageNumber: 3,
        title: "Shiva's Family",
        theme: 'Loving Family Bonds',
        pageImage: shivaP3,
        narration: "This is Shiva's family. His wife is Parvati. He has two sons, Ganesha and Kartikeya."
      },
      {
        pageNumber: 4,
        title: 'Nandi the Bull',
        theme: 'Loyalty and Friendship',
        pageImage: shivaP4,
        narration: 'Lord Shiva has a bull. His name is Nandi. Nandi is loyal and strong.'
      }
    ]
  },
  {
    id: 'ganesha',
    title: 'My First Ganesha Reading Book',
    subtitle: 'An Early Learning Book of Wisdom, Learning & Good Beginnings',
    author: 'Neha Thakur',
    badge: 'READY NOW · BESTSELLER',
    category: 'culture',
    tagline: 'Cute toddler Ganesha, sweet modak treats, loyal Mushak mouse friend, and clearing all obstacles.',
    description: 'Specially crafted for ages 2 to 7. Children learn why Bal Ganesha is prayed to first, how he loves books and wrote the Mahabharata, his big elephant head of wisdom, and how he removes all problems.',
    recommendedAge: 'Ages 2–7',
    skillsFocus: ['Love for Books & Learning', 'Overcoming Obstacles', 'Kindness & Gratitude', 'Respecting Elders'],
    pdfPrice: 149,
    pdfOriginalPrice: 249,
    printPrice: 249,
    printOriginalPrice: 399,
    coverImage: ganeshaCover,
    spreadImage: ganeshaP4,
    isAvailableNow: true,
    totalPages: 4,
    amazonUrl: 'https://www.amazon.in/dp/B0HPBTJH78',
    packageIdPdf: 'culture-ganesha-pdf',
    packageIdHardcover: 'culture-ganesha-hardcover',
    pages: [
      {
        pageNumber: 1,
        title: 'Lord Ganesha',
        theme: 'Wisdom and Kind Smile',
        pageImage: ganeshaP1,
        narration: 'This is Lord Ganesha. He has a big head and a kind smile.'
      },
      {
        pageNumber: 2,
        title: 'Four Hands & Blessings',
        theme: 'Modak, Lotus & Love',
        pageImage: ganeshaP2,
        narration: 'Lord Ganesha has four hands. He holds a modak, a lotus, an axe, and shows a blessing.'
      },
      {
        pageNumber: 3,
        title: 'Mushak the Mouse',
        theme: 'Good Friendship',
        pageImage: ganeshaP3,
        narration: 'Lord Ganesha rides a mouse. The mouse is called Mushak. They are good friends.'
      },
      {
        pageNumber: 4,
        title: 'Ganesha Chaturthi',
        theme: 'Celebration & Welcoming',
        pageImage: ganeshaP4,
        narration: 'We celebrate Ganesha Chaturthi to welcome Lord Ganesha. We offer flowers, modak, and pray to him.'
      }
    ]
  },
  {
    id: 'diwali',
    title: 'My First Diwali Reading Book',
    subtitle: 'An Early Learning Book of Lights, Joy & Kindness',
    author: 'Neha Thakur',
    badge: 'COMING FOR DIWALI',
    category: 'festival',
    tagline: 'Bright lights, warm diyas, sweet mithai, and spreading kindness without noisy pollution.',
    description: 'A cozy festival read explaining why we clean our homes, light diyas for Lakshmi Maa, make flower rangolis, and celebrate joy with family and neighbors.',
    recommendedAge: 'Ages 2–7',
    skillsFocus: ['Indian Festivals', 'Family Togetherness', 'Helping in the Kitchen', 'Eco-friendly Celebrations'],
    pdfPrice: 149,
    pdfOriginalPrice: 249,
    printPrice: 249,
    printOriginalPrice: 399,
    coverImage: diwaliCoverImg,
    isAvailableNow: false,
    totalPages: 4,
    amazonUrl: AMAZON_STOREFRONT_URL,
    packageIdPdf: 'culture-diwali-pdf',
    packageIdHardcover: 'culture-diwali-hardcover',
    pages: []
  }
];
