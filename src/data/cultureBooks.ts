export interface CultureBookPage {
  pageNumber: number;
  title: string;
  theme: string;
  illustrationType: 'cover' | 'maa_lion' | 'lion_close' | 'maa_girl' | 'nine_forms' | 'blessing' | 'hug' | 'animals' | 'nature' | 'puja' | 'thanks';
  pageImage?: string;
  lines: { text: string; highlightWord?: string }[];
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
  pages: CultureBookPage[];
}

export const CULTURE_BOOKS: CultureBook[] = [
  {
    id: 'maa-durga',
    title: 'My Loving Maa Durga',
    subtitle: 'An Early Learning Book of Kindness, Courage & Devotion',
    author: 'Neha Thakur',
    badge: 'READY NOW · BESTSELLER',
    category: 'culture',
    tagline: 'Easy-to-read sight word sentences paired with divine, loving illustrations for toddlers.',
    description: 'Specially crafted for ages 2 to 7. Children learn about Maa Durga as a caring mother figure who loves them, teaches kindness, protects nature, and inspires bravery. Includes the friendly Nine Forms of Navadurga!',
    recommendedAge: 'Ages 2–7',
    skillsFocus: ['Early Reading Sight Words', 'Kindness & Sharing', 'Indian Culture & Navratri', 'Love for Nature & Animals'],
    pdfPrice: 149,
    pdfOriginalPrice: 249,
    printPrice: 899,
    printOriginalPrice: 1299,
    coverImage: '/src/assets/images/maa_durga_book_cover_1791651672410.jpg',
    spreadImage: '/src/assets/images/durga_nine_forms_page_1791651721778.jpg',
    isAvailableNow: true,
    totalPages: 10,
    pages: [
      {
        pageNumber: 1,
        title: 'My Maa Durga',
        theme: 'Love & Kindness',
        illustrationType: 'maa_lion',
        pageImage: '/src/assets/images/durga_page1_lion_1791655355848.jpg',
        lines: [
          { text: 'This is Maa Durga.' },
          { text: 'She is ', highlightWord: 'kind.' },
          { text: 'She ', highlightWord: 'loves' },
          { text: 'me.' },
          { text: 'I love Maa.' }
        ],
        narration: 'This is Maa Durga. She is kind. She loves me. I love Maa.'
      },
      {
        pageNumber: 2,
        title: 'Maa Has a Lion',
        theme: 'Strength & Protection',
        illustrationType: 'lion_close',
        pageImage: '/src/assets/images/durga_page2_lion_big_1791655366306.jpg',
        lines: [
          { text: 'This is a ', highlightWord: 'lion.' },
          { text: 'The lion is ', highlightWord: 'big.' },
          { text: 'The lion is ', highlightWord: 'strong.' },
          { text: 'Maa is ', highlightWord: 'with' },
          { text: 'him.' }
        ],
        narration: 'This is a lion. The lion is big. The lion is strong. Maa is with him.'
      },
      {
        pageNumber: 3,
        title: 'Maa Helps Me',
        theme: 'Caring & Safety',
        illustrationType: 'maa_girl',
        pageImage: '/src/assets/images/durga_page3_helps_me_1791655379186.jpg',
        lines: [
          { text: 'Maa can ', highlightWord: 'help.' },
          { text: 'Maa can ', highlightWord: 'care.' },
          { text: 'She keeps me safe.' },
          { text: 'I feel ', highlightWord: 'happy' },
          { text: 'with Maa.' }
        ],
        narration: 'Maa can help. Maa can care. She keeps me safe. I feel happy with Maa.'
      },
      {
        pageNumber: 4,
        title: 'Nine Forms of Maa Durga',
        theme: 'Navadurga for Early Learners',
        illustrationType: 'nine_forms',
        pageImage: '/src/assets/images/durga_nine_forms_page_1791651721778.jpg',
        lines: [
          { text: '1. Shailputri: She sits on a ', highlightWord: 'bull.' },
          { text: '2. Brahmacharini: She has a ', highlightWord: 'mala.' },
          { text: '3. Chandraghanta: She has a ', highlightWord: 'bell.' },
          { text: '4. Kushmanda: She gives ', highlightWord: 'light.' },
          { text: '5. Skandamata: She has a ', highlightWord: 'son.' },
          { text: '6. Katyayani: She is ', highlightWord: 'strong.' },
          { text: '7. Kaalratri: She removes ', highlightWord: 'fear.' },
          { text: '8. Mahagauri: She is ', highlightWord: 'pure.' },
          { text: '9. Siddhidatri: She gives ', highlightWord: 'good luck.' }
        ],
        narration: 'Nine Forms of Maa Durga. Shailputri, Brahmacharini, Chandraghanta, Kushmanda, Skandamata, Katyayani, Kaalratri, Mahagauri, and Siddhidatri.'
      },
      {
        pageNumber: 5,
        title: 'Maa Blesses Me',
        theme: 'Inner Courage',
        illustrationType: 'blessing',
        lines: [
          { text: 'Maa gives her blessings.' },
          { text: 'Maa makes me ', highlightWord: 'brave.' },
          { text: 'Maa makes me ', highlightWord: 'good.' },
          { text: 'I feel ', highlightWord: 'happy.' }
        ],
        narration: 'Maa gives her blessings. Maa makes me brave. Maa makes me good. I feel happy.'
      },
      {
        pageNumber: 6,
        title: 'Maa Gives Me Love',
        theme: 'Warmth & Security',
        illustrationType: 'hug',
        lines: [
          { text: 'Maa gives me ', highlightWord: 'love.' },
          { text: 'Maa gives me ', highlightWord: 'care.' },
          { text: 'Maa is always with me.' },
          { text: 'I am not ', highlightWord: 'alone.' }
        ],
        narration: 'Maa gives me love. Maa gives me care. Maa is always with me. I am not alone.'
      },
      {
        pageNumber: 7,
        title: 'Maa Helps Everyone',
        theme: 'Universal Empathy',
        illustrationType: 'animals',
        lines: [
          { text: 'Maa helps ', highlightWord: 'all.' },
          { text: 'She helps ', highlightWord: 'people.' },
          { text: 'She helps ', highlightWord: 'animals.' },
          { text: 'She helps me.' },
          { text: 'Maa is ', highlightWord: 'kind.' }
        ],
        narration: 'Maa helps all. She helps people. She helps animals. She helps me. Maa is kind.'
      },
      {
        pageNumber: 8,
        title: 'Maa Cares for Nature',
        theme: 'Eco-consciousness',
        illustrationType: 'nature',
        lines: [
          { text: 'Maa loves ', highlightWord: 'trees.' },
          { text: 'She loves ', highlightWord: 'birds.' },
          { text: 'She loves all living things.' },
          { text: 'Maa keeps our world ', highlightWord: 'clean.' },
          { text: 'I can care for nature too.' }
        ],
        narration: 'Maa loves trees. She loves birds. She loves all living things. Maa keeps our world clean. I can care for nature too.'
      },
      {
        pageNumber: 9,
        title: 'Maa Teaches Me Good Habits',
        theme: 'Values & Character',
        illustrationType: 'puja',
        lines: [
          { text: 'Maa teaches me to be ', highlightWord: 'kind.' },
          { text: 'Maa teaches me to be ', highlightWord: 'honest.' },
          { text: 'Maa teaches me to ', highlightWord: 'share.' },
          { text: 'Maa teaches me to do ', highlightWord: 'good things' },
          { text: 'every day.' }
        ],
        narration: 'Maa teaches me to be kind. Maa teaches me to be honest. Maa teaches me to share. Maa teaches me to do good things every day.'
      },
      {
        pageNumber: 10,
        title: 'I Love My Maa',
        theme: 'Gratitude & Devotion',
        illustrationType: 'thanks',
        lines: [
          { text: 'I love my Maa.' },
          { text: 'She is ', highlightWord: 'strong.' },
          { text: 'She is ', highlightWord: 'kind.' },
          { text: 'She is ', highlightWord: 'brave.' },
          { text: 'She always believes in me.' },
          { text: 'Maa makes the world a better place.' },
          { text: 'Thank you Maa! ❤️' }
        ],
        narration: 'I love my Maa. She is strong. She is kind. She is brave. She always believes in me. Maa makes the world a better place. Thank you Maa!'
      }
    ]
  },
  {
    id: 'bal-ganesha',
    title: 'My Sweet Bal Ganesha',
    subtitle: 'An Early Learning Book of Wisdom & Good Beginnings',
    author: 'Neha Thakur',
    badge: 'COMING THIS MONTH',
    category: 'culture',
    tagline: 'Simple sweet sentences celebrating cute toddler Ganesha, his modak treats, and loving blessings.',
    description: 'Learn why Bal Ganesha is celebrated at the start of everything good! Easy phonics, colorful modak sweets, gentle elephant friend, and sweet lessons on listening to parents.',
    recommendedAge: 'Ages 2–6',
    skillsFocus: ['Listening to Parents', 'Sharing Sweets & Food', 'Good Manners', 'Early Phonics'],
    pdfPrice: 149,
    pdfOriginalPrice: 249,
    printPrice: 899,
    printOriginalPrice: 1299,
    coverImage: '/src/assets/images/ganesha_book_cover_1791651690032.jpg',
    isAvailableNow: false,
    totalPages: 10,
    pages: []
  },
  {
    id: 'diwali-lights',
    title: 'The Joyful Lights of Diwali',
    subtitle: 'An Early Learning Book of Diyas, Rangoli & Family Love',
    author: 'Neha Thakur',
    badge: 'FESTIVAL SPECIAL',
    category: 'festival',
    tagline: 'Bright lights, warm diyas, sweet mithai, and spreading kindness without noisy pollution.',
    description: 'A cozy festival read explaining why we clean our homes, light diyas for Lakshmi Maa, make flower rangolis, and celebrate joy with family and neighbors.',
    recommendedAge: 'Ages 2–7',
    skillsFocus: ['Indian Festivals', 'Family Togetherness', 'Helping in the Kitchen', 'Eco-friendly Celebrations'],
    pdfPrice: 149,
    pdfOriginalPrice: 249,
    printPrice: 899,
    printOriginalPrice: 1299,
    coverImage: '/src/assets/images/diwali_book_cover_1791651706102.jpg',
    isAvailableNow: false,
    totalPages: 10,
    pages: []
  }
];
