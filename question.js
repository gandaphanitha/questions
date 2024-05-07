const questions = document.querySelectorAll(".question");

for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    const btn = question.querySelector(".btn");

    btn.addEventListener("click", function () {
        const text = question.querySelector(".text");
        text.classList.toggle("hidden");
        question.classList.toggle("show-text");
    });
}