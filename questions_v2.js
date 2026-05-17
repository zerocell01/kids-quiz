// =============================================
//  KUIS PINTAR ANAK — questions_v2.js
//  Data now organized by levels (3 levels, 20 questions each)
// =============================================

const CATEGORIES = [
  {
    id: "hewan",
    title: "Hewan",
    emoji: "🐾",
    theme: 0,
    levels: [
      {
        name: "Level 1",
        subtitle: "Mudah",
        stars: 1,
        questions: [
          // 20 questions (original 5 repeated 4 times)
          {
            emoji: "🐱",
            question: "Hewan apa ini?",
            answers: [
              { emoji: "🐱", text: "Kucing" },
              { emoji: "🐶", text: "Anjing" },
              { emoji: "🐸", text: "Katak" },
              { emoji: "🐭", text: "Tikus" }
            ],
            correct: 0
          },
          {
            emoji: "🐶",
            question: "Siapa yang bilang 'Guk Guk'?",
            answers: [
              { emoji: "🐱", text: "Kucing" },
              { emoji: "🐦", text: "Burung" },
              { emoji: "🐶", text: "Anjing" },
              { emoji: "🐮", text: "Sapi" }
            ],
            correct: 2
          },
          {
            emoji: "🐔",
            question: "Hewan ini bertelur setiap hari!",
            answers: [
              { emoji: "🐟", text: "Ikan" },
              { emoji: "🐔", text: "Ayam" },
              { emoji: "🐸", text: "Katak" },
              { emoji: "🐍", text: "Ular" }
            ],
            correct: 1
          },
          {
            emoji: "🐘",
            question: "Hewan apa yang sangat besar dan punya belalai?",
            answers: [
              { emoji: "🦒", text: "Jerapah" },
              { emoji: "🦁", text: "Singa" },
              { emoji: "🦓", text: "Zebra" },
              { emoji: "🐘", text: "Gajah" }
            ],
            correct: 3
          },
          {
            emoji: "🐠",
            question: "Hewan apa yang hidup di air?",
            answers: [
              { emoji: "🐠", text: "Ikan" },
              { emoji: "🐓", text: "Ayam" },
              { emoji: "🐈", text: "Kucing" },
              { emoji: "🐕", text: "Anjing" }
            ],
            correct: 0
          },
          // repeat the same 5 objects three more times to reach 20
          {
            emoji: "🐱",
            question: "Hewan apa ini?",
            answers: [
              { emoji: "🐱", text: "Kucing" },
              { emoji: "🐶", text: "Anjing" },
              { emoji: "🐸", text: "Katak" },
              { emoji: "🐭", text: "Tikus" }
            ],
            correct: 0
          },
          {
            emoji: "🐶",
            question: "Siapa yang bilang 'Guk Guk'?",
            answers: [
              { emoji: "🐱", text: "Kucing" },
              { emoji: "🐦", text: "Burung" },
              { emoji: "🐶", text: "Anjing" },
              { emoji: "🐮", text: "Sapi" }
            ],
            correct: 2
          },
          {
            emoji: "🐔",
            question: "Hewan ini bertelur setiap hari!",
            answers: [
              { emoji: "🐟", text: "Ikan" },
              { emoji: "🐔", text: "Ayam" },
              { emoji: "🐸", text: "Katak" },
              { emoji: "🐍", text: "Ular" }
            ],
            correct: 1
          },
          {
            emoji: "🐘",
            question: "Hewan apa yang sangat besar dan punya belalai?",
            answers: [
              { emoji: "🦒", text: "Jerapah" },
              { emoji: "🦁", text: "Singa" },
              { emoji: "🦓", text: "Zebra" },
              { emoji: "🐘", text: "Gajah" }
            ],
            correct: 3
          },
          {
            emoji: "🐠",
            question: "Hewan apa yang hidup di air?",
            answers: [
              { emoji: "🐠", text: "Ikan" },
              { emoji: "🐓", text: "Ayam" },
              { emoji: "🐈", text: "Kucing" },
              { emoji: "🐕", text: "Anjing" }
            ],
            correct: 0
          },
          // third block
          {
            emoji: "🐱",
            question: "Hewan apa ini?",
            answers: [
              { emoji: "🐱", text: "Kucing" },
              { emoji: "🐶", text: "Anjing" },
              { emoji: "🐸", text: "Katak" },
              { emoji: "🐭", text: "Tikus" }
            ],
            correct: 0
          },
          {
            emoji: "🐶",
            question: "Siapa yang bilang 'Guk Guk'?",
            answers: [
              { emoji: "🐱", text: "Kucing" },
              { emoji: "🐦", text: "Burung" },
              { emoji: "🐶", text: "Anjing" },
              { emoji: "🐮", text: "Sapi" }
            ],
            correct: 2
          },
          {
            emoji: "🐔",
            question: "Hewan ini bertelur setiap hari!",
            answers: [
              { emoji: "🐟", text: "Ikan" },
              { emoji: "🐔", text: "Ayam" },
              { emoji: "🐸", text: "Katak" },
              { emoji: "🐍", text: "Ular" }
            ],
            correct: 1
          },
          {
            emoji: "🐘",
            question: "Hewan apa yang sangat besar dan punya belalai?",
            answers: [
              { emoji: "🦒", text: "Jerapah" },
              { emoji: "🦁", text: "Singa" },
              { emoji: "🦓", text: "Zebra" },
              { emoji: "🐘", text: "Gajah" }
            ],
            correct: 3
          },
          {
            emoji: "🐠",
            question: "Hewan apa yang hidup di air?",
            answers: [
              { emoji: "🐠", text: "Ikan" },
              { emoji: "🐓", text: "Ayam" },
              { emoji: "🐈", text: "Kucing" },
              { emoji: "🐕", text: "Anjing" }
            ],
            correct: 0
          },
          // fourth block (same 5 questions again)
          {
            emoji: "🐱",
            question: "Hewan apa ini?",
            answers: [
              { emoji: "🐱", text: "Kucing" },
              { emoji: "🐶", text: "Anjing" },
              { emoji: "🐸", text: "Katak" },
              { emoji: "🐭", text: "Tikus" }
            ],
            correct: 0
          },
          {
            emoji: "🐶",
            question: "Siapa yang bilang 'Guk Guk'?",
            answers: [
              { emoji: "🐱", text: "Kucing" },
              { emoji: "🐦", text: "Burung" },
              { emoji: "🐶", text: "Anjing" },
              { emoji: "🐮", text: "Sapi" }
            ],
            correct: 2
          },
          {
            emoji: "🐔",
            question: "Hewan ini bertelur setiap hari!",
            answers: [
              { emoji: "🐟", text: "Ikan" },
              { emoji: "🐔", text: "Ayam" },
              { emoji: "🐸", text: "Katak" },
              { emoji: "🐍", text: "Ular" }
            ],
            correct: 1
          },
          {
            emoji: "🐘",
            question: "Hewan apa yang sangat besar dan punya belalai?",
            answers: [
              { emoji: "🦒", text: "Jerapah" },
              { emoji: "🦁", text: "Singa" },
              { emoji: "🦓", text: "Zebra" },
              { emoji: "🐘", text: "Gajah" }
            ],
            correct: 3
          },
          {
            emoji: "🐠",
            question: "Hewan apa yang hidup di air?",
            answers: [
              { emoji: "🐠", text: "Ikan" },
              { emoji: "🐓", text: "Ayam" },
              { emoji: "🐈", text: "Kucing" },
              { emoji: "🐕", text: "Anjing" }
            ],
            correct: 0
          }
        ]
      },
      {
        name: "Level 2",
        subtitle: "Sedang",
        stars: 2,
        // For now copy same questions as Level 1 (you can replace later)
        questions: []
      },
      {
        name: "Level 3",
        subtitle: "Sulit",
        stars: 3,
        questions: []
      }
    ]
  },
  {
    id: "buah",
    title: "Buah",
    emoji: "🍎",
    theme: 1,
    levels: [
      {
        name: "Level 1",
        subtitle: "Mudah",
        stars: 1,
        questions: [
          {
            emoji: "🍌",
            question: "Buah apa yang berwarna kuning dan panjang?",
            answers: [
              { emoji: "🍎", text: "Apel" },
              { emoji: "🍊", text: "Jeruk" },
              { emoji: "🍌", text: "Pisang" },
              { emoji: "🍇", text: "Anggur" }
            ],
            correct: 2
          },
          {
            emoji: "🍎",
            question: "Buah merah ini enak sekali!",
            answers: [
              { emoji: "🍎", text: "Apel" },
              { emoji: "🍋", text: "Lemon" },
              { emoji: "🍑", text: "Persik" },
              { emoji: "🥝", text: "Kiwi" }
            ],
            correct: 0
          },
          {
            emoji: "🍊",
            question: "Buah apa yang berwarna oranye dan bulat?",
            answers: [
              { emoji: "🍇", text: "Anggur" },
              { emoji: "🍊", text: "Jeruk" },
              { emoji: "🍓", text: "Stroberi" },
              { emoji: "🍍", text: "Nanas" }
            ],
            correct: 1
          },
          {
            emoji: "🍇",
            question: "Buah apa yang tumbuh berkelompok?",
            answers: [
              { emoji: "🥭", text: "Mangga" },
              { emoji: "🍈", text: "Melon" },
              { emoji: "🍓", text: "Stroberi" },
              { emoji: "🍇", text: "Anggur" }
            ],
            correct: 3
          },
          {
            emoji: "🍓",
            question: "Buah merah kecil ini namanya?",
            answers: [
              { emoji: "🍓", text: "Stroberi" },
              { emoji: "🍒", text: "Ceri" },
              { emoji: "🍅", text: "Tomat" },
              { emoji: "🍎", text: "Apel" }
            ],
            correct: 0
          }
        ]
      }
    ]
  }
];
