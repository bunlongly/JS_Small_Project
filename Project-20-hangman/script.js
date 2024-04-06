const wordEl = document.getElementById("word");
const wrongLettersEl = document.getElementById("wrong-letters");
const playAgainBtn = document.getElementById("play-button");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");

const figureParts = document.querySelectorAll(".figure-part");
// ## Hangman Game

// Select a letter to figure out a hidden word in a set amount of chances

// ## Project Specifications

const wordDisplay = ["programming", "icon", "gamming", "bunlong"];

const selectedWord =
  wordDisplay[Math.floor(Math.random() * wordDisplay.length)];
console.log(selectedWord);
const correctletters = [];
const wrongletters = [];
// - Display hangman pole and figure using SVG

function displayWord() {
  wordEl.innerHTML = `
  ${selectedWord
    .split("")
    .map(
      (letter) =>
        `
     <span class="letter">
     ${correctletters.includes(letter) ? letter : ""}
   </span>
    `
    )
    .join("")}
    `;
  // const innerWord = wordEl.innerText.replace(/\n/g, "");

  // if (innerWord === selectedWord) {
  //   finalMessage.innerText = "Congratulations! You won! 😃";
  //   popup.style.display = "flex";
  // }
}

function updateWrongLettersEl() {
  wrongLettersEl.innerHTML = `
  ${wrongletters.length > 0 ? "<p>The Wrong Words Here</p>" : ""}
  ${wrongletters.map((letter) => `<span>${letter}</span>`)}

    `;
}

window.addEventListener("keydown", (e) => {
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    const letters = e.key;

    if (selectedWord.includes(letters)) 
    {
      if (!correctletters.includes(letters)) {
        correctletters.push(letters);
        displayWord();
      }
    }
  }
});

displayWord();
// - Generate a random word
// - Display word in UI with correct letters
// - Display wrong letters
// - Show notification when select a letter twice
// - Show popup on win or lose
// - Play again button to reset game
