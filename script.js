let currentAge = null;
let currentCategory = null;
let currentLevel = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let autoNextTimeout = null;

function selectAge(age) {
    currentAge = age;
    loadCategories();
    showScreen('categoryScreen');
}

function loadCategories() {
    const categories = gameData[currentAge].kategori;
    const container = document.getElementById('categoryContainer');
    container.innerHTML = '';

    Object.keys(categories).forEach(key => {
        const cat = categories[key];
        const div = document.createElement('div');
        div.className = 'category-item';
        const emoji = cat.nama.split(' ')[0];
        const name = cat.nama.split(' ')[1];
        div.innerHTML = `<button class="btn-category" onclick="selectCategory('${key}')">
            <span class="emoji">${emoji}</span>
            <span>${name}</span>
        </button>`;
        container.appendChild(div);
    });
}

function selectCategory(cat) {
    currentCategory = cat;
    document.getElementById('levelTitle').textContent = gameData[currentAge].kategori[cat].nama;
    showScreen('levelScreen');
}

function selectLevel(level) {
    currentLevel = level;
    currentQuestions = gameData[currentAge].kategori[currentCategory][level];
    
    if (currentQuestions.length === 0) {
        alert('😅 Soal belum tersedia untuk level ini.\nCoba level lain!');
        return;
    }

    currentQuestionIndex = 0;
    score = 0;
    showScreen('gameScreen');
    loadQuestion();
}

function loadQuestion() {
    // Clear previous timeout
    if (autoNextTimeout) {
        clearTimeout(autoNextTimeout);
    }

    if (currentQuestionIndex >= currentQuestions.length) {
        showResult();
        return;
    }

    const q = currentQuestions[currentQuestionIndex];
    
    document.getElementById('questionText').textContent = q.pertanyaan;
    document.getElementById('questionImage').src = q.gambar;
    document.getElementById('questionNum').textContent = currentQuestionIndex + 1;
    document.getElementById('counter').textContent = (currentQuestionIndex + 1) + '/' + currentQuestions.length;
    document.getElementById('gameScore').textContent = score;

    const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';

    const container = document.getElementById('answersGrid');
    container.innerHTML = '';

    q.jawaban.forEach((ans, idx) => {
        const btn = document.createElement('button');
        btn.className = 'btn-answer';
        btn.textContent = ans;
        btn.onclick = () => checkAnswer(idx);
        container.appendChild(btn);
    });

    document.getElementById('feedback').classList.add('hidden');
}

function checkAnswer(idx) {
    const q = currentQuestions[currentQuestionIndex];
    const feedback = document.getElementById('feedback');
    const feedbackEmoji = document.getElementById('feedbackEmoji');
    const feedbackText = document.getElementById('feedbackText');
    const correct = idx === q.jawabanBenar;

    if (correct) {
        score++;
        feedbackEmoji.textContent = '✅';
        feedbackText.textContent = 'Benar! Jawaban yang tepat!';
        feedback.classList.remove('incorrect');
        document.getElementById('gameScore').textContent = score;
    } else {
        feedbackEmoji.textContent = '❌';
        feedbackText.textContent = 'Salah! Jawaban: ' + q.jawaban[q.jawabanBenar];
        feedback.classList.add('incorrect');
    }

    document.querySelectorAll('.btn-answer').forEach((btn, i) => {
        btn.disabled = true;
        if (i === q.jawabanBenar) {
            btn.classList.add('correct');
        } else if (i === idx && !correct) {
            btn.classList.add('incorrect');
        }
    });

    feedback.classList.remove('hidden');

    // Auto next setelah 2 detik
    autoNextTimeout = setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 2000);
}

function showResult() {
    const total = currentQuestions.length;
    const finalScore = score;
    document.getElementById('finalScore').textContent = finalScore;
    document.getElementById('totalQuestions').textContent = total;

    const pct = (finalScore / total) * 100;
    let emoji = '😊';
    let msg = 'Coba lagi!';
    let desc = 'Jangan menyerah, teruskan belajar!';

    if (pct === 100) {
        emoji = '🌟';
        msg = 'Sempurna!';
        desc = 'Kamu adalah juara!';
    } else if (pct >= 80) {
        emoji = '🎉';
        msg = 'Bagus sekali!';
        desc = 'Teruskan prestasimu!';
    } else if (pct >= 60) {
        emoji = '👍';
        msg = 'Cukup bagus!';
        desc = 'Terus belajar ya!';
    }

    document.getElementById('resultEmoji').textContent = emoji;
    document.getElementById('resultMessage').textContent = msg;
    document.getElementById('resultDesc').textContent = desc;
    showScreen('resultScreen');
}

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    window.scrollTo(0, 0);
}

function goBack() {
    if (autoNextTimeout) {
        clearTimeout(autoNextTimeout);
    }

    if (currentLevel) {
        currentLevel = null;
        showScreen('levelScreen');
    } else if (currentCategory) {
        currentCategory = null;
        showScreen('categoryScreen');
    } else if (currentAge) {
        currentAge = null;
        showScreen('ageScreen');
    }
}

function goToAge() {
    if (autoNextTimeout) {
        clearTimeout(autoNextTimeout);
    }
    currentAge = null;
    currentCategory = null;
    currentLevel = null;
    showScreen('ageScreen');
}