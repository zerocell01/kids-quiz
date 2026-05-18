// ===============================
// DATA QUIZ
// ===============================

const quizData = {

  hewan: {
    title: "Hewan",
    image: "assets/categories/hewan.jpg",

    quizzes: [

      {
        question: "Apa nama hewan ini?",

        image: "assets/hewan/kucing.jpg",

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
          "Jagung",
          "Kentang",
          "Tomat"
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
          "Pesawat",
          "Sepeda"
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
          "Mulut",
          "Mata",
          "Hidung",
          "Telinga"
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

// ===============================
// ELEMENT
// ===============================

const homeScreen = document.getElementById("homeScreen");
const categoryScreen = document.getElementById("categoryScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

const categoryGrid = document.getElementById("categoryGrid");

const questionText = document.getElementById("questionText");
const questionImage = document.getElementById("questionImage");
const answersContainer = document.getElementById("answersContainer");

const questionNumber = document.getElementById("questionNumber");
const scoreText = document.getElementById("scoreText");
const progressFill = document.getElementById("progressFill");

const finalScore = document.getElementById("finalScore");
const currentQuestionText = document.getElementById("currentQuestionText");

// ===============================
// VARIABLE
// ===============================

let currentCategory = "";
let currentQuestion = 0;
let score = 0;

// ===============================
// SCREEN
// ===============================

function hideAllScreens(){

  homeScreen.classList.remove("active");
  categoryScreen.classList.remove("active");
  quizScreen.classList.remove("active");
  resultScreen.classList.remove("active");

}

// ===============================
// HOME
// ===============================

function goHome(){

  hideAllScreens();

  homeScreen.classList.add("active");

}

// ===============================
// CATEGORY
// ===============================

function showCategory(){

  hideAllScreens();

  categoryScreen.classList.add("active");

  categoryGrid.innerHTML = "";

  Object.keys(quizData).forEach((key)=>{

    const category = quizData[key];

    categoryGrid.innerHTML += `
      <div class="category-card"
        onclick="startQuiz('${key}')">

        <img src="${category.image}" alt="${category.title}">

        <div class="category-name">
          ${category.title}
        </div>

      </div>
    `;
  });

}

// ===============================
// START QUIZ
// ===============================

function startQuiz(category){

  currentCategory = category;
  currentQuestion = 0;
  score = 0;

  scoreText.innerText = score;

  hideAllScreens();

  quizScreen.classList.add("active");

  loadQuestion();

}

// ===============================
// LOAD QUESTION
// ===============================

function loadQuestion(){

  const data =
    quizData[currentCategory].quizzes[currentQuestion];

  questionText.innerText = data.question;

  questionImage.src = data.image;

  currentQuestionText.innerText =
    currentQuestion + 1;

  questionNumber.innerText =
    `${currentQuestion + 1}/${
      quizData[currentCategory].quizzes.length
    }`;

  progressFill.style.width =
    `${((currentQuestion + 1) /
      quizData[currentCategory].quizzes.length) * 100}%`;

  answersContainer.innerHTML = "";

  data.answers.forEach((answer)=>{

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

// ===============================
// CHECK ANSWER
// ===============================

function checkAnswer(answer){

  const data =
    quizData[currentCategory].quizzes[currentQuestion];

  if(answer === data.correct){

    score += 10;

    scoreText.innerText = score;

  }

  currentQuestion++;

  if(
    currentQuestion <
    quizData[currentCategory].quizzes.length
  ){

    loadQuestion();

  }else{

    showResult();

  }

}

// ===============================
// RESULT
// ===============================

function showResult(){

  hideAllScreens();

  resultScreen.classList.add("active");

  finalScore.innerText = score;

}