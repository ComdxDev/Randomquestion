let questions = [];
let currentQuestionIndex = 0;

// Fetch questions from JSON file
fetch('questions.json')
    .then(response => response.json())
    .then(data => {
        questions = data;
        displayQuestion();
    });

function displayQuestion() {
    // Get random question
    currentQuestionIndex = Math.floor(Math.random() * questions.length);
    const question = questions[currentQuestionIndex];

    // Display question text
    document.getElementById('question-text').innerText = question.question;

    // Display options
    const optionsButtons = document.getElementsByClassName('option-button');
    question.options.forEach((option, index) => {
        optionsButtons[index].innerText = option;
        optionsButtons[index].className = 'option-button'; // Reset button classes
    });
}

function checkAnswer(button) {
    const question = questions[currentQuestionIndex];
    if (button.innerText === question.answer) {
        button.classList.add('correct');
        console.log("ตอบถูกไปข้อถัดไป");
        setTimeout(() => {
            displayQuestion();
        }, 1000);
    } else {
        button.classList.add('incorrect');
        console.log("ตอบผิด");
        // alert('ตอบผิดจร้า');
        setTimeout(() => {
            button.classList.remove('incorrect');
        }, 1000);
    }
}
