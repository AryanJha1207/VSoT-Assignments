let coinCount = 0;
let starCount = 0;
let timePassed = 0;
const coinDisplay = document.querySelector('.count');
const starDisplay = document.querySelector('.star-Count');
const timeDisplay = document.querySelector('.time-passed');
const marioText = document.querySelector('h2');

// Buttons
const addButton = document.querySelector('.add');
const subtractButton = document.querySelector('.substract');
const superMarioButton = document.querySelector('.superMario');
const resetButton = document.querySelector('.reset');

// Add coin
addButton.addEventListener('click', () => {
    coinCount++;
    coinDisplay.textContent = coinCount;
    if (coinCount % 10 === 0) {
        starCount++;
        starDisplay.textContent = starCount;
    }
});

// Subtract coin
subtractButton.addEventListener('click', () => {
    if (coinCount > 0) {
        coinCount--;
        coinDisplay.textContent = coinCount;
    }
});

// Super Mario
superMarioButton.addEventListener('click', () => {
    marioText.textContent = `🍄 Super Mario`;
});

// Reset
resetButton.addEventListener('click', () => {
    coinCount = 0;
    starCount = 0;
    coinDisplay.textContent = coinCount;
    starDisplay.textContent = starCount;
    marioText.textContent = 'Regular Mario';
});

// Time Passed
setInterval(() => {
    timePassed++;
    timeDisplay.textContent = timePassed;
}, 1000);