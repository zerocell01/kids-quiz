// ============================================
// KUIS PINTAR ANAK - game.js
// ============================================

let currentCategory = null;
let currentLevel = null;
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

// ===== INITIALIZE =====
function init() {
  renderCategories();
}

// ===== HOME SCREEN =====
function renderCategories() {
  const grid = document.getElementById('category-grid');
  grid.innerHTML = '';
  
  CATEGORIES.forEach((category, index) => {
    const card = document.createElement('div');
    card.className = `category-card card-theme-${category.theme}`;
    card.innerHTML = `
      <span class="card-emoji">${category.emoji}</span>
      <div class="card-title">${category.title}</div>
      <div class="card-count">${category.levels.reduce((sum, l) => sum + l.questions.length, 0)} soal</div>
    `;
    card.onclick = () => selectCategory(category);
    grid.appendChild(card);
  });
}

function selectCategory(category) {
  currentCategory = category;
  showScreen('screen-level-select');
  renderLevels();
}

// ===== LEVEL SELECT SCREEN =====
function renderLevels() {
  const grid = document.getElementById('level-grid');
  const label = document.getElementById('level-select-category-label');
  
  label.textContent = currentCategory.title;
  grid.innerHTML = '';
  
  currentCategory.levels.forEach((level, index) => {
    const card = document.createElement('div');
    card.className = `category-card card-theme-${currentCategory.theme}`;
    card.style.cursor = 'pointer';
    
    const stars = '⭐'.repeat(level.stars) + '☆'.repeat(3 - level.stars);
    
    card.innerHTML = `
      <div style="font-size: 1.4rem; font-weight: 900; color: #3A2D5E;">${level.name}</div>
      <div style="font-size: 0.95rem; color: #7B6FA0; margin: 4px 0;">${level.subtitle}</div>
      <div style="font-size: 1.8rem; margin: 8px 0;">${stars}</div>
      <div class="card-count">${level.questions.length} soal</div>
    `;
    
    card.onclick = () => selectLevel(level);
    grid.appendChild(card);
  });
}

function selectLevel(level) {
  currentLevel = level;
  currentQuestionIndex = 0;
  score = 0;
  selectedAnswer = null;
  
  showScreen('screen-quiz');
  updateQuizHeader();
  displayQuestion();
}

// ===== QUIZ SCREEN =====
function updateQuizHeader() {
  document.getElementById('quiz-category-label').textContent = 
    `${currentCategory.title} - ${currentLevel.name}`;
  document.getElementById('score-mini').textContent = score;
}

function displayQuestion() {
  const question = currentLevel.questions[currentQuestionIndex];
  
  // Update pertanyaan
  document.getElementById('question-emoji').textContent = question.emoji;
  document.getElementById('question-text').textContent = question.question;
  
  // Update progress
  const total = currentLevel.questions.length;
  const percent = ((currentQuestionIndex + 1) / total) * 100;
  document.querySelector('.progress-bar').style.width = percent + '%';
  document.getElementById('progress-text').textContent = 
    `Soal ${currentQuestionIndex + 1} dari ${total}`;
  
  // Render jawaban
  const answerGrid = document.getElementById('answer-grid');
  answerGrid.innerHTML = '';
  selectedAnswer = null;
  
  question.answers.forEach((answer, index) => {
    const btn = document.createElement('button');
    btn.className = 'btn-answer';
    btn.innerHTML = `
      <span class="ans-emoji">${answer.emoji}</span>
      <span>${answer.text}</span>
    `;
    btn.onclick = () => selectAnswer(index, question.correct);
    answerGrid.appendChild(btn);
  });
  
  // Hide feedback
  document.getElementById('feedback-overlay').classList.remove('active');
}

function selectAnswer(answerIndex, correctIndex) {
  if (selectedAnswer !== null) return; // Cegah klik ganda
  
  selectedAnswer = answerIndex;
  const buttons = document.querySelectorAll('.btn-answer');
  const isCorrect = answerIndex === correctIndex;
  
  // Tampilkan jawaban yang dipilih
  buttons[answerIndex].classList.add(isCorrect ? 'correct' : 'wrong');
  
  // Highlight jawaban yang benar jika salah
  if (!isCorrect) {
    buttons[correctIndex].classList.add('correct');
  } else {
    score++;
    document.getElementById('score-mini').textContent = score;
  }
  
  // Tampilkan feedback
  showFeedback(isCorrect);
  
  // Lanjut ke soal berikutnya
  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentLevel.questions.length) {
      displayQuestion();
    } else {
      showResult();
    }
  }, 1500);
}

function showFeedback(isCorrect) {
  const overlay = document.getElementById('feedback-overlay');
  const emoji = document.getElementById('feedback-emoji');
  const text = document.getElementById('feedback-text');
  const box = document.getElementById('feedback-box');
  
  if (isCorrect) {
    emoji.textContent = '✅';
    text.textContent = 'Benar!';
    box.className = 'feedback-box correct-fb';
  } else {
    emoji.textContent = '❌';
    text.textContent = 'Coba Lagi!';
    box.className = 'feedback-box wrong-fb';
  }
  
  overlay.classList.add('active');
}

// ===== RESULT SCREEN =====
function showResult() {
  const total = currentLevel.questions.length;
  const percent = Math.round((score / total) * 100);
  const stars = Math.ceil((score / total) * 3);
  
  document.getElementById('result-score').textContent = `${score} / ${total}`;
  
  // Update stars
  const starSpans = document.querySelectorAll('#result-stars .star');
  starSpans.forEach((star, i) => {
    star.textContent = i < stars ? '⭐' : '☆';
  });
  
  // Message
  let message = '';
  if (percent === 100) {
    message = 'Sempurna! Kamu jenius! 🎉';
  } else if (percent >= 80) {
    message = 'Luar biasa! Kamu sangat pintar! 🌟';
  } else if (percent >= 60) {
    message = 'Bagus! Terus latihan ya! 💪';
  } else {
    message = 'Bagus coba! Belajar lagi ya! 📚';
  }
  document.getElementById('result-message').textContent = message;
  
  showScreen('screen-result');
}

// ===== NAVIGATION =====
function goHome() {
  showScreen('screen-home');
}

function goLevelSelect() {
  showScreen('screen-level-select');
}

function retryLevel() {
  selectLevel(currentLevel);
}

function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
}

// ===== START =====
window.addEventListener('DOMContentLoaded', init);