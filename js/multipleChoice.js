import { auth, database } from './firebaseConfig.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { ref, set, push } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

let userId = null;

// mendapatkan userId saat pengguna login
onAuthStateChanged(auth, (user) => {
    if (user) {
        userId = user.uid;
        console.log("User ID:", userId);
    } else {
        alert("Please log in to continue.");
        window.location.href = "login.html";
    }
});

// fungsi untuk menyimpan progres kuis
function saveQuizProgress(questionIndex, score) {
    if (userId) {
        set(ref(database, 'quizProgress/' + userId), {
            currentQuestion: questionIndex,
            score: score,
            timestamp: new Date().toISOString()
        });
    } else {
        console.warn("User ID tidak ditemukan.");
    }
}

// fungsi untuk menyimpan hasil akhir kuis
function saveFinalResult(score) {
    if (userId) {
        push(ref(database, 'quizResults/' + userId), {
            finalScore: score,
            totalQuestions: questionBank.length,
            timestamp: new Date().toISOString()
        });
    } else {
        console.warn("User ID tidak ditemukan.");
    }
}

var questionBank = [
    {
        question : 'Berapakah limit dari (3x² - 5x + 2)/(x² - x - 6) saat x mendekati 3?',
        option : ['1', '2', 'Tak Terhingga', 'Tidak Terdefinisi'],
        answer : '1'
    },
    {
        question : 'Jika f(x) = (2x³ - 7x² + 5x - 1), berapakah limit f(x) saat x mendekati Tak Hingga?',
        option : ['Tak Hingga', '-Tak Hingga', '0', '2'],
        answer : 'Tak Hingga'
    },
    {
        question : 'Berapakah limit dari (x² - 4)/(x - 2) saat x mendekati 2?',
        option : ['2', '4', 'Tak Terhingga', 'Tidak Terdefinisi'],
        answer : '4'
    },
    {
        question : 'Berapakah limit dari (e^x)/(x²) saat x mendekati Tak Hingga?',
        option : ['0', 'Tak Hingga', '1', 'Tidak Terdefinisi'],
        answer : 'Tak Hingga'
    },
    {
        question : 'Jika limit dari f(x) = (ln(x))/(x²) saat x mendekati Tak Hingga adalah?',
        option : ['0', '1', 'Tak Hingga', 'Tidak Terdefinisi'],
        answer : '0'
    },
    {
        question : 'Berapakah limit dari (x² - x)/(x³ - 2x² + 1) saat x mendekati 1?',
        option : ['1/3', '0', 'Tidak Terdefinisi', 'Tak Hingga'],
        answer : '1/3'
    },
    {
        question : 'Limit dari (sin(2x))/(x) saat x mendekati 0 adalah?',
        option : ['0', '2', 'Tak Hingga', 'Tidak Terdefinisi'],
        answer : '2'
    },
    {
        question : 'Berapakah limit dari (1 - cos(x))/x² saat x mendekati 0?',
        option : ['1/2', '1', '0', 'Tak Hingga'],
        answer : '1/2'
    },
    {
        question : 'Limit dari ((x³ - 8)/(x - 2)) saat x mendekati 2 adalah?',
        option : ['8', '12', '4', 'Tidak Terdefinisi'],
        answer : '12'
    },
    {
        question : 'Jika f(x) = (2x + 1)/(x² - 1), berapakah limit f(x) saat x mendekati 1 dari kanan?',
        option : ['Tak Hingga', '-Tak Hingga', 'Tidak Terdefinisi', '0'],
        answer : 'Tak Hingga'
    },
    {
        question : 'Berapakah limit dari (tan(x))/(x) saat x mendekati 0?',
        option : ['1', '0', 'Tak Hingga', 'Tidak Terdefinisi'],
        answer : '1'
    },
    {
        question : 'Limit dari (x³ - 3x² + x - 1)/(x - 1) saat x mendekati 1 adalah?',
        option : ['1', '0', '2', 'Tidak Terdefinisi'],
        answer : '2'
    },
    {
        question : 'Berapakah limit dari (3x² - x)/(2x² - 5x) saat x mendekati Tak Hingga?',
        option : ['3/2', '0', 'Tak Hingga', 'Tidak Terdefinisi'],
        answer : '3/2'
    },
    {
        question : 'Jika f(x) = (x² - 9)/(x - 3), berapakah limit f(x) saat x mendekati 3?',
        option : ['0', '3', '6', 'Tidak Terdefinisi'],
        answer : '6'
    },
    {
        question : 'Limit dari (x² - 5x + 6)/(x² - x - 6) saat x mendekati 2 adalah?',
        option : ['1', 'Tak Terhingga', '0', 'Tidak Terdefinisi'],
        answer : '1'
    },
    {
        question : 'Berapakah limit dari sqrt(x+1) - sqrt(x) saat x mendekati Tak Hingga?',
        option : ['0', '1', '2', 'Tak Hingga'],
        answer : '0'
    },
    {
        question : 'Limit dari (sin(3x))/(x) saat x mendekati 0 adalah?',
        option : ['3', '0', '1', 'Tidak Terdefinisi'],
        answer : '3'
    },
    {
        question : 'Berapakah limit dari ln(x)/(x) saat x mendekati Tak Hingga?',
        option : ['0', '1', 'Tak Hingga', 'Tidak Terdefinisi'],
        answer : '0'
    },
    {
        question : 'Limit dari (x - sqrt(x² + 1)) saat x mendekati Tak Hingga adalah?',
        option : ['0', '1', '-1', 'Tidak Terdefinisi'],
        answer : '-1'
    },
    {
        question : 'Berapakah limit dari (x^4 - 16)/(x - 2) saat x mendekati 2?',
        option : ['48', '16', '64', 'Tidak Terdefinisi'],
        answer : '48'
    },
    {
        question : 'Limit dari (sin(x))/(x) saat x mendekati 0 adalah?',
        option : ['1', '0', 'Tidak Terdefinisi', 'Tak Hingga'],
        answer : '1'
    },
    {
        question : 'Berapakah limit dari e^(-x²) saat x mendekati Tak Hingga?',
        option : ['0', '1', 'Tak Hingga', 'Tidak Terdefinisi'],
        answer : '0'
    },
    {
        question : 'Limit dari (ln(x) - ln(x - 1)) saat x mendekati 1 adalah?',
        option : ['Tak Hingga', '0', '1', '-1'],
        answer : '1'
    },
    {
        question : 'Jika f(x) = (x² + 4x + 4)/(x + 2), berapakah limit f(x) saat x mendekati -2?',
        option : ['-4', '0', 'Tidak Terdefinisi', '2'],
        answer : 'Tidak Terdefinisi'
    },
    {
        question : 'Berapakah limit dari (x³ + 3x² + 3x + 1)/(x² + 1) saat x mendekati Tak Hingga?',
        option : ['Tak Hingga', '1', '3', 'Tidak Terdefinisi'],
        answer : 'Tak Hingga'
    }
];

document.addEventListener('DOMContentLoaded', function() {
    var question = document.getElementById('question');
    var quizContainer = document.getElementById('quiz-container');
    var scoreboard = document.getElementById('scoreboard');
    var option0 = document.getElementById('option0');
    var option1 = document.getElementById('option1');
    var option2 = document.getElementById('option2');
    var option3 = document.getElementById('option3');
    var next = document.querySelector('.next');
    var points = document.getElementById('score');
    var span = document.querySelectorAll('span');
    var i = 0;
    var score = 0;

    // function to display questions
    function displayQuestion() {
        for (var a = 0; a < span.length; a++) {
            span[a].style.background = 'none';
        }
        question.innerHTML = 'Q.' + (i + 1) + ' ' + questionBank[i].question;
        option0.innerHTML = questionBank[i].option[0];
        option1.innerHTML = questionBank[i].option[1];
        option2.innerHTML = questionBank[i].option[2];
        option3.innerHTML = questionBank[i].option[3];
        stat.innerHTML = "Question " + (i + 1) + ' of ' + questionBank.length;
    }

    // function to calculate scores
    function calcScore(e) {
        if (e.innerHTML === questionBank[i].answer && score < questionBank.length) {
            score = score + 1;
            document.getElementById(e.id).style.background = 'limegreen';
        } else {
            document.getElementById(e.id).style.background = 'tomato';
        }
        setTimeout(nextQuestion, 300);
    }

    // function to display next question
    function nextQuestion() {
        if (!userId) {
            console.warn("User ID tidak ditemukan. Pastikan pengguna telah login.");
            return;
        }

        if (i < questionBank.length - 1) {
            saveQuizProgress(i, score); 
            
            i = i + 1;
            displayQuestion();
        } else {
            points.innerHTML = score + '/' + questionBank.length;
            quizContainer.style.display = 'none';
            scoreboard.style.display = 'block';

            saveFinalResult(score);
        }
    }

    // click events to next button
    next.addEventListener('click', nextQuestion);

    // Back to Quiz button event
    function backToQuiz() {
        location.reload();
    }

    // function to check Answers
    function checkAnswer() {
        var answerBank = document.getElementById('answerBank');
        var answers = document.getElementById('answers');
        answerBank.style.display = 'block';
        scoreboard.style.display = 'none';
        for (var a = 0; a < questionBank.length; a++) {
            var list = document.createElement('li');
            list.innerHTML = questionBank[a].answer;
            answers.appendChild(list);
        }
    }

    displayQuestion();
    window.calcScore = calcScore;
    window.backToQuiz = backToQuiz;
    window.checkAnswer = checkAnswer;
});
