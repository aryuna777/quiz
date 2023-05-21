const quizData = [
   {
    question: "Чему равно число π?",
        a: "3,54",
        b: "4,56",
        c: "3,14",
        correct: "c",
    },
    {
    question: "Какое расстояние от земли до луны?",
        a: "734 890 км",
        b: "384 400 км",
        c: "Как от Санкт-Петербурга до Банкока",
        correct: "b",
    },
    {
    question: "В каком году внедрили Христианство на Руси?",
        a: "988",
        b: "1905",
        c: "1000",
        correct: "a",
    },
    {
    question: "Во сколько лет погиб Пушкин?",
        a: "27",
        b: "37",
        c: "31",
        correct: "b",
    },
    {
    question: "Кто из представленных, специалист по мышлению и доктор медицинских наук?",
        a: "Стивен Хокинг",
        b: "Роберт Хокинг",
        c: "Дэвид Хокинс",
        correct: "c",
    },
];

const quiz = document.getElementById('quiz');
const answerElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const submit = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
deselectAnswers();

const currentQuizData = quizData[currentQuiz];
questionElement.innerText = currentQuizData.question;
a_text.innerText = currentQuizData.a;
b_text.innerText = currentQuizData.b;
c_text.innerText = currentQuizData.c;
}

function deselectAnswers(){
answerElements.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
let answer;

answerElements.forEach(answerEl => {
if(answerEl.checked){
answer = answerEl.id;
}
});

return answer;
}

submit.addEventListener('click', () => {
const answer = getSelected();

if(answer){
    if(answer === quizData[currentQuiz].correct){
    score++; }

currentQuiz++;
if(currentQuiz < quizData.length){
loadQuiz();
        }

else{
    quiz.innerHTML = `<h2> Вы правильно ответили на ${score}/${quizData.length} вопросов</h2>
    <button onclick="location.reload()">Попробовать еще раз</button>
    `;
    }
    }
});