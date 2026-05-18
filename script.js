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
      },

      {
        question: "Hewan apakah ini?",

        image: "assets/hewan/gajah.jpg",

        answers: [
          "Ayam",
          "Kelinci",
          "Gajah",
          "Sapi"
        ],

        correct: "Gajah"
      },

      {
        question: "Hewan apakah ini?",

        image: "assets/hewan/ayam.jpg",

        answers: [
          "Kucing",
          "Ayam",
          "Kelinci",
          "Sapi"
        ],

        correct: "Ayam"
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

  }else{

    // suara salah
    wrongSound.currentTime = 0;

    wrongSound.play();

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

  },800);

}

// ======================================
// RESULT
// ======================================

function showResult(){

  hideAllScreens();

  resultScreen.classList.add("active");

  finalScore.innerText = score;

}

// ======================================
// STAR EFFECT
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