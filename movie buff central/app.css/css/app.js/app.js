// Quotes for Quote of the Day
const quotes = [
    "I am Iron Man.",
    "May the Force be with you.",
    "You're a wizard, Harry!",
    "With great power comes great responsibility.",
    "I could do this all day."
];

// Function to display a random quote
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote-display').textContent = quotes[randomIndex];
}

// Trivia Quiz answer check
function checkAnswer(element, result) {
    if (result === 'correct') {
        element.style.backgroundColor = 'green';
        alert('Correct!');
    } else {
        element.style.backgroundColor = 'red';
        alert('Wrong!');
    }
}