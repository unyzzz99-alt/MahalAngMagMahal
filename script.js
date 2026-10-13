const guessForm = document.querySelector("#guess-form");
const guessInput = document.querySelector("#guess-input");
const attemptCount = document.querySelector("#attempt-count");
const feedback = document.querySelector("#feedback");
const restartButton = document.querySelector("#restart-button");
const sanaol = document.querySelector("#sanaol");
const congratulations = document.querySelector("#congratulations");
const errorMessage = document.querySelector("#error-message");
const guessButton = guessForm.querySelector("button");

let secretNumber;
let attempts;
let finished;

function clearError() {
  errorMessage.textContent = "";
  errorMessage.hidden = true;
  guessInput.removeAttribute("aria-invalid");
}

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.hidden = false;
  guessInput.setAttribute("aria-invalid", "true");
}

function startGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  finished = false;
  attemptCount.textContent = "0";
  feedback.textContent = "Make your first guess. You’ve got this! ✨";
  feedback.className = "feedback";
  sanaol.hidden = true;
  congratulations.hidden = true;
  restartButton.hidden = true;
  guessInput.disabled = false;
  guessButton.disabled = false;
  guessInput.value = "";
  clearError();
}

guessInput.addEventListener("input", clearError);

guessForm.addEventListener("submit", (event) => {
  event.preventDefault();
  clearError();

  const value = guessInput.value.trim();
  if (value === "") {
    showError("Oops! Enter a number before you guess.");
    guessInput.focus();
    return;
  }

  const guess = Number(value);
  if (!Number.isInteger(guess) || guess < 1 || guess > 100) {
    showError("Choose a whole number from 1 to 100.");
    guessInput.focus();
    return;
  }

  if (finished) {
    showError("This game is finished. Start a new game to play again.");
    return;
  }

  attempts += 1;
  attemptCount.textContent = String(attempts);
  restartButton.hidden = false;

  if (guess > secretNumber) {
    feedback.textContent = "Too high! Try a smaller number. ⬇️";
    feedback.className = "feedback too-high";
    sanaol.hidden = false;
  } else if (guess < secretNumber) {
    feedback.textContent = "Too low! Try a bigger number. ⬆️";
    feedback.className = "feedback too-low";
    sanaol.hidden = false;
  } else {
    finished = true;
    feedback.textContent = "You found my secret number! 🎉";
    feedback.className = "feedback correct";
    congratulations.textContent = `You got it in ${attempts} ${attempts === 1 ? "guess" : "guesses"}! Amazing! 🥳`;
    congratulations.hidden = false;
    guessInput.disabled = true;
    guessButton.disabled = true;
  }

  if (!finished) {
    guessInput.value = "";
    guessInput.focus();
  } else {
    restartButton.focus();
  }
});

restartButton.addEventListener("click", startGame);

startGame();
