let currentAge = null;
let currentCategory = null;
let currentLevel = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    window.scrollTo(0, 0); // Scroll ke atas
}

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
        const categoryData = categories[key];
        const div = document.createElement('div');
        div.className = 'category-card';
        div.innerHTML = `
            <button class="btn-category" onclick="selectCategory('${key}')">
                <span class="category-emoji">${categoryData.nama.split(' ')[0]}</span>
                <span class="category-name">${categoryData.nama.split(' ')[1]}</span>
            </button>
        `;
        container.appendChild(div);
    });
}

function selectCategory(category) {
    currentCategory = category;
    showScreen('levelScreen');
    document.getElementById('levelTitle').textContent = 
        gameData[currentAge].kategori[category].nama;
}

function selectLevel(level) {
    currentLevel = level;
    currentQuestions = gameData[currentAge].kategori[currentCategory][level];
    
    if (currentQuestions.length === 0) {
        alert('Maaf, soal untuk level ini belum tersedia.\nCoba level lain!');
        return;
    }

    currentQuestionIndex = 0;
    score = 0;
    showScreen('gameScreen');
    displayQuestion();
}

function displayQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        showResult();
        return;
    }

    const question = currentQuestions[currentQuestionIndex];
    document.getElementById('questionText').textContent = question.pertanyaan;
    document.getElementById('questionImage').src = question.gambar;
    
    // Update progress
    document.getElementById('questionNumber').textContent = currentQuestionIndex + 1;
    document.getElementById('totalNumber').textContent = currentQuestions.length;
    
    const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';

    // Clear feedback
    const feedbackBox = document.getElementById('feedbackBox');
    feedbackBox.classList.add('hidden');
    document.getElementById('nextBtn').classList.add('hidden');

    // Display answers
    const answersGrid = document.getElementById('answersGrid');
    answersGrid.innerHTML = '';

    question.jawaban.forEach((answer, index) => {
        const btn = document.createElement('button');
        btn.className = 'btn-answer';
        btn.textContent = answer;
        btn.onclick = () => checkAnswer(index, btn);
        answersGrid.appendChild(btn);
    });
}

function checkAnswer(selectedIndex, buttonElement) {
    const question = currentQuestions[currentQuestionIndex];
    const feedbackBox = document.getElementById('feedbackBox');
    const feedbackText = document.getElementById('feedbackText');
    const allButtons = document.querySelectorAll('.btn-answer');

    if (selectedIndex === question.jawabanBenar) {
        score++;
        feedbackText.innerHTML = '<span class="emoji-feedback">✅</span> Benar! Bagus sekali!';
        feedbackBox.className = 'feedback-box correct';
        buttonElement.classList.add('correct');
    } else {
        const correctAnswer = question.jawaban[question.jawabanBenar];
        feedbackText.innerHTML = `<span class="emoji-feedback">❌</span> Salah! Jawaban yang benar adalah: <strong>${correctAnswer}</strong>`;
        feedbackBox.className = 'feedback-box incorrect';
        buttonElement.classList.add('incorrect');
    }

    allButtons.forEach(btn => btn.disabled = true);
    feedbackBox.classList.remove('hidden');
    document.getElementById('nextBtn').classList.remove('hidden');
}

function nextQuestion() {
    currentQuestionIndex++;
    displayQuestion();
}

function showResult() {
    const totalQuestions = currentQuestions.length;
    document.getElementById('finalScore').textContent = score;
    document.getElementById('totalQuestions').textContent = totalQuestions;

    let message = '';
    let emoji = '';
    const percentage = (score / totalQuestions) * 100;

    if (percentage === 100) {
        emoji = '🌟';
        message = 'Sempurna! Kamu sangat hebat!';
    } else if (percentage >= 80) {
        emoji = '😊';
        message = 'Bagus sekali! Teruskan!';
    } else if (percentage >= 60) {
        emoji = '👍';
        message = 'Cukup bagus! Terus belajar ya!';
    } else {
        emoji = '💪';
        message = 'Jangan menyerah! Coba lagi!';
    }

    document.getElementById('resultMessage').textContent = emoji + ' ' + message;
    showScreen('resultScreen');
}

function goBack() {
    if (currentQuestionIndex > 0 && currentLevel) {
        // Tidak bisa mundur pertanyaan, hanya bisa kembali ke awal
        return;
    } else if (currentLevel) {
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
    currentQuestionIndex = 0;
    score = 0;
    showScreen('ageScreen');
}