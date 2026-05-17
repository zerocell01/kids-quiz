// =============================================
//  KUIS PINTAR ANAK — game.js
//  Game engine untuk kuis anak balita
// =============================================

// ---- State ----
let currentCategory = null;
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let answered = false;

// ---- Init ----
document.addEventListener("DOMContentLoaded", () => {
  buildCategoryGrid();
});

// ---- Build category cards ----
function buildCategoryGrid() {
  const grid = document.getElementById("category-grid");
  grid.innerHTML = "";
  CATEGORIES.forEach((cat) => {
    const card = document.createElement("div");
    card.className = `category-card card-theme-${cat.theme}`;
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `Kategori ${cat.title}`);
    card.innerHTML = `
      <span class="card-emoji">${cat.emoji}</span>
      <div class="card-title">${cat.title}</div>
      <div class="card-count">${cat.questions.length} soal</div>
    `;
    card.addEventListener("click", () => startQuiz(cat.id));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") startQuiz(cat.id);
    });
    grid.appendChild(card);
  });
}

// ---- Start quiz ----
function startQuiz(categoryId) {
  currentCategory = CATEGORIES.find((c) => c.id === categoryId);
  if (!currentCategory) return;

  currentQuestions = shuffle([...currentCategory.questions]);
  currentIndex = 0;
  score = 0;
  answered = false;

  document.getElementById("quiz-category-label").textContent =
    `${currentCategory.emoji} ${currentCategory.title}`;

  showScreen("screen-quiz");
  renderQuestion();
}

// ---- Render current question ----
function renderQuestion() {
  const q = currentQuestions[currentIndex];
  const total = currentQuestions.length;

  // Update progress
  const pct = (currentIndex / total) * 100;
  const bar = document.getElementById("progress-bar");
  bar.style.setProperty("--prog", pct + "%");
  document.getElementById("progress-text").textContent =
    `Soal ${currentIndex + 1} dari ${total}`;

  // Score mini
  document.getElementById("score-mini").textContent = score;

  // Question
  document.getElementById("question-emoji").textContent = q.emoji;
  document.getElementById("question-text").textContent = q.question;

  // Answers
  const grid = document.getElementById("answer-grid");
  grid.innerHTML = "";
  const shuffledAnswers = shuffleAnswers(q.answers, q.correct);

  shuffledAnswers.answers.forEach((ans, i) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.innerHTML = `
      <span class="ans-emoji">${ans.emoji}</span>
      <span class="ans-text">${ans.text}</span>
    `;
    btn.setAttribute("aria-label", ans.text);
    btn.addEventListener("click", () => handleAnswer(i, shuffledAnswers.correctIndex, btn, grid));
    grid.appendChild(btn);
  });

  answered = false;

  // Animate card in
  const card = document.getElementById("quiz-card");
  card.style.animation = "none";
  card.offsetHeight; // reflow
  card.style.animation = "cardIn 0.35s cubic-bezier(.4,0,.2,1)";
}

// ---- Handle answer ----
function handleAnswer(selectedIndex, correctIndex, selectedBtn, grid) {
  if (answered) return;
  answered = true;

  const allBtns = grid.querySelectorAll(".answer-btn");
  allBtns.forEach((b) => (b.disabled = true));

  const isCorrect = selectedIndex === correctIndex;

  if (isCorrect) {
    score++;
    selectedBtn.classList.add("correct");
    showFeedback(true);
    playSound(true);
  } else {
    selectedBtn.classList.add("wrong");
    allBtns[correctIndex].classList.add("correct");
    showFeedback(false);
    playSound(false);
  }

  setTimeout(() => {
    hideFeedback();
    currentIndex++;
    if (currentIndex < currentQuestions.length) {
      renderQuestion();
    } else {
      showResult();
    }
  }, 1400);
}

// ---- Feedback overlay ----
function showFeedback(isCorrect) {
  const overlay = document.getElementById("feedback-overlay");
  const box = document.getElementById("feedback-box");
  const emoji = document.getElementById("feedback-emoji");
  const text = document.getElementById("feedback-text");

  box.className = `feedback-box ${isCorrect ? "correct-fb" : "wrong-fb"}`;
  if (isCorrect) {
    const correctMessages = ["Hebat! 🎉", "Pintar! ⭐", "Benar! 🥳", "Yay! ✨", "Bagus! 👏"];
    emoji.textContent = "✅";
    text.textContent = correctMessages[Math.floor(Math.random() * correctMessages.length)];
  } else {
    emoji.textContent = "❌";
    text.textContent = "Coba lagi ya! 💪";
  }
  overlay.classList.add("show");
}

function hideFeedback() {
  document.getElementById("feedback-overlay").classList.remove("show");
}

// ---- Show result ----
function showResult() {
  const total = currentQuestions.length;
  const pct = score / total;

  let mascot, title, message;
  if (pct === 1) {
    mascot = "🏆"; title = "Sempurna!"; message = "Kamu luar biasa! 🌟🌟🌟";
  } else if (pct >= 0.6) {
    mascot = "🎉"; title = "Hebat!"; message = "Hampir sempurna, terus belajar ya! 😊";
  } else {
    mascot = "🌈"; title = "Semangat!"; message = "Ayo coba lagi, kamu pasti bisa! 💪";
  }

  document.getElementById("result-mascot").textContent = mascot;
  document.getElementById("result-title").textContent = title;
  document.getElementById("result-message").textContent = message;
  document.getElementById("result-score").textContent = `${score} / ${total}`;

  // Stars
  const starsEl = document.getElementById("result-stars");
  starsEl.innerHTML = "";
  const starsCount = pct === 1 ? 3 : pct >= 0.6 ? 2 : 1;
  for (let i = 0; i < 3; i++) {
    const s = document.createElement("span");
    s.className = "star";
    s.textContent = i < starsCount ? "⭐" : "☆";
    starsEl.appendChild(s);
  }

  showScreen("screen-result");

  if (pct >= 0.6) launchConfetti();
}

// ---- Retry & Home ----
function retryCategory() {
  if (currentCategory) startQuiz(currentCategory.id);
}

function goHome() {
  showScreen("screen-home");
}

// ---- Screen manager ----
function showScreen(id) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo(0, 0);
}

// ---- Confetti ----
function launchConfetti() {
  const container = document.getElementById("result-confetti");
  container.innerHTML = "";
  const colors = ["#FF6B9D", "#FF9F43", "#FFD93D", "#6BCB77", "#4D96FF", "#C77DFF"];
  for (let i = 0; i < 60; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDuration = (Math.random() * 2 + 2) + "s";
    piece.style.animationDelay = (Math.random() * 1.5) + "s";
    piece.style.width = (Math.random() * 10 + 8) + "px";
    piece.style.height = (Math.random() * 10 + 8) + "px";
    piece.style.borderRadius = Math.random() > 0.5 ? "50%" : "3px";
    container.appendChild(piece);
  }
}

// ---- Sound (Web Audio API) ----
let audioCtx = null;
function getAudio() {
  if (!audioCtx) {
    try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { }
  }
  return audioCtx;
}

function playSound(isCorrect) {
  const ctx = getAudio();
  if (!ctx) return;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);

  if (isCorrect) {
    // Happy ascending tones
    osc.frequency.setValueAtTime(523, ctx.currentTime);       // C5
    osc.frequency.setValueAtTime(659, ctx.currentTime + 0.12); // E5
    osc.frequency.setValueAtTime(784, ctx.currentTime + 0.24); // G5
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.5);
  } else {
    // Sad descending tone
    osc.frequency.setValueAtTime(330, ctx.currentTime);
    osc.frequency.setValueAtTime(262, ctx.currentTime + 0.2);
    gain.gain.setValueAtTime(0.25, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.5);
  }
}

// ---- Utilities ----
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function shuffleAnswers(answers, correctIndex) {
  const correctAnswer = answers[correctIndex];
  const others = answers.filter((_, i) => i !== correctIndex);
  const shuffledOthers = shuffle(others);
  const combined = shuffle([correctAnswer, ...shuffledOthers]);
  const newCorrectIndex = combined.indexOf(correctAnswer);
  return { answers: combined, correctIndex: newCorrectIndex };
}
