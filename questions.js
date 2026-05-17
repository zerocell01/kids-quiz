// =============================================
//  KUIS PINTAR ANAK — questions.js
//  Edit bagian ini untuk mengganti soal-soal!
// =============================================

const CATEGORIES = [
  {
    id: "hewan",
    title: "Hewan",
    emoji: "🐾",
    theme: 0,
    questions: [
      {
        emoji: "🐱",
        question: "Hewan apa ini?",
        answers: [
          { emoji: "🐱", text: "Kucing" },
          { emoji: "🐶", text: "Anjing" },
          { emoji: "🐸", text: "Katak" },
          { emoji: "🐭", text: "Tikus" },
        ],
        correct: 0,
      },
      {
        emoji: "🐶",
        question: "Siapa yang bilang 'Guk Guk'?",
        answers: [
          { emoji: "🐱", text: "Kucing" },
          { emoji: "🐦", text: "Burung" },
          { emoji: "🐶", text: "Anjing" },
          { emoji: "🐮", text: "Sapi" },
        ],
        correct: 2,
      },
      {
        emoji: "🐔",
        question: "Hewan ini bertelur setiap hari!",
        answers: [
          { emoji: "🐟", text: "Ikan" },
          { emoji: "🐔", text: "Ayam" },
          { emoji: "🐸", text: "Katak" },
          { emoji: "🐍", text: "Ular" },
        ],
        correct: 1,
      },
      {
        emoji: "🐘",
        question: "Hewan apa yang sangat besar dan punya belalai?",
        answers: [
          { emoji: "🦒", text: "Jerapah" },
          { emoji: "🦁", text: "Singa" },
          { emoji: "🦓", text: "Zebra" },
          { emoji: "🐘", text: "Gajah" },
        ],
        correct: 3,
      },
      {
        emoji: "🐠",
        question: "Hewan apa yang hidup di air?",
        answers: [
          { emoji: "🐠", text: "Ikan" },
          { emoji: "🐓", text: "Ayam" },
          { emoji: "🐈", text: "Kucing" },
          { emoji: "🐕", text: "Anjing" },
        ],
        correct: 0,
      },
    ],
  },

  {
    id: "buah",
    title: "Buah",
    emoji: "🍎",
    theme: 1,
    questions: [
      {
        emoji: "🍌",
        question: "Buah apa yang berwarna kuning dan panjang?",
        answers: [
          { emoji: "🍎", text: "Apel" },
          { emoji: "🍊", text: "Jeruk" },
          { emoji: "🍌", text: "Pisang" },
          { emoji: "🍇", text: "Anggur" },
        ],
        correct: 2,
      },
      {
        emoji: "🍎",
        question: "Buah merah ini enak sekali!",
        answers: [
          { emoji: "🍎", text: "Apel" },
          { emoji: "🍋", text: "Lemon" },
          { emoji: "🍑", text: "Persik" },
          { emoji: "🥝", text: "Kiwi" },
        ],
        correct: 0,
      },
      {
        emoji: "🍊",
        question: "Buah apa yang berwarna oranye dan bulat?",
        answers: [
          { emoji: "🍇", text: "Anggur" },
          { emoji: "🍊", text: "Jeruk" },
          { emoji: "🍓", text: "Stroberi" },
          { emoji: "🍍", text: "Nanas" },
        ],
        correct: 1,
      },
      {
        emoji: "🍇",
        question: "Buah apa yang tumbuh berkelompok?",
        answers: [
          { emoji: "🥭", text: "Mangga" },
          { emoji: "🍈", text: "Melon" },
          { emoji: "🍓", text: "Stroberi" },
          { emoji: "🍇", text: "Anggur" },
        ],
        correct: 3,
      },
      {
        emoji: "🍓",
        question: "Buah merah kecil ini namanya?",
        answers: [
          { emoji: "🍓", text: "Stroberi" },
          { emoji: "🍒", text: "Ceri" },
          { emoji: "🍅", text: "Tomat" },
          { emoji: "🍎", text: "Apel" },
        ],
        correct: 0,
      },
    ],
  },

  {
    id: "warna",
    title: "Warna",
    emoji: "🎨",
    theme: 2,
    questions: [
      {
        emoji: "🌅",
        question: "Apa warna matahari?",
        answers: [
          { emoji: "🔵", text: "Biru" },
          { emoji: "🟡", text: "Kuning" },
          { emoji: "🟢", text: "Hijau" },
          { emoji: "⚫", text: "Hitam" },
        ],
        correct: 1,
      },
      {
        emoji: "🌈",
        question: "Apa warna langit pada siang hari?",
        answers: [
          { emoji: "🔴", text: "Merah" },
          { emoji: "🟤", text: "Coklat" },
          { emoji: "🔵", text: "Biru" },
          { emoji: "🟣", text: "Ungu" },
        ],
        correct: 2,
      },
      {
        emoji: "🌿",
        question: "Apa warna daun pohon?",
        answers: [
          { emoji: "🟢", text: "Hijau" },
          { emoji: "🟠", text: "Oranye" },
          { emoji: "🔵", text: "Biru" },
          { emoji: "⚪", text: "Putih" },
        ],
        correct: 0,
      },
      {
        emoji: "🍎",
        question: "Apel ini berwarna?",
        answers: [
          { emoji: "🟡", text: "Kuning" },
          { emoji: "🟢", text: "Hijau" },
          { emoji: "🔴", text: "Merah" },
          { emoji: "🟤", text: "Coklat" },
        ],
        correct: 2,
      },
      {
        emoji: "⛄",
        question: "Salju itu berwarna?",
        answers: [
          { emoji: "🔵", text: "Biru" },
          { emoji: "⚪", text: "Putih" },
          { emoji: "🟡", text: "Kuning" },
          { emoji: "🟤", text: "Coklat" },
        ],
        correct: 1,
      },
    ],
  },

  {
    id: "angka",
    title: "Angka",
    emoji: "🔢",
    theme: 3,
    questions: [
      {
        emoji: "🌟🌟🌟",
        question: "Ada berapa bintang?",
        answers: [
          { emoji: "1️⃣", text: "1" },
          { emoji: "2️⃣", text: "2" },
          { emoji: "3️⃣", text: "3" },
          { emoji: "4️⃣", text: "4" },
        ],
        correct: 2,
      },
      {
        emoji: "🐱🐱",
        question: "Ada berapa kucing?",
        answers: [
          { emoji: "3️⃣", text: "3" },
          { emoji: "2️⃣", text: "2" },
          { emoji: "5️⃣", text: "5" },
          { emoji: "1️⃣", text: "1" },
        ],
        correct: 1,
      },
      {
        emoji: "🍎🍎🍎🍎",
        question: "Ada berapa apel?",
        answers: [
          { emoji: "4️⃣", text: "4" },
          { emoji: "3️⃣", text: "3" },
          { emoji: "5️⃣", text: "5" },
          { emoji: "2️⃣", text: "2" },
        ],
        correct: 0,
      },
      {
        emoji: "🐶",
        question: "Ada berapa anjing?",
        answers: [
          { emoji: "3️⃣", text: "3" },
          { emoji: "2️⃣", text: "2" },
          { emoji: "4️⃣", text: "4" },
          { emoji: "1️⃣", text: "1" },
        ],
        correct: 3,
      },
      {
        emoji: "🌸🌸🌸🌸🌸",
        question: "Ada berapa bunga?",
        answers: [
          { emoji: "3️⃣", text: "3" },
          { emoji: "4️⃣", text: "4" },
          { emoji: "5️⃣", text: "5" },
          { emoji: "6️⃣", text: "6" },
        ],
        correct: 2,
      },
    ],
  },

  {
    id: "umum",
    title: "Serba-Serbi",
    emoji: "🌟",
    theme: 4,
    questions: [
      {
        emoji: "🌙",
        question: "Apa yang bersinar di malam hari?",
        answers: [
          { emoji: "☀️", text: "Matahari" },
          { emoji: "🌙", text: "Bulan" },
          { emoji: "🌈", text: "Pelangi" },
          { emoji: "🌧️", text: "Hujan" },
        ],
        correct: 1,
      },
      {
        emoji: "🐦",
        question: "Hewan apa yang bisa terbang?",
        answers: [
          { emoji: "🐟", text: "Ikan" },
          { emoji: "🐢", text: "Kura-kura" },
          { emoji: "🐦", text: "Burung" },
          { emoji: "🐸", text: "Katak" },
        ],
        correct: 2,
      },
      {
        emoji: "🎂",
        question: "Kue ini kita makan saat apa?",
        answers: [
          { emoji: "🎂", text: "Ulang Tahun" },
          { emoji: "😴", text: "Tidur" },
          { emoji: "🛁", text: "Mandi" },
          { emoji: "🏃", text: "Berlari" },
        ],
        correct: 0,
      },
      {
        emoji: "🚗",
        question: "Kendaraan ini namanya?",
        answers: [
          { emoji: "🚢", text: "Kapal" },
          { emoji: "✈️", text: "Pesawat" },
          { emoji: "🚲", text: "Sepeda" },
          { emoji: "🚗", text: "Mobil" },
        ],
        correct: 3,
      },
      {
        emoji: "🌧️",
        question: "Saat hujan kita pakai?",
        answers: [
          { emoji: "🕶️", text: "Kacamata" },
          { emoji: "☂️", text: "Payung" },
          { emoji: "🧣", text: "Syal" },
          { emoji: "👒", text: "Topi" },
        ],
        correct: 1,
      },
    ],
  },
];