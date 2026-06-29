let body = document.getElementById("body");
let button = document.getElementById("ham-btn");

button.addEventListener('click', () => {
    body.classList.toggle("open");
});

for (let i = 1; i <= 6; i++) {
    let question = document.getElementById(`q${i}`);
    question.addEventListener("click", () => {
        question.classList.toggle("open");
    })
}
