document.addEventListener("DOMContentLoaded", () => {
 const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        answer: "Pacific"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const li = document.createElement("li");
        li.textContent = option;
        li.addEventListener("click", () => checkAnswer(option, li));
        optionsElement.appendChild(li);
    });

    nextButton.classList.add("hidden");
}

function checkAnswer(selectedAnswer, li) {
    const correctAnswer = quizData[currentQuestionIndex].answer;

    if (selectedAnswer === correctAnswer) {
        li.style.backgroundColor = "#28a745"; // Green for correct answer
        score++; // Increase score for correct answer
    } else {
        li.style.backgroundColor = "#dc3545"; // Red for wrong answer
    }

    // Disable further clicks
    Array.from(optionsElement.children).forEach(option => {
        option.style.pointerEvents = "none";
    });

    nextButton.classList.remove("hidden");
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        // Display final score
        questionElement.textContent = `Quiz Completed! 🎉 Your Score: ${score}/${quizData.length}`;
        optionsElement.innerHTML = "";
        nextButton.classList.add("hidden");
    }
});

loadQuestion();
});