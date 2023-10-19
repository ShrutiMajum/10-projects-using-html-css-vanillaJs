const quizData = [
    {
        question: 'How old is Shruti?',
        a: '10',
        b: '20',
        c: '30',
        d: '27',
        correct: 'd'
    },{
        question: 'What is the most used programming language in 2023?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'Javascript',
        correct: 'd'
    },{
        question: 'Who is the president of India?',
        a: 'Rajendra Prasad',
        b: 'Jagdeep Dhankhar',
        c: 'Droupadi Murmu',
        d: 'Narendra Modi',
        correct: 'c'
    },{
        question: 'Which is the most used OTT platform in 2023?',
        a: 'Disney+ Hotstar',
        b: 'Netflix',
        c: 'Amazon Prime',
        d: 'Voot',
        correct: 'a'
    },{
        question: 'Which bank comes under govt sector in India?',
        a: 'HDFC Bank',
        b: 'Axis Bank',
        c: 'ICICI Bank',
        d: 'State Bank of India',
        correct: 'd'
    },{
        question: 'What is the most used UPI app in INDIA?',
        a: 'BHIM App',
        b: 'PayTM',
        c: 'PhonePe',
        d: 'Google Pay',
        correct: 'c'
    },{
        question: 'Most used Food Delivery App in INDIA?',
        a: 'ZOMATO',
        b: 'SWIGGY',
        c: 'DOMINOS',
        d: 'BIRYANI BY KILO',
        correct: 'a'
    },{
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup language',
        b: 'Cascading Stylesheet',
        c: 'Jason Object Notation',
        d: 'Hypertext Motorboats Lamborginis',
        correct: 'a'
    },{
        question: 'Which year JS was launched?',
        a: '1996',
        b: '1995',
        c: '1997',
        d: 'None of the above',
        correct: 'b'
    }
]
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");

const questionEl = document.getElementById("question");

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;


loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {
    const answersEls = document.querySelectorAll('.answer');

    let answer = undefined;

    answersEls.forEach((answerEl) => {
        // console.log(answer.checked);
        if(answerEl.checked){
            return answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    // check to see the answer

    const answer = getSelected();
    // console.log(answer);

    if(answer) {
        if (answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }
        else{
            // TODO: Show results
            // alert('You have completed ');
            quiz.innerHTML =  `<h2> You have answered correctly at ${score}/${quizData.length} questions.</h2> <button onclick="location.reload()">Reload</button>`;
            
        }
    }

    

    loadQuiz();

})