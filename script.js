const heading = document.getElementById("main-heading");
const button = document.getElementById("action-btn");

const messages = [
    "Let the Battle Begin! ⚔️",
    "Prompts Loaded & Ready! 🚀",
    "May the Best Prompt Win! 🏆",
    "Welcome to PromptWars"
];

let currentIndex = -1;

button.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % messages.length;
    heading.textContent = messages[currentIndex];
});
