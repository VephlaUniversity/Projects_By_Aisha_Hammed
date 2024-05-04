const words = [
    "apple", "banana", "orange", "strawberry", "watermelon",
    "grape", "kiwi", "pineapple", "peach", "pear"
];

let hiddenWord;
const guessedLetters = new Set();
const wordContainer = document.getElementById('wordContainer');
const messageElement = document.getElementById('message');
const letterInput = document.getElementById('letterInput');

// Select a random word from the 'words' array
const chooseRandomWord = () => {
    return words[Math.floor(Math.random() * words.length)];
};

// Display underscores for each letter in the hidden word
const displayWord = () => {
    wordContainer.innerHTML = '';
    for (const char of hiddenWord) {
        const displayChar = guessedLetters.has(char) ? char : '_';
        const charSpan = document.createElement('span');
        charSpan.textContent = displayChar;
        wordContainer.appendChild(charSpan);
    }
};

// Check if the guessed letter is part of the hidden word
const checkLetter = () => {
    const letter = letterInput.value.toLowerCase().trim();
    
    if (letter.length !== 1 || !letter.match(/[a-z]/)) {
        showMessage('Please enter a valid single letter (a-z)!');
        return;
    }

    if (guessedLetters.has(letter)) {
        showMessage(`You already guessed '${letter}'. Try a different letter!`);
        return;
    }

    guessedLetters.add(letter);
    displayWord();

    if (!hiddenWord.includes(letter)) {
        // Show a popup message for wrong guess
        showPopupMessage(`Oops! '${letter}' is not in the word.`);
    }

    if (isWordComplete()) {
        showMessage('Congratulations! You guessed the word!');
        letterInput.disabled = true;
    }

    // Clear the input field for the next guess
    letterInput.value = '';
};

// Check if all letters in the hidden word have been guessed
const isWordComplete = () => {
    for (const char of hiddenWord) {
        if (!guessedLetters.has(char)) {
            return false;
        }
    }
    return true;
};

const showMessage = (message) => {
    messageElement.textContent = message;
};

// Function to display a popup message
const showPopupMessage = (message) => {
    alert(message); // Display an alert message (popup)
};

// Initialize the game with a random word
window.onload = () => {
    hiddenWord = chooseRandomWord();
    displayWord();

    // Attach event listener to 'Enter' key for the letter input
    letterInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            checkLetter();
        }
    });
};
