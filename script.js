// ======================================
// DATA QUIZ
// ======================================

const quizData = {

  hewan: {
    title: "Hewan",

    image: "assets/categories/hewan.png",

    quizzes: [

      {
        question: "Apa nama hewan ini?",

        image: "assets/hewan/kucing.png",

        answers: [
          "Kucing",
          "Anjing",
          "Burung",
          "Ikan"
        ],

        correct: "Kucing"
      }

    ]
  },

  buah: {
    title: "Buah",

    image: "assets/categories/buah.jpg",

    quizzes: [

      {
        question: "Buah apakah ini?",

        image: "assets/buah/apel.jpg",

        answers: [
          "Mangga",
          "Jeruk",
          "Apel",
          "Semangka"
        ],

        correct: "Apel"
      },

      {
        question: "Buah apakah ini?",

        image: "assets/buah/pisang.jpg",

        answers: [
          "Pisang",
          "Apel",
          "Anggur",
          "Nanas"
        ],

        correct: "Pisang"
      }

    ]
  },

  sayuran: {
    title: "Sayuran",

    image: "assets/categories/sayuran.jpg",

    quizzes: [

      {
        question: "Sayur apakah ini?",

        image: "assets/sayuran/wortel.jpg",

        answers: [
          "Wortel",
          "Tomat",
          "Kentang",
          "Jagung"
        ],

        correct: "Wortel"
      }

    ]
  },

  kendaraan: {
    title: "Kendaraan",

    image: "assets/categories/kendaraan.jpg",

    quizzes: [

      {
        question: "Kendaraan apakah ini?",

        image: "assets/kendaraan/mobil.jpg",

        answers: [
          "Motor",
          "Mobil",
          "Sepeda",
          "Pesawat"
        ],

        correct: "Mobil"
      }

    ]
  },

  tubuh: {
    title: "Anggota Tubuh",

    image: "assets/categories/tubuh.jpg",

    quizzes: [

      {
        question: "Bagian tubuh untuk melihat adalah?",

        image: "assets/tubuh/mata.jpg",

        answers: [
          "Mata",
          "Mulut",
          "Telinga",
          "Hidung"
        ],

        correct: "Mata"
      }

    ]
  },

  angka: {
    title: "Angka",

    image: "assets/categories/angka.jpg",

    quizzes: [

      {
        question: "Ini angka berapa?",

        image: "assets/angka/5.jpg",

        answers: [
          "3",
          "5",
          "7",
          "9"
        ],

        correct: "5"
      }

    ]
  },

  alphabet: {
    title: "Alphabet",

    image: "assets/categories/alphabet.jpg",

    quizzes: [

      {
        question: "Huruf apakah ini?",

        image: "assets/alphabet/a.jpg",

        answers: [
          "A",
          "B",
          "C",
          "D"
        ],

        correct: "A"
      }

    ]
  }

};

// ======================================
// ELEMENT
// ======================================

const homeScreen =
  document.getElementById("homeScreen");

const categoryScreen =
  document.getElementById("categoryScreen");

const quizScreen =
  document.getElementById("quizScreen");

const resultScreen =
  document.getElementById("resultScreen");

const categoryGrid =
  document.getElementById("categoryGrid");

const questionText =
  document.getElementById("questionText");

const questionImage =
  document.getElementById("questionImage");

const answersContainer =
  document.getElementById("answersContainer");

const questionNumber =
  document.getElementById("questionNumber");

const scoreText =
  document.getElementById("scoreText");

const progressFill =
  document.getElementById("progressFill");

const finalScore =
  document.getElementById("finalScore");

const currentQuestionText =
  document.getElementById("currentQuestionText");

// ======================================
// AUDIO
// ======================================

const correctSound =
  document.getElementById("correctSound");

const wrongSound =
  document.getElementById("wrongSound");

const bgMusic =
  document.getElementById("bgMusic");

// autoplay music saat user klik pertama
document.body.addEventListener("click", ()=>{

  bgMusic.play();

},{ once:true });

// ======================================
// VARIABLE
// ======================================

let currentCategory = "";

let currentQuestion = 0;

let score = 0;

// ======================================
// HIDE SCREEN
// ======================================

function hideAllScreens(){

  homeScreen.classList.remove("active");

  categoryScreen.classList.remove("active");

  quizScreen.classList.remove("active");

  resultScreen.classList.remove("active");

}

// ======================================
// HOME
// ======================================

function goHome(){

  hideAllScreens();

  document.body.className = "";

  homeScreen.classList.add("active");

}

// ======================================
// CATEGORY
// ======================================

function showCategory(){

  hideAllScreens();

  document.body.className = "";

  categoryScreen.classList.add("active");

  categoryGrid.innerHTML = "";

  Object.keys(quizData).forEach((key)=>{

    const category = quizData[key];

    categoryGrid.innerHTML += `
      <div class="category-card"
        onclick="startQuiz('${key}')">

        <img
          src="${category.image}"
          alt="${category.title}"
          class="category-img"
        >

        <div class="category-name">
          ${category.title}
        </div>

      </div>
    `;

  });

  // Add load event listeners to category images
  setTimeout(()=>{
    const categoryImages = document.querySelectorAll(".category-img");
    categoryImages.forEach((img)=>{
      if(img.complete){
        img.classList.add("loaded");
      }else{
        img.addEventListener("load", ()=>{
          img.classList.add("loaded");
        });
        img.addEventListener("error", ()=>{
          img.style.background = "#f0e8ff";
        });
      }
    });
  },0);

}

// ======================================
// RANDOM ARRAY
// ======================================

function shuffleArray(array){

  for(let i = array.length - 1; i > 0; i--){

    const j =
      Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] =
    [array[j], array[i]];

  }

  return array;

}

// ======================================
// START QUIZ
// ======================================

function startQuiz(category){

  currentCategory = category;

  currentQuestion = 0;

  score = 0;

  scoreText.innerText = score;

  // reset theme
  document.body.className = "";

  // theme category
  document.body.classList.add(
    `${category}-theme`
  );

  const quizList =
    quizData[category].quizzes;

  // jika quiz kosong
  if(!quizList || quizList.length === 0){

    hideAllScreens();

    quizScreen.classList.add("active");

    document.querySelector("#quizScreen .container")
    .innerHTML = `
      <div class="empty-box">

        <h2>
          📚 Kuis Belum Tersedia
        </h2>

        <p>
          Quiz untuk kategori ini
          belum ditambahkan.
        </p>

        <button
          class="main-btn"
          onclick="showCategory()">

          Kembali

        </button>

      </div>
    `;

    return;

  }

  // random soal
  quizData[category].quizzes =
    shuffleArray(quizList);

  // tampil quiz
  hideAllScreens();

  quizScreen.classList.add("active");

  loadQuestion();

}

// ======================================
// LOAD QUESTION
// ======================================

function loadQuestion(){

  const data =
    quizData[currentCategory]
    .quizzes[currentQuestion];

  questionText.innerText =
    data.question;

  // Set loading state
  questionImage.classList.add("loading");
  questionImage.classList.remove("error");
  questionImage.alt = "Memuat gambar...";

  // Handle image load
  const handleImageLoad = ()=>{
    questionImage.classList.remove("loading");
    questionImage.removeEventListener("load", handleImageLoad);
    questionImage.removeEventListener("error", handleImageError);
  };

  // Handle image error
  const handleImageError = ()=>{
    questionImage.classList.remove("loading");
    questionImage.classList.add("error");
    questionImage.innerHTML = "📷";
    questionImage.alt = "Gambar tidak tersedia";
    questionImage.removeEventListener("load", handleImageLoad);
    questionImage.removeEventListener("error", handleImageError);
  };

  // Remove old listeners
  questionImage.removeEventListener("load", handleImageLoad);
  questionImage.removeEventListener("error", handleImageError);

  // Add new listeners
  questionImage.addEventListener("load", handleImageLoad);
  questionImage.addEventListener("error", handleImageError);

  // Set source
  questionImage.src = data.image;

  currentQuestionText.innerText =
    currentQuestion + 1;

  questionNumber.innerText =
    `${currentQuestion + 1}/${
      quizData[currentCategory]
      .quizzes.length
    }`;

  progressFill.style.width =
    `${(
      (currentQuestion + 1) /
      quizData[currentCategory]
      .quizzes.length
    ) * 100}%`;

  answersContainer.innerHTML = "";

  // random jawaban
  const shuffledAnswers =
    shuffleArray([...data.answers]);

  shuffledAnswers.forEach((answer)=>{

    const button =
      document.createElement("button");

    button.classList.add("answer-btn");

    button.innerText = answer;

    button.onclick = ()=>{

      checkAnswer(answer);

    };

    answersContainer.appendChild(button);

  });

}

// ======================================
// CHECK ANSWER
// ======================================

function checkAnswer(answer){

  const data =
    quizData[currentCategory]
    .quizzes[currentQuestion];

  const allButtons =
    document.querySelectorAll(".answer-btn");

  // disable tombol
  allButtons.forEach((btn)=>{

    btn.disabled = true;

  });

  if(answer === data.correct){

    // tambah score
    score += 10;

    scoreText.innerText = score;

    // suara benar
    correctSound.currentTime = 0;

    correctSound.play();

    // animasi bintang
    createStars();

    // highlight button yang benar
    allButtons.forEach((btn)=>{
      if(btn.innerText === answer){
        btn.classList.add("answer-correct");
      }
    });

  }else{

    // suara salah
    wrongSound.currentTime = 0;

    wrongSound.play();

    // highlight button yang salah
    allButtons.forEach((btn)=>{
      if(btn.innerText === answer){
        btn.classList.add("answer-wrong");
      }
      if(btn.innerText === data.correct){
        btn.classList.add("answer-correct");
      }
    });

  }

  // next question
  currentQuestion++;

  setTimeout(()=>{

    if(
      currentQuestion <
      quizData[currentCategory]
      .quizzes.length
    ){

      loadQuestion();

    }else{

      showResult();

    }

  },400);

}

// ======================================
// RESULT
// ======================================

function showResult(){

  hideAllScreens();

  resultScreen.classList.add("active");

  const totalQuestions = quizData[currentCategory].quizzes.length;
  const correctAnswers = Math.round(score / 10);
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  let message = "";
  let emoji = "";

  if(percentage === 100){
    emoji = "🏆";
    message = "Sempurna! Kamu adalah juara!";
  }else if(percentage >= 80){
    emoji = "🌟";
    message = "Luar biasa! Hasil yang sangat bagus!";
  }else if(percentage >= 60){
    emoji = "👍";
    message = "Bagus! Terus belajar ya!";
  }else if(percentage >= 40){
    emoji = "💪";
    message = "Lumayan! Coba lagi nanti ya!";
  }else{
    emoji = "😊";
    message = "Jangan menyerah! Coba lagi lebih baik!";
  }

  finalScore.innerHTML = `
    <div class="result-emoji" style="margin-bottom: 20px;">
      <h2 style="font-size: 48px; margin-bottom: 10px;">${emoji}</h2>
      <p style="font-size: 18px; color: #666; margin-bottom: 15px;">${message}</p>
    </div>
    <div class="result-score" style="background: #f0f4ff; padding: 20px; border-radius: 20px; margin-bottom: 20px;">
      <p style="font-size: 14px; color: #777; margin-bottom: 8px;">Total Skor</p>
      <p class="score-number" style="font-size: 42px; font-weight: bold; color: #6d4cff; margin-bottom: 15px;">${score} Poin</p>
      <div class="result-details" style="font-size: 14px; color: #666; text-align: left; line-height: 1.8;">
        <p>✅ Benar: ${correctAnswers}/${totalQuestions}</p>
        <p>⏱️ Akurasi: ${percentage}%</p>
        <p>📚 Kategori: ${quizData[currentCategory].title}</p>
      </div>
    </div>
  `;

  // Add animation classes
  const resultCard = document.querySelector('.result-card');
  resultCard.classList.add('result-pop-in');

  // Trigger confetti
  createConfetti();

  // Animate score number after a delay
  setTimeout(()=>{
    const scoreNum = document.querySelector('.score-number');
    if(scoreNum) scoreNum.classList.add('score-bounce');
  },300);

  // Animate details staggered
  setTimeout(()=>{
    const details = document.querySelector('.result-details');
    if(details) details.classList.add('details-slide-in');
  },600);

}

// ======================================
// CONFETTI EFFECT
// ======================================

function createConfetti(){

  const container = document.getElementById("starContainer");

  const confettiEmojis = ["🎉", "🎊", "✨", "⭐", "🌟", "💫", "🎈", "🎁"];

  for(let i = 0; i < 30; i++){

    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.innerHTML = confettiEmojis[Math.floor(Math.random() * confettiEmojis.length)];
    confetti.style.left = Math.random() * 100 + "%";
    confetti.style.top = Math.random() * 100 + "%";
    confetti.style.fontSize = (Math.random() * 20 + 16) + "px";
    confetti.style.animationDelay = (Math.random() * 0.3) + "s";
    confetti.style.opacity = Math.random() * 0.7 + 0.3;

    container.appendChild(confetti);

    setTimeout(()=>{
      confetti.remove();
    }, 3000);

  }

}

// ======================================
// STAR EFFECT (untuk jawaban benar)
// ======================================

function createStars(){

  const container =
    document.getElementById("starContainer");

  for(let i = 0; i < 15; i++){

    const star =
      document.createElement("div");

    star.classList.add("star");

    star.innerHTML = "⭐";

    star.style.left =
      Math.random() * 100 + "%";

    star.style.top =
      Math.random() * 100 + "%";

    container.appendChild(star);

    setTimeout(()=>{

      star.remove();

    },1500);

  }

}