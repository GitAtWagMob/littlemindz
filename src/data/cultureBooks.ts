// LittleMindZ Culture & Devotion Early Reader Books by Neha Thakur

export const AMAZON_STOREFRONT_URL = 'https://www.amazon.in/storefront?me=A3TSASKOI3KWD9&ref_=ssf_share';

// Durga Images
import durgaCover from '../assets/images/books/durga/page-01.jpg';
import durgaP1 from '../assets/images/books/durga/page-03.jpg';
import durgaP2 from '../assets/images/books/durga/page-04.jpg';
import durgaP3 from '../assets/images/books/durga/page-05.jpg';
import durgaP4 from '../assets/images/books/durga/page-06.jpg';
import durgaP5 from '../assets/images/books/durga/page-07.jpg';
import durgaP6 from '../assets/images/books/durga/page-08.jpg';
import durgaP7 from '../assets/images/books/durga/page-09.jpg';
import durgaP8 from '../assets/images/books/durga/page-10.jpg';
import durgaP9 from '../assets/images/books/durga/page-11.jpg';
import durgaP10 from '../assets/images/books/durga/page-12.jpg';
import durgaP11 from '../assets/images/books/durga/page-13.jpg';

// Krishna Images
import krishnaCover from '../assets/images/books/krishna/page-01.jpg';
import krishnaP1 from '../assets/images/books/krishna/page-03.jpg';
import krishnaP2 from '../assets/images/books/krishna/page-04.jpg';
import krishnaP3 from '../assets/images/books/krishna/page-05.jpg';
import krishnaP4 from '../assets/images/books/krishna/page-06.jpg';
import krishnaP5 from '../assets/images/books/krishna/page-07.jpg';
import krishnaP6 from '../assets/images/books/krishna/page-08.jpg';
import krishnaP7 from '../assets/images/books/krishna/page-09.jpg';
import krishnaP8 from '../assets/images/books/krishna/page-10.jpg';
import krishnaP9 from '../assets/images/books/krishna/page-11.jpg';
import krishnaP10 from '../assets/images/books/krishna/page-12.jpg';
import krishnaP11 from '../assets/images/books/krishna/page-13.jpg';

// Hanuman Images
import hanumanCover from '../assets/images/books/hanuman/page-01.jpg';
import hanumanP1 from '../assets/images/books/hanuman/page-03.jpg';
import hanumanP2 from '../assets/images/books/hanuman/page-04.jpg';
import hanumanP3 from '../assets/images/books/hanuman/page-05.jpg';
import hanumanP4 from '../assets/images/books/hanuman/page-06.jpg';
import hanumanP5 from '../assets/images/books/hanuman/page-07.jpg';
import hanumanP6 from '../assets/images/books/hanuman/page-08.jpg';
import hanumanP7 from '../assets/images/books/hanuman/page-09.jpg';
import hanumanP8 from '../assets/images/books/hanuman/page-10.jpg';
import hanumanP9 from '../assets/images/books/hanuman/page-11.jpg';
import hanumanP10 from '../assets/images/books/hanuman/page-12.jpg';
import hanumanP11 from '../assets/images/books/hanuman/page-13.jpg';

// Shiva Images
import shivaCover from '../assets/images/books/shiva/page-01.jpg';
import shivaP1 from '../assets/images/books/shiva/page-03.jpg';
import shivaP2 from '../assets/images/books/shiva/page-04.jpg';
import shivaP3 from '../assets/images/books/shiva/page-05.jpg';
import shivaP4 from '../assets/images/books/shiva/page-06.jpg';
import shivaP5 from '../assets/images/books/shiva/page-07.jpg';
import shivaP6 from '../assets/images/books/shiva/page-08.jpg';
import shivaP7 from '../assets/images/books/shiva/page-09.jpg';
import shivaP8 from '../assets/images/books/shiva/page-10.jpg';
import shivaP9 from '../assets/images/books/shiva/page-11.jpg';
import shivaP10 from '../assets/images/books/shiva/page-12.jpg';
import shivaP11 from '../assets/images/books/shiva/page-13.jpg';

// Ganesha Images
import ganeshaCover from '../assets/images/books/ganesha/page-01.jpg';
import ganeshaP1 from '../assets/images/books/ganesha/page-03.jpg';
import ganeshaP2 from '../assets/images/books/ganesha/page-04.jpg';
import ganeshaP3 from '../assets/images/books/ganesha/page-05.jpg';
import ganeshaP4 from '../assets/images/books/ganesha/page-06.jpg';
import ganeshaP5 from '../assets/images/books/ganesha/page-07.jpg';
import ganeshaP6 from '../assets/images/books/ganesha/page-08.jpg';
import ganeshaP7 from '../assets/images/books/ganesha/page-09.jpg';
import ganeshaP8 from '../assets/images/books/ganesha/page-10.jpg';
import ganeshaP9 from '../assets/images/books/ganesha/page-11.jpg';
import ganeshaP10 from '../assets/images/books/ganesha/page-12.jpg';
import ganeshaP11 from '../assets/images/books/ganesha/page-13.jpg';

// Diwali Cover
import diwaliCoverImg from '../assets/images/diwali_book_cover_1791651706102.jpg';

export interface CultureBookPage {
  pageNumber: number;
  title: string;
  theme: string;
  illustrationType?: string;
  pageImage: string;
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
    description: 'Specially crafted for ages 2 to 7. Children learn about Maa Durga as a caring mother figure who loves them, teaches kindness, protects nature, and inspires bravery. Includes the friendly Nine Forms of Navadurga and Sacred Symbols!',
    recommendedAge: 'Ages 2–7',
    skillsFocus: ['Early Reading Sight Words', 'Kindness & Sharing', 'Navadurga & Traditions', 'Love for Animals & Nature'],
    pdfPrice: 149,
    pdfOriginalPrice: 249,
    printPrice: 249,
    printOriginalPrice: 399,
    coverImage: durgaCover,
    spreadImage: durgaP4,
    isAvailableNow: true,
    totalPages: 11,
    amazonUrl: 'https://www.amazon.in/dp/B0HPM8WJJ9',
    packageIdPdf: 'culture-maa-durga-pdf',
    packageIdHardcover: 'culture-maa-durga-hardcover',
    pages: [
      {
        pageNumber: 1,
        title: 'My Maa Durga',
        theme: 'Love & Kindness',
        pageImage: durgaP1,
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
        pageImage: durgaP2,
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
        pageImage: durgaP3,
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
        pageImage: durgaP4,
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
        narration: 'Nine Forms of Maa Durga: Shailputri, Brahmacharini, Chandraghanta, Kushmanda, Skandamata, Katyayani, Kaalratri, Mahagauri, and Siddhidatri.'
      },
      {
        pageNumber: 5,
        title: 'Maa Blesses Me',
        theme: 'Inner Courage',
        pageImage: durgaP5,
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
        title: 'Maa is Strong',
        theme: 'Bravery & Good over Evil',
        pageImage: durgaP6,
        lines: [
          { text: 'This is Maa.' },
          { text: 'She is ', highlightWord: 'strong.' },
          { text: 'She is ', highlightWord: 'brave.' },
          { text: 'She can win evil.' },
          { text: 'I feel ', highlightWord: 'safe' },
          { text: 'with Maa.' }
        ],
        narration: 'This is Maa. She is strong. She is brave. She can win evil. I feel safe with Maa.'
      },
      {
        pageNumber: 7,
        title: 'Maa Helps Everyone',
        theme: 'Universal Kindness',
        pageImage: durgaP7,
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
        pageImage: durgaP8,
        lines: [
          { text: 'Maa loves ', highlightWord: 'trees.' },
          { text: 'She loves ', highlightWord: 'birds.' },
          { text: 'She loves all living things.' },
          { text: 'Maa keeps our world clean.' },
          { text: 'I can ', highlightWord: 'care' },
          { text: 'for nature too.' }
        ],
        narration: 'Maa loves trees. She loves birds. She loves all living things. Maa keeps our world clean. I can care for nature too.'
      },
      {
        pageNumber: 9,
        title: 'Maa Teaches Me Good Habits',
        theme: 'Values & Character',
        pageImage: durgaP9,
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
        pageImage: durgaP10,
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
      },
      {
        pageNumber: 11,
        title: "Maa Durga's Symbols",
        theme: 'Sacred Symbols & Meanings',
        pageImage: durgaP11,
        lines: [
          { text: 'Maa Durga has special symbols.' },
          { text: 'Lion teaches us ', highlightWord: 'courage.' },
          { text: 'Trident teaches us to fight ', highlightWord: 'evil.' },
          { text: 'Lotus teaches us ', highlightWord: 'purity.' },
          { text: 'Sudarshan Chakra brings victory of ', highlightWord: 'good.' }
        ],
        narration: "Maa Durga's Symbols. Lion teaches us courage. Trident teaches us to fight evil and protect what is right. Lotus teaches us purity and goodness. Sudarshan Chakra teaches us protection, justice, and the victory of good over evil."
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
    spreadImage: krishnaP6,
    isAvailableNow: true,
    totalPages: 11,
    amazonUrl: 'https://www.amazon.in/dp/B0HP6NP4B9',
    packageIdPdf: 'culture-krishna-pdf',
    packageIdHardcover: 'culture-krishna-hardcover',
    pages: [
      {
        pageNumber: 1,
        title: 'My Krishna',
        theme: 'Divine Love & Sweetness',
        pageImage: krishnaP1,
        lines: [
          { text: 'This is Krishna.' },
          { text: 'He is ', highlightWord: 'kind.' },
          { text: 'I love ', highlightWord: 'Krishna.' }
        ],
        narration: 'This is Krishna. He is kind. I love Krishna.'
      },
      {
        pageNumber: 2,
        title: 'Krishna and His Flute',
        theme: 'Music & Melody',
        pageImage: krishnaP2,
        lines: [
          { text: 'This is a ', highlightWord: 'flute.' },
          { text: 'Krishna can ', highlightWord: 'play.' },
          { text: 'I hear the ', highlightWord: 'tune.' }
        ],
        narration: 'This is a flute. Krishna can play. I hear the tune.'
      },
      {
        pageNumber: 3,
        title: 'Krishna and the Cow',
        theme: 'Gentleness to Animals',
        pageImage: krishnaP3,
        lines: [
          { text: 'This is a ', highlightWord: 'cow.' },
          { text: 'The cow is ', highlightWord: 'big.' },
          { text: 'Krishna is ', highlightWord: 'kind.' }
        ],
        narration: 'This is a cow. The cow is big. Krishna is kind.'
      },
      {
        pageNumber: 4,
        title: 'Krishna and His Friends',
        theme: 'Play & Joy',
        pageImage: krishnaP4,
        lines: [
          { text: 'These are my ', highlightWord: 'friends.' },
          { text: 'We can ', highlightWord: 'run.' },
          { text: 'We can ', highlightWord: 'hop.' }
        ],
        narration: 'These are my friends. We can run. We can hop.'
      },
      {
        pageNumber: 5,
        title: 'Krishna Loves Butter',
        theme: 'Sweetness & Delights',
        pageImage: krishnaP5,
        lines: [
          { text: 'This is a ', highlightWord: 'pot.' },
          { text: 'The pot has ', highlightWord: 'butter.' },
          { text: 'Krishna ', highlightWord: 'loves it.' }
        ],
        narration: 'This is a pot. The pot has butter. Krishna loves it.'
      },
      {
        pageNumber: 6,
        title: 'Krishna Shares Butter',
        theme: 'The Joy of Sharing',
        pageImage: krishnaP6,
        lines: [
          { text: 'Krishna has ', highlightWord: 'butter.' },
          { text: 'He shares the ', highlightWord: 'butter.' },
          { text: 'Everyone is ', highlightWord: 'happy.' }
        ],
        narration: 'Krishna has butter. He shares the butter. Everyone is happy.'
      },
      {
        pageNumber: 7,
        title: 'Krishna Feeds the Animals',
        theme: 'Caring for Living Beings',
        pageImage: krishnaP7,
        lines: [
          { text: 'Krishna has ', highlightWord: 'grass.' },
          { text: 'He feeds the ', highlightWord: 'cow.' },
          { text: 'The cow is ', highlightWord: 'happy.' }
        ],
        narration: 'Krishna has grass. He feeds the cow. The cow is happy.'
      },
      {
        pageNumber: 8,
        title: 'Krishna Plays with the Animals',
        theme: 'Kindness to Creatures',
        pageImage: krishnaP8,
        lines: [
          { text: 'Krishna ', highlightWord: 'plays' },
          { text: 'with the animals.' },
          { text: 'He is ', highlightWord: 'kind' },
          { text: 'to them.' },
          { text: 'They are his ', highlightWord: 'friends.' }
        ],
        narration: 'Krishna plays with the animals. He is kind to them. They are his friends.'
      },
      {
        pageNumber: 9,
        title: 'Krishna and His Friends Rest',
        theme: 'Peaceful Rest',
        pageImage: krishnaP9,
        lines: [
          { text: 'Krishna is ', highlightWord: 'tired.' },
          { text: 'He rests with his ', highlightWord: 'friends.' },
          { text: 'Everyone is ', highlightWord: 'happy.' }
        ],
        narration: 'Krishna is tired. He rests with his friends. Everyone is happy.'
      },
      {
        pageNumber: 10,
        title: 'Krishna is Happy',
        theme: 'Friendship Makes Life Special',
        pageImage: krishnaP10,
        lines: [
          { text: 'Krishna ', highlightWord: 'loves' },
          { text: 'his friends.' },
          { text: 'He has a ', highlightWord: 'happy day.' },
          { text: 'Friends make life special!' }
        ],
        narration: 'Krishna loves his friends. He has a happy day. Friends make life special!'
      },
      {
        pageNumber: 11,
        title: 'Radha and Krishna',
        theme: 'Pure Companionship & Love',
        pageImage: krishnaP11,
        lines: [
          { text: 'This is Radha.' },
          { text: 'Radha and Krishna are ', highlightWord: 'friends.' },
          { text: 'Radha is ', highlightWord: 'kind.' }
        ],
        narration: 'This is Radha. Radha and Krishna are friends. Radha is kind.'
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
    totalPages: 11,
    amazonUrl: 'https://www.amazon.in/dp/B0HPB4KV23',
    packageIdPdf: 'culture-hanuman-pdf',
    packageIdHardcover: 'culture-hanuman-hardcover',
    pages: [
      {
        pageNumber: 1,
        title: 'Lord Hanuman',
        theme: 'Brave and Strong',
        pageImage: hanumanP1,
        lines: [
          { text: 'Lord Hanuman is ', highlightWord: 'brave' },
          { text: 'and ', highlightWord: 'strong.' },
          { text: 'He loves Lord Rama.' },
          { text: 'He always ', highlightWord: 'helps' },
          { text: 'others.' }
        ],
        narration: 'Lord Hanuman is brave and strong. He loves Lord Rama. He always helps others.'
      },
      {
        pageNumber: 2,
        title: 'The Golden Gada',
        theme: 'Strength for Good',
        pageImage: hanumanP2,
        lines: [
          { text: 'Lord Hanuman holds a ', highlightWord: 'golden gada.' },
          { text: 'It shows his great strength.' },
          { text: 'He uses his ', highlightWord: 'power' },
          { text: 'for good.' }
        ],
        narration: 'Lord Hanuman holds a golden gada. It shows his great strength. He uses his power for good.'
      },
      {
        pageNumber: 3,
        title: 'Devotion to Rama',
        theme: 'Faith and Love',
        pageImage: hanumanP3,
        lines: [
          { text: 'Hanuman loves ', highlightWord: 'Lord Rama.' },
          { text: 'He serves Rama with ', highlightWord: 'love.' },
          { text: 'He is always ', highlightWord: 'faithful.' }
        ],
        narration: 'Hanuman loves Lord Rama. He serves Rama with love. He is always faithful.'
      },
      {
        pageNumber: 4,
        title: 'Flying Far with Herbs',
        theme: 'Selfless Service',
        pageImage: hanumanP4,
        lines: [
          { text: 'Hanuman can ', highlightWord: 'fly very far.' },
          { text: 'He carries a ', highlightWord: 'mountain of herbs.' },
          { text: 'He helps ', highlightWord: 'Lakshmana' },
          { text: 'get well.' }
        ],
        narration: 'Hanuman can fly very far. He carries a mountain of herbs. He helps Lakshmana get well.'
      },
      {
        pageNumber: 5,
        title: 'Kind and Helpful',
        theme: 'Compassion',
        pageImage: hanumanP5,
        lines: [
          { text: 'Hanuman is ', highlightWord: 'kind and helpful.' },
          { text: 'He cares for ', highlightWord: 'everyone.' },
          { text: 'He helps those in ', highlightWord: 'need.' }
        ],
        narration: 'Hanuman is kind and helpful. He cares for everyone. He helps those in need.'
      },
      {
        pageNumber: 6,
        title: "Hanuman's Mother",
        theme: 'Respect for Parents',
        pageImage: hanumanP6,
        lines: [
          { text: 'Maa Anjani is ', highlightWord: "Hanuman's mother." },
          { text: 'She loves her ', highlightWord: 'little son.' },
          { text: 'Hanuman ', highlightWord: 'respects' },
          { text: 'his mother.' }
        ],
        narration: "Maa Anjani is Hanuman's mother. She loves her little son. Hanuman respects his mother."
      },
      {
        pageNumber: 7,
        title: 'Jumping Across the Sea',
        theme: 'Fearless Heart',
        pageImage: hanumanP7,
        lines: [
          { text: 'Hanuman ', highlightWord: 'jumps' },
          { text: 'across the sea.' },
          { text: 'He travels to find ', highlightWord: 'Sita.' },
          { text: 'He is ', highlightWord: 'fearless and brave.' }
        ],
        narration: 'Hanuman jumps across the sea. He travels to find Sita. He is fearless and brave.'
      },
      {
        pageNumber: 8,
        title: 'Bringing Hope to Sita',
        theme: 'Messenger of Joy',
        pageImage: hanumanP8,
        lines: [
          { text: 'Hanuman finds ', highlightWord: 'Maa Sita.' },
          { text: "He gives her Rama's ", highlightWord: 'ring.' },
          { text: 'He brings her ', highlightWord: 'hope and joy.' }
        ],
        narration: "Hanuman finds Maa Sita. He gives her Rama's ring. He brings her hope and joy."
      },
      {
        pageNumber: 9,
        title: 'Clever and Wise',
        theme: 'Thinking Before Acting',
        pageImage: hanumanP9,
        lines: [
          { text: 'Hanuman is ', highlightWord: 'clever and wise.' },
          { text: 'He thinks before he acts.' },
          { text: 'He uses ', highlightWord: 'wisdom' },
          { text: 'to help others.' }
        ],
        narration: 'Hanuman is clever and wise. He thinks before he acts. He uses wisdom to help others.'
      },
      {
        pageNumber: 10,
        title: 'We Pray to Hanuman',
        theme: 'Inspiration for Bravery',
        pageImage: hanumanP10,
        lines: [
          { text: 'We pray to ', highlightWord: 'Lord Hanuman.' },
          { text: 'He inspires us to be ', highlightWord: 'brave.' },
          { text: 'We learn to ', highlightWord: 'help others.' }
        ],
        narration: 'We pray to Lord Hanuman. He inspires us to be brave. We learn to help others.'
      },
      {
        pageNumber: 11,
        title: 'Good Values',
        theme: 'Kindness, Strength & Helpfulness',
        pageImage: hanumanP11,
        lines: [
          { text: 'We all love Hanuman.' },
          { text: 'He teaches us ', highlightWord: 'good values.' },
          { text: 'Let us be ', highlightWord: 'kind, strong and helpful' },
          { text: 'like Hanuman.' }
        ],
        narration: 'We all love Hanuman. He teaches us good values. Let us be kind, strong, and helpful like Hanuman.'
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
    totalPages: 11,
    amazonUrl: 'https://www.amazon.in/dp/B0HPC62PCG',
    packageIdPdf: 'culture-shiva-pdf',
    packageIdHardcover: 'culture-shiva-hardcover',
    pages: [
      {
        pageNumber: 1,
        title: 'Lord Shiva',
        theme: 'Kind and Loving',
        pageImage: shivaP1,
        lines: [
          { text: 'This is ', highlightWord: 'Lord Shiva.' },
          { text: 'He is ', highlightWord: 'kind and loving.' },
          { text: 'He lives on ', highlightWord: 'Mount Kailash.' }
        ],
        narration: 'This is Lord Shiva. He is kind and loving. He lives on Mount Kailash.'
      },
      {
        pageNumber: 2,
        title: 'Trishul and Damru',
        theme: 'Always Calm',
        pageImage: shivaP2,
        lines: [
          { text: 'Lord Shiva has a ', highlightWord: 'trishul.' },
          { text: 'He has a ', highlightWord: 'damru.' },
          { text: 'He is always ', highlightWord: 'calm.' }
        ],
        narration: 'Lord Shiva has a trishul. He has a damru. He is always calm.'
      },
      {
        pageNumber: 3,
        title: "Shiva's Family",
        theme: 'Loving Family Bonds',
        pageImage: shivaP3,
        lines: [
          { text: "This is Shiva's ", highlightWord: 'family.' },
          { text: 'His wife is ', highlightWord: 'Parvati.' },
          { text: 'He has two sons, ', highlightWord: 'Ganesha' },
          { text: 'and ', highlightWord: 'Kartikeya.' }
        ],
        narration: "This is Shiva's family. His wife is Parvati. He has two sons, Ganesha and Kartikeya."
      },
      {
        pageNumber: 4,
        title: 'Nandi the Bull',
        theme: 'Loyalty and Friendship',
        pageImage: shivaP4,
        lines: [
          { text: 'Lord Shiva has a ', highlightWord: 'bull.' },
          { text: 'His name is ', highlightWord: 'Nandi.' },
          { text: 'Nandi is ', highlightWord: 'loyal and strong.' }
        ],
        narration: 'Lord Shiva has a bull. His name is Nandi. Nandi is loyal and strong.'
      },
      {
        pageNumber: 5,
        title: 'Vasuki the Snake',
        theme: 'Living in Harmony',
        pageImage: shivaP5,
        lines: [
          { text: 'Lord Shiva has a ', highlightWord: 'snake.' },
          { text: 'His name is ', highlightWord: 'Vasuki.' },
          { text: 'Vasuki stays around his neck.' }
        ],
        narration: 'Lord Shiva has a snake. His name is Vasuki. Vasuki stays around his neck.'
      },
      {
        pageNumber: 6,
        title: 'Peaceful Meditation',
        theme: 'Inner Calm & Focus',
        pageImage: shivaP6,
        lines: [
          { text: 'Lord Shiva sits and ', highlightWord: 'meditates.' },
          { text: 'He closes his eyes.' },
          { text: 'He feels ', highlightWord: 'peace.' }
        ],
        narration: 'Lord Shiva sits and meditates. He closes his eyes. He feels peace.'
      },
      {
        pageNumber: 7,
        title: 'Giving Blessings',
        theme: 'Love for Devotees',
        pageImage: shivaP7,
        lines: [
          { text: 'Lord Shiva gives ', highlightWord: 'blessings.' },
          { text: 'He loves all his devotees.' },
          { text: 'He is ', highlightWord: 'kind' },
          { text: 'to everyone.' }
        ],
        narration: 'Lord Shiva gives blessings. He loves all his devotees. He is kind to everyone.'
      },
      {
        pageNumber: 8,
        title: 'Friend of Animals',
        theme: 'Caring for All Creatures',
        pageImage: shivaP8,
        lines: [
          { text: 'Lord Shiva loves ', highlightWord: 'animals.' },
          { text: 'He is a ', highlightWord: 'friend to all.' },
          { text: 'He cares for ', highlightWord: 'nature.' }
        ],
        narration: 'Lord Shiva loves animals. He is a friend to all. He cares for nature.'
      },
      {
        pageNumber: 9,
        title: 'Praying to Shiva',
        theme: 'Hearing with Love',
        pageImage: shivaP9,
        lines: [
          { text: 'We can ', highlightWord: 'pray' },
          { text: 'to Lord Shiva.' },
          { text: 'He ', highlightWord: 'listens' },
          { text: 'to us.' },
          { text: 'He helps us.' }
        ],
        narration: 'We can pray to Lord Shiva. He listens to us. He helps us.'
      },
      {
        pageNumber: 10,
        title: 'Mount Kailash',
        theme: 'Serene Nature Home',
        pageImage: shivaP10,
        lines: [
          { text: 'Lord Shiva lives on ', highlightWord: 'Mount Kailash.' },
          { text: 'It is a ', highlightWord: 'beautiful place.' },
          { text: 'He stays there with his family.' }
        ],
        narration: 'Lord Shiva lives on Mount Kailash. It is a beautiful place. He stays there with his family.'
      },
      {
        pageNumber: 11,
        title: 'Peace in Our Lives',
        theme: 'Peace & Mindfulness',
        pageImage: shivaP11,
        lines: [
          { text: 'Lord Shiva is a ', highlightWord: 'kind and loving god.' },
          { text: 'He fills our lives with ', highlightWord: 'peace.' },
          { text: 'Let us always remember him.' }
        ],
        narration: 'Lord Shiva is a kind and loving god. He fills our lives with peace. Let us always remember him.'
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
    spreadImage: ganeshaP5,
    isAvailableNow: true,
    totalPages: 11,
    amazonUrl: 'https://www.amazon.in/dp/B0HPBTJH78',
    packageIdPdf: 'culture-ganesha-pdf',
    packageIdHardcover: 'culture-ganesha-hardcover',
    pages: [
      {
        pageNumber: 1,
        title: 'Lord Ganesha',
        theme: 'Wisdom and Kind Smile',
        pageImage: ganeshaP1,
        lines: [
          { text: 'This is ', highlightWord: 'Lord Ganesha.' },
          { text: 'He has a ', highlightWord: 'big head' },
          { text: 'and a ', highlightWord: 'kind smile.' }
        ],
        narration: 'This is Lord Ganesha. He has a big head and a kind smile.'
      },
      {
        pageNumber: 2,
        title: 'Four Hands & Blessings',
        theme: 'Modak, Lotus & Love',
        pageImage: ganeshaP2,
        lines: [
          { text: 'Lord Ganesha has ', highlightWord: 'four hands.' },
          { text: 'He holds a ', highlightWord: 'modak,' },
          { text: 'a ', highlightWord: 'lotus,' },
          { text: 'an axe and shows a ', highlightWord: 'blessing.' }
        ],
        narration: 'Lord Ganesha has four hands. He holds a modak, a lotus, an axe, and shows a blessing.'
      },
      {
        pageNumber: 3,
        title: 'Mushak the Mouse',
        theme: 'Good Friendship',
        pageImage: ganeshaP3,
        lines: [
          { text: 'Lord Ganesha rides a ', highlightWord: 'mouse.' },
          { text: 'The mouse is called ', highlightWord: 'Mushak.' },
          { text: 'They are ', highlightWord: 'good friends.' }
        ],
        narration: 'Lord Ganesha rides a mouse. The mouse is called Mushak. They are good friends.'
      },
      {
        pageNumber: 4,
        title: 'Ganesha Chaturthi',
        theme: 'Celebration & Welcoming',
        pageImage: ganeshaP4,
        lines: [
          { text: 'We celebrate ', highlightWord: 'Ganesha Chaturthi' },
          { text: 'to welcome Lord Ganesha.' },
          { text: 'We offer ', highlightWord: 'flowers, modak' },
          { text: 'and pray to him.' }
        ],
        narration: 'We celebrate Ganesha Chaturthi to welcome Lord Ganesha. We offer flowers, modak, and pray to him.'
      },
      {
        pageNumber: 5,
        title: 'God of Knowledge',
        theme: 'Love for Books and Wisdom',
        pageImage: ganeshaP5,
        lines: [
          { text: 'Lord Ganesha is very ', highlightWord: 'wise.' },
          { text: 'He loves to learn ', highlightWord: 'new things.' },
          { text: 'He is the god of ', highlightWord: 'knowledge.' }
        ],
        narration: 'Lord Ganesha is very wise. He loves to learn new things. He is the god of knowledge.'
      },
      {
        pageNumber: 6,
        title: 'Kind and Helpful',
        theme: 'Removing Problems',
        pageImage: ganeshaP6,
        lines: [
          { text: 'Lord Ganesha is ', highlightWord: 'kind and helpful.' },
          { text: 'He removes our ', highlightWord: 'problems.' },
          { text: 'He always ', highlightWord: 'cares for everyone.' }
        ],
        narration: 'Lord Ganesha is kind and helpful. He removes our problems. He always cares for everyone.'
      },
      {
        pageNumber: 7,
        title: 'Loved by Family',
        theme: 'Family Love & Warmth',
        pageImage: ganeshaP7,
        lines: [
          { text: 'Lord Ganesha is the son of' },
          { text: 'Lord Shiva and ', highlightWord: 'Maa Parvati.' },
          { text: 'He is very ', highlightWord: 'loved by his family.' }
        ],
        narration: 'Lord Ganesha is the son of Lord Shiva and Maa Parvati. He is very loved by his family.'
      },
      {
        pageNumber: 8,
        title: 'Remover of Obstacles',
        theme: 'Making Paths Easy',
        pageImage: ganeshaP8,
        lines: [
          { text: 'Lord Ganesha removes ', highlightWord: 'obstacles.' },
          { text: 'He makes our ', highlightWord: 'path easy.' },
          { text: 'He helps us to ', highlightWord: 'move forward.' }
        ],
        narration: 'Lord Ganesha removes obstacles. He makes our path easy. He helps us to move forward.'
      },
      {
        pageNumber: 9,
        title: 'Writing the Mahabharata',
        theme: 'Listening & Focus',
        pageImage: ganeshaP9,
        lines: [
          { text: 'Lord Ganesha wrote the ', highlightWord: 'Mahabharata.' },
          { text: 'Sage Vyasa told the ', highlightWord: 'story.' },
          { text: 'Lord Ganesha ', highlightWord: 'listened and wrote.' }
        ],
        narration: 'Lord Ganesha wrote the Mahabharata. Sage Vyasa told the story. Lord Ganesha listened and wrote.'
      },
      {
        pageNumber: 10,
        title: 'Happiness and Success',
        theme: 'Prayer & Gratitude',
        pageImage: ganeshaP10,
        lines: [
          { text: 'We pray to ', highlightWord: 'Lord Ganesha.' },
          { text: 'He brings ', highlightWord: 'happiness and success.' },
          { text: 'We always ', highlightWord: 'love and thank him.' }
        ],
        narration: 'We pray to Lord Ganesha. He brings happiness and success. We always love and thank him.'
      },
      {
        pageNumber: 11,
        title: 'Always Listens',
        theme: 'Loving Guide for Toddlers',
        pageImage: ganeshaP11,
        lines: [
          { text: 'We love ', highlightWord: 'Lord Ganesha.' },
          { text: 'He is ', highlightWord: 'kind and helpful.' },
          { text: 'He always ', highlightWord: 'listens to us.' }
        ],
        narration: 'We love Lord Ganesha. He is kind and helpful. He always listens to us.'
      }
    ]
  },
  {
    id: 'diwali-lights',
    title: 'The Joyful Lights of Diwali',
    subtitle: 'An Early Learning Book of Diyas, Rangoli & Family Love',
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
    totalPages: 10,
    amazonUrl: AMAZON_STOREFRONT_URL,
    packageIdPdf: 'culture-diwali-pdf',
    packageIdHardcover: 'culture-diwali-hardcover',
    pages: []
  }
];
