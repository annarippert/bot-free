document.addEventListener("DOMContentLoaded", function () {
    const toggleQuestion1 = document.querySelector(".question-1 input[type='checkbox']");
    const question2 = document.querySelector(".question-2");

    toggleQuestion1.addEventListener("change", function () {
        question2.style.display = this.checked ? "block" : "none";
    });

    // Hide question 2 initially if the toggle is off
    question2.style.display = toggleQuestion1.checked ? "block" : "none";
});