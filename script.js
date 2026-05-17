let currentAge = null;
let currentCategory = null;
let currentLevel = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

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
        div.innerHTML = `<button class="btn-category" onclick="selectCategory('${key}')">
            <span class="emoji">${cat.nama.split(' ')[0]}</span>
            <span>${cat.nama.split(' ')[1]}</span>
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
        alert('Soal belum tersedia untuk level ini');
        return;
    }

    currentQuestionIndex = 0;
    score = 0;
    showScreen('gameScreen');
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        showResult();
        return;
    }

    const q = currentQuestions[currentQuestionIndex];
    
    document.getElementById('questionText').textContent = q.pertanyaan;
    document.getElementById('questionImage').src = q.gambar;
    document.getElementById('counter').textContent = (currentQuestionIndex + 1) + '/' + currentQuestions.length;

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
    document.getElementById('nextBtn').classList.add('hidden');
}

function checkAnswer(idx) {
    const q = currentQuestions[currentQuestionIndex];
    const feedback = document.getElementById('feedback');
    const text = document.getElementById('feedbackText');
    const correct = idx === q.jawabanBenar;

    if (correct) {
        score++;
        text.textContent = '✅ Benar!';
        feedback.classList.remove('incorrect');
    } else {
        text.textContent = '❌ Salah! Jawaban: ' + q.jawaban[q.jawabanBenar];
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
    document.getElementById('nextBtn').classList.remove('hidden');
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

function showResult() {
    const total = currentQuestions.length;
    document.getElementById('finalScore').textContent = score;
    document.getElementById('totalQuestions').textContent = total;

    const pct = (score / total) * 100;
    let msg = '💪 Jangan menyerah!';
    if (pct === 100) msg = '🌟 Sempurna!';
    else if (pct >= 80) msg = '😊 Bagus sekali!';
    else if (pct >= 60) msg = '👍 Cukup bagus!';

    document.getElementById('resultMessage').textContent = msg;
    showScreen('resultScreen');
}

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function goBack() {
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
    currentAge = null;
    currentCategory = null;
    currentLevel = null;
    showScreen('ageScreen');
}