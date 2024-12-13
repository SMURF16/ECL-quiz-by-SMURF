// script.js
document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Correct answers for each question
    const answers = {
        q1: "b",  // Correct answer for question 1
        q2: "d",  // Correct answer for question 2
        q3: "b",  // Correct answer for question 3
        q4: "b",  // Correct answer for question 4
        q5: "d",  // Correct answer for question 5
        q6: "c",  // Correct answer for question 6
        q7: "a",  // Correct answer for question 7
        q8: "c",  // Correct answer for question 8
        q9: "a",  // Correct answer for question 9
        q10: "a", // Correct answer for question 10
    };

    let score = 0;

    // Loop through all questions (10 questions)
    for (let i = 1; i <= 10; i++) {
        const question = document.querySelector(`input[name="q${i}"]:checked`);
        if (question && question.value === answers[`q${i}`]) {
            score++;
        }
    }

    // Show the result
    document.getElementById("quizForm").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("score").textContent = `You scored ${score} out of 10`;
});