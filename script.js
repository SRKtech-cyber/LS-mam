document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz');

    const questions = [
        {
            lesson: "What is the derivative of 2x^3 with respect to x?",
            options: ["6x^2", "3x^2", "8x^3"],
            answer: "6x^2"
        },
        {
            lesson: "Which of the following represents the Pythagorean Theorem?",
            options: ["a^2 + b^2 = c^2", "a^2 - b^2 = c^2", "a^2 + b = c^2"],
            answer: "a^2 + b^2 = c^2"
        },
        {
            lesson: "What is the solution to the quadratic equation x^2 - 4x + 4 = 0?",
            options: ["x = 2", "x = -2", "x = 4"],
            answer: "x = 2"
        }
    ];

    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `
            <p class="question-text">${q.lesson}</p>
            ${q.options.map(option => `
                <button onclick="checkAnswer('${q.answer}', '${option}')">${option}</button>
            `).join('')}
        `;
        quizContainer.appendChild(questionDiv);
    });
});

function checkAnswer(correctAnswer, selectedAnswer) {
    if (correctAnswer === selectedAnswer) {
        alert('Correct! Well done.');
    } else {
        alert('Try again!');
    }
}
