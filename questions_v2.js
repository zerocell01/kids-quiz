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
          { emoji: "🐱", question: "Hewan apa ini?", answers: [{ emoji: "🐱", text: "Kucing" }, { emoji: "🐶", text: "Anjing" }, { emoji: "🐸", text: "Katak" }, { emoji: "🐭", text: "Tikus" }], correct: 0 },  
          { emoji: "🐶", question: "Siapa yang bilang 'Guk Guk'?", answers: [{ emoji: "🐱", text: "Kucing" }, { emoji: "🐦", text: "Burung" }, { emoji: "🐶", text: "Anjing" }, { emoji: "🐮", text: "Sapi" }], correct: 2 },  
          { emoji: "🐔", question: "Hewan ini bertelur setiap hari!", answers: [{ emoji: "🐟", text: "Ikan" }, { emoji: "🐔", text: "Ayam" }, { emoji: "🐸", text: "Katak" }, { emoji: "🐍", text: "Ular" }], correct: 1 },  
          { emoji: "🐘", question: "Hewan apa yang sangat besar dan punya belalai?", answers: [{ emoji: "🦒", text: "Jerapah" }, { emoji: "🦁", text: "Singa" }, { emoji: "🦓", text: "Zebra" }, { emoji: "🐘", text: "Gajah" }], correct: 3 },  
          { emoji: "🐠", question: "Hewan apa yang hidup di air?", answers: [{ emoji: "🐠", text: "Ikan" }, { emoji: "🐓", text: "Ayam" }, { emoji: "🐈", text: "Kucing" }, { emoji: "🐕", text: "Anjing" }], correct: 0 },  
          { emoji: "🐱", question: "Hewan apa ini?", answers: [{ emoji: "🐱", text: "Kucing" }, { emoji: "🐶", text: "Anjing" }, { emoji: "🐸", text: "Katak" }, { emoji: "🐭", text: "Tikus" }], correct: 0 },  
          { emoji: "🐶", question: "Siapa yang bilang 'Guk Guk'?", answers: [{ emoji: "🐱", text: "Kucing" }, { emoji: "🐦", text: "Burung" }, { emoji: "🐶", text: "Anjing" }, { emoji: "🐮", text: "Sapi" }], correct: 2 },  
          { emoji: "🐔", question: "Hewan ini bertelur setiap hari!", answers: [{ emoji: "🐟", text: "Ikan" }, { emoji: "🐔", text: "Ayam" }, { emoji: "🐸", text: "Katak" }, { emoji: "🐍", text: "Ular" }], correct: 1 },  
          { emoji: "🐘", question: "Hewan apa yang sangat besar dan punya belalai?", answers: [{ emoji: "🦒", text: "Jerapah" }, { emoji: "🦁", text: "Singa" }, { emoji: "🦓", text: "Zebra" }, { emoji: "🐘", text: "Gajah" }], correct: 3 },  
          { emoji: "🐠", question: "Hewan apa yang hidup di air?", answers: [{ emoji: "🐠", text: "Ikan" }, { emoji: "🐓", text: "Ayam" }, { emoji: "🐈", text: "Kucing" }, { emoji: "🐕", text: "Anjing" }], correct: 0 },  
          
        ]  
      },  
      {  
        name: "Level 2",  
        subtitle: "Sedang",  
        stars: 2,  
        questions: [  
          { emoji: "🐰", question: "Hewan apa dengan telinga panjang?", answers: [{ emoji: "🐰", text: "Kelinci" }, { emoji: "🐭", text: "Tikus" }, { emoji: "🐿️", text: "Tupai" }, { emoji: "🦊", text: "Rubah" }], correct: 0 },  
          { emoji: "🦆", question: "Hewan apa yang berbunyi 'Kwek Kwek'?", answers: [{ emoji: "🐓", text: "Ayam" }, { emoji: "🦆", text: "Bebek" }, { emoji: "🦢", text: "Angsa" }, { emoji: "🦅", text: "Elang" }], correct: 1 },  
          { emoji: "🐢", question: "Hewan ini hidup lama dan melindungi dengan cangkang!", answers: [{ emoji: "🐢", text: "Kura-kura" }, { emoji: "🦎", text: "Kadal" }, { emoji: "🐍", text: "Ular" }, { emoji: "🐙", text: "Gurita" }], correct: 0 },  
          { emoji: "🦋", question: "Hewan yang terbang dengan sayap indah adalah?", answers: [{ emoji: "🦋", text: "Kupu-kupu" }, { emoji: "🐝", text: "Lebah" }, { emoji: "🐛", text: "Ulat" }, { emoji: "🦗", text: "Belalang" }], correct: 0 },  
          { emoji: "🦁", question: "Hewan yang berani dengan surai tebal adalah?", answers: [{ emoji: "🦁", text: "Singa" }, { emoji: "🐻", text: "Beruang" }, { emoji: "🦄", text: "Unicorn" }, { emoji: "🦒", text: "Jerapah" }], correct: 0 },  
          { emoji: "🐸", question: "Hewan hijau yang melompat adalah?", answers: [{ emoji: "🐸", text: "Katak" }, { emoji: "🦎", text: "Kadal" }, { emoji: "🐢", text: "Kura-kura" }, { emoji: "🐍", text: "Ular" }], correct: 0 },  
          { emoji: "🐙", question: "Hewan laut dengan banyak lengan adalah?", answers: [{ emoji: "🦑", text: "Cumi-cumi" }, { emoji: "🐙", text: "Gurita" }, { emoji: "🦀", text: "Kepiting" }, { emoji: "🦞", text: "Lobster" }], correct: 1 },  
          { emoji: "🐺", question: "Hewan yang mirip anjing liar adalah?", answers: [{ emoji: "🐺", text: "Serigala" }, { emoji: "🐕", text: "Anjing" }, { emoji: "🦊", text: "Rubah" }, { emoji: "🦌", text: "Rusa" }], correct: 0 },  
          { emoji: "🦒", question: "Hewan tertinggi dengan leher panjang adalah?", answers: [{ emoji: "🦒", text: "Jerapah" }, { emoji: "🐘", text: "Gajah" }, { emoji: "🦓", text: "Zebra" }, { emoji: "🦌", text: "Rusa" }], correct: 0 },  
          { emoji: "🦓", question: "Hewan dengan garis putih hitam adalah?", answers: [{ emoji: "🦓", text: "Zebra" }, { emoji: "🐄", text: "Sapi" }, { emoji: "🦒", text: "Jerapah" }, { emoji: "🦌", text: "Rusa" }], correct: 0 },  
          { emoji: "🐒", question: "Hewan cerdas yang suka buah adalah?", answers: [{ emoji: "🐒", text: "Monyet" }, { emoji: "🦁", text: "Singa" }, { emoji: "🐻", text: "Beruang" }, { emoji: "🦊", text: "Rubah" }], correct: 0 },  
          { emoji: "🦜", question: "Burung berwarna yang bisa meniru suara adalah?", answers: [{ emoji: "🦜", text: "Burung Beo" }, { emoji: "🦅", text: "Elang" }, { emoji: "🦆", text: "Bebek" }, { emoji: "🦉", text: "Burung Hantu" }], correct: 0 },  
          { emoji: "🦘", question: "Hewan yang melompat-lompat berasal dari Australia adalah?", answers: [{ emoji: "🦘", text: "Kanguru" }, { emoji: "🦒", text: "Jerapah" }, { emoji: "🐨", text: "Koala" }, { emoji: "🐑", text: "Domba" }], correct: 0 },  
          { emoji: "🐘", question: "Hewan terbesar di darat adalah?", answers: [{ emoji: "🐘", text: "Gajah" }, { emoji: "🦏", text: "Badak" }, { emoji: "🐄", text: "Sapi" }, { emoji: "🦌", text: "Rusa" }], correct: 0 },  
          { emoji: "🐧", question: "Burung yang tidak bisa terbang dan suka es adalah?", answers: [{ emoji: "🐧", text: "Penguin" }, { emoji: "🦆", text: "Bebek" }, { emoji: "🦢", text: "Angsa" }, { emoji: "🦅", text: "Elang" }], correct: 0 },  
          { emoji: "🐬", question: "Mamalia laut yang cerdas adalah?", answers: [{ emoji: "🐬", text: "Lumba-lumba" }, { emoji: "🐳", text: "Paus" }, { emoji: "🦈", text: "Hiu" }, { emoji: "🐙", text: "Gurita" }], correct: 0 },  
          { emoji: "🦏", question: "Hewan besar dengan kulit tebal adalah?", answers: [{ emoji: "🦏", text: "Badak" }, { emoji: "🐘", text: "Gajah" }, { emoji: "🐄", text: "Sapi" }, { emoji: "🦌", text: "Rusa" }], correct: 0 },  
          { emoji: "🦁", question: "Raja hewan yang berburu kelompok adalah?", answers: [{ emoji: "🦁", text: "Singa" }, { emoji: "🐯", text: "Harimau" }, { emoji: "🦊", text: "Rubah" }, { emoji: "🐺", text: "Serigala" }], correct: 0 },  
          { emoji: "🐯", question: "Hewan besar dengan garis oranye adalah?", answers: [{ emoji: "🐯", text: "Harimau" }, { emoji: "🦁", text: "Singa" }, { emoji: "🐆", text: "Macan Tutul" }, { emoji: "🦒", text: "Jerapah" }], correct: 0 },  
          { emoji: "🐆", question: "Hewan dengan bintik-bintik coklat adalah?", answers: [{ emoji: "🐆", text: "Macan Tutul" }, { emoji: "🐯", text: "Harimau" }, { emoji: "🦁", text: "Singa" }, { emoji: "🐄", text: "Sapi" }], correct: 0 }  
        ]  
      },  
      {  
        name: "Level 3",  
        subtitle: "Sulit",  
        stars: 3,  
        questions: [  
          { emoji: "🐆", question: "Hewan apa yang bisa berlari paling cepat di darat?", answers: [{ emoji: "🐆", text: "Cheetah" }, { emoji: "🦌", text: "Rusa" }, { emoji: "🦓", text: "Zebra" }, { emoji: "🐴", text: "Kuda" }], correct: 0 },  
          { emoji: "🐳", question: "Mamalia terbesar di dunia adalah?", answers: [{ emoji: "🐳", text: "Paus Biru" }, { emoji: "🐘", text: "Gajah" }, { emoji: "🦏", text: "Badak" }, { emoji: "🦣", text: "Mammoth" }], correct: 0 },  
          { emoji: "🦅", question: "Burung yang paling tajam matanya adalah?", answers: [{ emoji: "🦅", text: "Elang Emas" }, { emoji: "🦉", text: "Burung Hantu" }, { emoji: "🦆", text: "Bebek" }, { emoji: "🦜", text: "Burung Beo" }], correct: 0 },  
          { emoji: "🐋", question: "Hewan yang bisa menahan napas paling lama di air adalah?", answers: [{ emoji: "🐋", text: "Paus Sperm" }, { emoji: "🐬", text: "Lumba-lumba" }, { emoji: "🦦", text: "Berang-berang" }, { emoji: "🐢", text: "Kura-kura" }], correct: 0 },  
          { emoji: "🐯", question: "Hewan buas yang paling soliter adalah?", answers: [{ emoji: "🐯", text: "Harimau" }, { emoji: "🦁", text: "Singa" }, { emoji: "🐆", text: "Leopard" }, { emoji: "🦊", text: "Rubah" }], correct: 0 },  
          { emoji: "🐊", question: "Reptil purba terbesar adalah?", answers: [{ emoji: "🐊", text: "Buaya" }, { emoji: "🦎", text: "Iguana" }, { emoji: "🐢", text: "Kura-kura" }, { emoji: "🐍", text: "Ular" }], correct: 0 },  
          { emoji: "🐬", question: "Hewan yang punya otak terbesar relatif terhadap tubuh?", answers: [{ emoji: "🐬", text: "Lumba-lumba" }, { emoji: "🐘", text: "Gajah" }, { emoji: "🦁", text: "Singa" }, { emoji: "🦊", text: "Rubah" }], correct: 0 },  
          { emoji: "🦎", question: "Hewan yang bisa mengubah warna untuk menyamar?", answers: [{ emoji: "🦎", text: "Bunglon" }, { emoji: "🐙", text: "Gurita" }, { emoji: "🦋", text: "Kupu-kupu" }, { emoji: "🦗", text: "Belalang" }], correct: 0 },  
          { emoji: "🦆", question: "Hewan yang bisa bertelur namun menyusui adalah?", answers: [{ emoji: "🦆", text: "Platipus" }, { emoji: "🐧", text: "Penguin" }, { emoji: "🦅", text: "Elang" }, { emoji: "🦎", text: "Kadal" }], correct: 0 },  
          { emoji: "🐢", question: "Hewan yang hidup paling lama adalah?", answers: [{ emoji: "🐢", text: "Kura-kura Raksasa" }, { emoji: "🐳", text: "Paus" }, { emoji: "🦅", text: "Elang" }, { emoji: "🦜", text: "Burung Beo" }], correct: 0 },  
          { emoji: "🧩", question: "Hewan yang bisa menggunakan tools untuk berburu?", answers: [{ emoji: "🧩", text: "Simpanse" }, { emoji: "🐒", text: "Monyet" }, { emoji: "🦦", text: "Berang-berang" }, { emoji: "🦊", text: "Rubah" }], correct: 0 },  
          { emoji: "🐱", question: "Hewan yang punya sensory whisker paling sensitif?", answers: [{ emoji: "🐱", text: "Kucing" }, { emoji: "🐁", text: "Tikus" }, { emoji: "🦊", text: "Rubah" }, { emoji: "🦡", text: "Badger" }], correct: 0 },  
          { emoji: "🐝", question: "Serangga sosial yang punya kasta ratu adalah?", answers: [{ emoji: "🐝", text: "Lebah" }, { emoji: "🦗", text: "Belalang" }, { emoji: "🦋", text: "Kupu-kupu" }, { emoji: "🐛", text: "Ulat" }], correct: 0 },  
          { emoji: "🐳", question: "Hewan yang resonansi frekuensi bawah air paling jauh?", answers: [{ emoji: "🐳", text: "Paus Biru" }, { emoji: "🐬", text: "Lumba-lumba" }, { emoji: "🦈", text: "Hiu" }, { emoji: "🐢", text: "Kura-kura" }], correct: 0 },  
          { emoji: "🐙", question: "Hewan dengan sistem peredaran darah paling kompleks?", answers: [{ emoji: "🐙", text: "Gurita" }, { emoji: "🦑", text: "Cumi-cumi" }, { emoji: "🦀", text: "Kepiting" }, { emoji: "🦐", text: "Udang" }], correct: 0 },  
          { emoji: "🐦", question: "Hewan yang bisa bermigrasi terjauh adalah?", answers: [{ emoji: "🐦", text: "Burung Gereja" }, { emoji: "🦋", text: "Kupu-kupu Raja" }, { emoji: "🐋", text: "Paus Abu-abu" }, { emoji: "🦊", text: "Rubah Arktik" }], correct: 0 },  
          { emoji: "🐘", question: "Hewan yang sistem imun paling kuat terhadap kanker?", answers: [{ emoji: "🐘", text: "Gajah" }, { emoji: "🦏", text: "Badak" }, { emoji: "🐄", text: "Sapi" }, { emoji: "🐑", text: "Domba" }], correct: 0 },  
          { emoji: "⚡", question: "Hewan penghasil listrik paling kuat adalah?", answers: [{ emoji: "⚡", text: "Belut Listrik" }, { emoji: "🐟", text: "Ikan Pari" }, { emoji: "🦈", text: "Hiu" }, { emoji: "🐙", text: "Gurita" }], correct: 0 },  
          { emoji: "🐪", question: "Hewan dengan adaptasi ekstrem pada suhu ekstrem?", answers: [{ emoji: "🐪", text: "Unta" }, { emoji: "🐑", text: "Domba" }, { emoji: "🦌", text: "Rusa" }, { emoji: "🦍", text: "Gorila" }], correct: 0 },  
          { emoji: "🦣", question: "Hewan yang sudah punah adalah?", answers: [{ emoji: "🦣", text: "Mammoth" }, { emoji: "🦕", text: "Dinosaurus" }, { emoji: "🐋", text: "Paus Selatan" }, { emoji: "🦁", text: "Harimau Jawa" }], correct: 0 }  
        ]  
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
          { emoji: "🍌", question: "Buah apa yang berwarna kuning dan panjang?", answers: [{ emoji: "🍎", text: "Apel" }, { emoji: "🍊", text: "Jeruk" }, { emoji: "🍌", text: "Pisang" }, { emoji: "🍇", text: "Anggur" }], correct: 2 },  
          { emoji: "🍎", question: "Buah merah ini enak sekali!", answers: [{ emoji: "🍎", text: "Apel" }, { emoji: "🍋", text: "Lemon" }, { emoji: "🍑", text: "Persik" }, { emoji: "🥝", text: "Kiwi" }], correct: 0 },  
          { emoji: "🍊", question: "Buah apa yang berwarna oranye dan bulat?", answers: [{ emoji: "🍇", text: "Anggur" }, { emoji: "🍊", text: "Jeruk" }, { emoji: "🍓", text: "Stroberi" }, { emoji: "🍍", text: "Nanas" }], correct: 1 },  
          { emoji: "🍇", question: "Buah apa yang tumbuh berkelompok?", answers: [{ emoji: "🥭", text: "Mangga" }, { emoji: "🍈", text: "Melon" }, { emoji: "🍓", text: "Stroberi" }, { emoji: "🍇", text: "Anggur" }], correct: 3 },  
          { emoji: "🍓", question: "Buah merah kecil ini namanya?", answers: [{ emoji: "🍓", text: "Stroberi" }, { emoji: "🍒", text: "Ceri" }, { emoji: "🍅", text: "Tomat" }, { emoji: "🍎", text: "Apel" }], correct: 0 },  
          { emoji: "🍌", question: "Buah apa yang berwarna kuning dan panjang?", answers: [{ emoji: "🍎", text: "Apel" }, { emoji: "🍊", text: "Jeruk" }, { emoji: "🍌", text: "Pisang" }, { emoji: "🍇", text: "Anggur" }], correct: 2 },  
          { emoji: "🍎", question: "Buah merah ini enak sekali!", answers: [{ emoji: "🍎", text: "Apel" }, { emoji: "🍋", text: "Lemon" }, { emoji: "🍑", text: "Persik" }, { emoji: "🥝", text: "Kiwi" }], correct: 0 },  
          { emoji: "🍊", question: "Buah apa yang berwarna oranye dan bulat?", answers: [{ emoji: "🍇", text: "Anggur" }, { emoji: "🍊", text: "Jeruk" }, { emoji: "🍓", text: "Stroberi" }, { emoji: "🍍", text: "Nanas" }], correct: 1 },  
          { emoji: "🍇", question: "Buah apa yang tumbuh berkelompok?", answers: [{ emoji: "🥭", text: "Mangga" }, { emoji: "🍈", text: "Melon" }, { emoji: "🍓", text: "Stroberi" }, { emoji: "🍇", text: "Anggur" }], correct: 3 },  
          { emoji: "🍓", question: "Buah merah kecil ini namanya?", answers: [{ emoji: "🍓", text: "Stroberi" }, { emoji: "🍒", text: "Ceri" }, { emoji: "🍅", text: "Tomat" }, { emoji: "🍎", text: "Apel" }], correct: 0 },  
          { emoji: "🍌", question: "Buah apa yang berwarna kuning dan panjang?", answers: [{ emoji: "🍎", text: "Apel" }, { emoji: "🍊", text: "Jeruk" }, { emoji: "🍌", text: "Pisang" }, { emoji: "🍇", text: "Anggur" }], correct: 2 },  
          { emoji: "🍎", question: "Buah merah ini enak sekali!", answers: [{ emoji: "🍎", text: "Apel" }, { emoji: "🍋", text: "Lemon" }, { emoji: "🍑", text: "Persik" }, { emoji: "🥝", text: "Kiwi" }], correct: 0 },  
          { emoji: "🍊", question: "Buah apa yang berwarna oranye dan bulat?", answers: [{ emoji: "🍇", text: "Anggur" }, { emoji: "🍊", text: "Jeruk" }, { emoji: "🍓", text: "Stroberi" }, { emoji: "🍍", text: "Nanas" }], correct: 1 },  
          { emoji: "🍇", question: "Buah apa yang tumbuh berkelompok?", answers: [{ emoji: "🥭", text: "Mangga" }, { emoji: "🍈", text: "Melon" }, { emoji: "🍓", text: "Stroberi" }, { emoji: "🍇", text: "Anggur" }], correct: 3 },  
          { emoji: "🍓", question: "Buah merah kecil ini namanya?", answers: [{ emoji: "🍓", text: "Stroberi" }, { emoji: "🍒", text: "Ceri" }, { emoji: "🍅", text: "Tomat" }, { emoji: "🍎", text: "Strobri" }], correct: 3 }, 
     ]
      },
      {
        name: "Level 2",
        subtitle: "Sedang",
        stars: 2,
        questions: [
          { emoji: "🥭", question: "Buah apa yang manis dan berbiji besar?", answers: [{ emoji: "🥭", text: "Mangga" }, { emoji: "🍊", text: "Jeruk" }, { emoji: "🍎", text: "Apel" }, { emoji: "🍌", text: "Pisang" }], correct: 0 },
          { emoji: "🍉", question: "Buah apa yang besar dan berair di musim panas?", answers: [{ emoji: "🍉", text: "Semangka" }, { emoji: "🍈", text: "Melon" }, { emoji: "🍇", text: "Anggur" }, { emoji: "🍓", text: "Stroberi" }], correct: 0 },
          { emoji: "🍍", question: "Buah tropis dengan mahkota di atasnya adalah?", answers: [{ emoji: "🍍", text: "Nanas" }, { emoji: "🥭", text: "Mangga" }, { emoji: "🥥", text: "Kelapa" }, { emoji: "🍌", text: "Pisang" }], correct: 0 },
          { emoji: "🍑", question: "Buah berbulu yang manis dan lembut adalah?", answers: [{ emoji: "🍑", text: "Persik" }, { emoji: "🍒", text: "Ceri" }, { emoji: "🍋", text: "Lemon" }, { emoji: "🥝", text: "Kiwi" }], correct: 0 },
          { emoji: "🍒", question: "Buah kecil merah gelap yang biji satu adalah?", answers: [{ emoji: "🍒", text: "Ceri" }, { emoji: "🍓", text: "Stroberi" }, { emoji: "🍅", text: "Tomat" }, { emoji: "🥝", text: "Kiwi" }], correct: 0 },
          { emoji: "🥝", question: "Buah hijau dengan biji hitam kecil adalah?", answers: [{ emoji: "🥝", text: "Kiwi" }, { emoji: "🍎", text: "Apel Hijau" }, { emoji: "🥒", text: "Mentimun" }, { emoji: "🍏", text: "Apel" }], correct: 0 },
          { emoji: "🍋", question: "Buah kuning asam ini biasa untuk minuman?", answers: [{ emoji: "🍋", text: "Lemon" }, { emoji: "🍊", text: "Jeruk" }, { emoji: "🍌", text: "Pisang" }, { emoji: "🍎", text: "Apel" }], correct: 0 },
          { emoji: "🥑", question: "Buah berwarna hijau dengan biji besar adalah?", answers: [{ emoji: "🥑", text: "Alpukat" }, { emoji: "🥝", text: "Kiwi" }, { emoji: "🍏", text: "Apel Hijau" }, { emoji: "🥒", text: "Mentimun" }], correct: 0 },
          { emoji: "🍈", question: "Buah mirip semangka tapi lebih kecil adalah?", answers: [{ emoji: "🍈", text: "Melon" }, { emoji: "🍉", text: "Semangka" }, { emoji: "🍍", text: "Nanas" }, { emoji: "🥭", text: "Mangga" }], correct: 0 },
          { emoji: "🍓", question: "Buah merah lembut yang banyak biji adalah?", answers: [{ emoji: "🍓", text: "Stroberi" }, { emoji: "🍒", text: "Ceri" }, { emoji: "🍅", text: "Tomat" }, { emoji: "🍎", text: "Apel" }], correct: 0 },
          { emoji: "🍌", question: "Buah apa yang mudah dikupas?", answers: [{ emoji: "🍌", text: "Pisang" }, { emoji: "🍊", text: "Jeruk" }, { emoji: "🍎", text: "Apel" }, { emoji: "🍇", text: "Anggur" }], correct: 0 },
          { emoji: "🍎", question: "Buah merah yang renyah dan manis?", answers: [{ emoji: "🍎", text: "Apel Merah" }, { emoji: "🍋", text: "Lemon" }, { emoji: "🍑", text: "Persik" }, { emoji: "🥝", text: "Kiwi" }], correct: 0 },
          { emoji: "🍊", question: "Buah oranye yang penuh vitamin C?", answers: [{ emoji: "🍊", text: "Jeruk Manis" }, { emoji: "🍋", text: "Lemon" }, { emoji: "🍌", text: "Pisang" }, { emoji: "🍎", text: "Apel" }], correct: 0 },
          { emoji: "🍇", question: "Buah kecil yang tumbuh menggantung?", answers: [{ emoji: "🍇", text: "Anggur" }, { emoji: "🍓", text: "Stroberi" }, { emoji: "🍒", text: "Ceri" }, { emoji: "🍅", text: "Tomat" }], correct: 0 },
          { emoji: "🥭", question: "Raja buah dengan rasa manis dan lembut?", answers: [{ emoji: "🥭", text: "Mangga" }, { emoji: "🍌", text: "Pisang" }, { emoji: "🍑", text: "Persik" }, { emoji: "🍍", text: "Nanas" }], correct: 0 },
          { emoji: "🍉", question: "Buah musiman yang menyegarkan?", answers: [{ emoji: "🍉", text: "Semangka" }, { emoji: "🍈", text: "Melon" }, { emoji: "🍇", text: "Anggur" }, { emoji: "🍓", text: "Stroberi" }], correct: 0 },
          { emoji: "🍍", question: "Buah yang bisa tahan lama dan nikmat?", answers: [{ emoji: "🍍", text: "Nanas" }, { emoji: "🥭", text: "Mangga" }, { emoji: "🍌", text: "Pisang" }, { emoji: "🍎", text: "Apel" }], correct: 0 },
          { emoji: "🍑", question: "Buah lembut yang enak dimakan segar?", answers: [{ emoji: "🍑", text: "Persik" }, { emoji: "🍒", text: "Ceri" }, { emoji: "🍋", text: "Lemon" }, { emoji: "🥝", text: "Kiwi" }], correct: 0 },
          { emoji: "🍒", question: "Buah mahal dengan rasa manis istimewa?", answers: [{ emoji: "🍒", text: "Ceri Premium" }, { emoji: "🍓", text: "Stroberi" }, { emoji: "🍅", text: "Tomat" }, { emoji: "🥝", text: "Kiwi" }], correct: 0 },
          { emoji: "🥝", question: "Buah eksotis dari Selandia Baru?", answers: [{ emoji: "🥝", text: "Kiwi" }, { emoji: "🍎", text: "Apel" }, { emoji: "🥒", text: "Mentimun" }, { emoji: "🍏", text: "Apel Hijau" }], correct: 0 }
        ]
      },
      {
        name: "Level 3",
        subtitle: "Sulit",
        stars: 3,
        questions: [
          { emoji: "🍓", question: "Stroberi kaya akan vitamin C dan antioksidan?", answers: [{ emoji: "🍓", text: "Benar" }, { emoji: "❌", text: "Salah" }, { emoji: "🤷", text: "Tidak Tahu" }, { emoji: "📚", text: "Pelajari" }], correct: 0 },
          { emoji: "🍌", question: "Pisang mengandung mineral apa yang penting untuk otot?", answers: [{ emoji: "🍌", text: "Kalium" }, { emoji: "⚗️", text: "Zat Besi" }, { emoji: "💎", text: "Kalsium" }, { emoji: "✨", text: "Magnesium" }], correct: 0 },
          { emoji: "🥝", question: "Kiwi berasal dari negara mana?", answers: [{ emoji: "🥝", text: "Selandia Baru" }, { emoji: "🇨🇳", text: "China" }, { emoji: "🇵🇭", text: "Filipina" }, { emoji: "🇹🇭", text: "Thailand" }], correct: 0 },
          { emoji: "🍊", question: "Jeruk mengandung berapa persen air?", answers: [{ emoji: "💧", text: "Sekitar 87%" }, { emoji: "💧", text: "Sekitar 50%" }, { emoji: "💧", text: "Sekitar 30%" }, { emoji: "💧", text: "Sekitar 10%" }], correct: 0 },
          { emoji: "🥭", question: "Mangga disebut sebagai apa di dunia?", answers: [{ emoji: "👑", text: "Raja Buah" }, { emoji: "💎", text: "Permata Buah" }, { emoji: "🌟", text: "Bintang Buah" }, { emoji: "🏆", text: "Juara Buah" }], correct: 0 },
          { emoji: "🍉", question: "Semangka mengandung 90% apa?", answers: [{ emoji: "💧", text: "Air" }, { emoji: "🍫", text: "Gula" }, { emoji: "🧀", text: "Lemak" }, { emoji: "💪", text: "Protein" }], correct: 0 },
          { emoji: "🍍", question: "Nanas mengandung enzim apa yang membantu pencernaan?", answers: [{ emoji: "🔬", text: "Bromelain" }, { emoji: "🔬", text: "Papain" }, { emoji: "🔬", text: "Amilase" }, { emoji: "🔬", text: "Lipase" }], correct: 0 },
          { emoji: "🍑", question: "Persik berasal dari benua mana?", answers: [{ emoji: "🌍", text: "Asia" }, { emoji: "🌎", text: "Amerika" }, { emoji: "🌏", text: "Eropa" }, { emoji: "🌐", text: "Afrika" }], correct: 0 },
          { emoji: "🍒", question: "Ceri mengandung pigmen apa yang memberi warna merah?", answers: [{ emoji: "🎨", text: "Antosianin" }, { emoji: "🎨", text: "Karotin" }, { emoji: "🎨", text: "Xantofil" }, { emoji: "🎨", text: "Klorofil" }], correct: 0 },
          { emoji: "🥑", question: "Alpukat kaya akan lemak apa yang sehat?", answers: [{ emoji: "💚", text: "Lemak Tidak Jenuh" }, { emoji: "❌", text: "Lemak Jenuh" }, { emoji: "⚡", text: "Lemak Trans" }, { emoji: "🔥", text: "Kolesterol" }], correct: 0 },
          { emoji: "🍋", question: "Lemon memiliki pH berapa yang sangat asam?", answers: [{ emoji: "📊", text: "2-3" }, { emoji: "📊", text: "5-6" }, { emoji: "📊", text: "7-8" }, { emoji: "📊", text: "9-10" }], correct: 0 },
          { emoji: "🍈", question: "Melon tumbuh di atas tanah atau merambat?", answers: [{ emoji: "🌱", text: "Merambat" }, { emoji: "🌱", text: "Tegak" }, { emoji: "🌱", text: "Menggantung" }, { emoji: "🌱", text: "Bawah Tanah" }], correct: 0 },
          { emoji: "🍇", question: "Anggur merah mengandung resveratrol yang baik untuk apa?", answers: [{ emoji: "❤️", text: "Jantung" }, { emoji: "🧠", text: "Otak" }, { emoji: "💪", text: "Otot" }, { emoji: "🦴", text: "Tulang" }], correct: 0 },
          { emoji: "🍓", question: "Berapa kalori dalam 100g stroberi?", answers: [{ emoji: "🔢", text: "32 kalori" }, { emoji: "🔢", text: "85 kalori" }, { emoji: "🔢", text: "150 kalori" }, { emoji: "🔢", text: "250 kalori" }], correct: 0 },
          { emoji: "🍌", question: "Pisang matang memiliki bintik hitam karena?", answers: [{ emoji: "🧪", text: "Produksi Etilen" }, { emoji: "🧪", text: "Pembusukan" }, { emoji: "🧪", text: "Oxidasi" }, { emoji: "🧪", text: "Fermentasi" }], correct: 0 },
          { emoji: "🍎", question: "Apel disimpan di mana untuk tahan lama?", answers: [{ emoji: "❄️", text: "Lemari Es" }, { emoji: "☀️", text: "Bawah Matahari" }, { emoji: "🔥", text: "Dekat Api" }, { emoji: "💨", text: "Tempat Berangin" }], correct: 0 },
          { emoji: "🍊", question: "Jeruk santang berasal dari mana?", answers: [{ emoji: "🌏", text: "Mandarin/China" }, { emoji: "🌎", text: "Florida" }, { emoji: "🌍", text: "Spanyol" }, { emoji: "🗺️", text: "Maroko" }], correct: 0 },
          { emoji: "🥭", question: "Manga terbaik menurut penikmat berasal dari?", answers: [{ emoji: "🇮🇩", text: "Indonesia" }, { emoji: "🇮🇳", text: "India" }, { emoji: "🇵🇭", text: "Filipina" }, { emoji: "🇹🇭", text: "Thailand" }], correct: 0 },
          { emoji: "🍉", question: "Semangka pertama kali diproduksi besar di mana?", answers: [{ emoji: "🌍", text: "Mesir" }, { emoji: "🌎", text: "Brazil" }, { emoji: "🌏", text: "China" }, { emoji: "🗺️", text: "India" }], correct: 0 },
          { emoji: "🍍", question: "Nanas butuh berapa lama untuk panen?", answers: [{ emoji: "⏰", text: "18-24 Bulan" }, { emoji: "⏰", text: "3-6 Bulan" }, { emoji: "⏰", text: "1-2 Tahun" }, { emoji: "⏰", text: "2-3 Minggu" }], correct: 0 }
        ]
      }
    ]
  }
];