const questions = [
    "What is the difference between let, const and var in JavaScript?",
    "Explain the concept of OOP.",
    "What is a primary key in a database?",
    "What is the difference between stack and queue?",
    "What is REST API?"
];

let currentQuestion = 0;

const questionBox = document.querySelector(".question-box");
const nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", () => {

    currentQuestion++;

    if(currentQuestion < questions.length){

        questionBox.textContent = questions[currentQuestion];

        document.getElementById("answer").value = "";

    } else {

        window.location.href = "results.html";

    }

});