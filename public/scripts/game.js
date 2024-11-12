let flippedCards = [];
let matchedCards = 0;
const cards = document.querySelectorAll('.card');
const resetButton = document.querySelector('.reset-btn');

// Handle card click event
cards.forEach(card => {
    card.addEventListener('click', () => {
        if (flippedCards.length < 2 && !card.classList.contains('revealed')) {
            card.classList.add('revealed');
            flippedCards.push(card);

            if (flippedCards.length === 2) {
                checkForMatch();
            }
        }
    });
});

// Check if the two flipped cards match
function checkForMatch() {
    const [card1, card2] = flippedCards;

    if (card1.querySelector('.card-back').textContent === card2.querySelector('.card-back').textContent) {
        matchedCards += 2;
        flippedCards = [];

        if (matchedCards === cards.length) {
            setTimeout(() => alert('Congratulations, you won!'), 500);
        }
    } else {
        setTimeout(() => {
            card1.classList.remove('revealed');
            card2.classList.remove('revealed');
            flippedCards = [];
        }, 1000);
    }
}

// Reset the game
resetButton.addEventListener('click', () => {
    cards.forEach(card => {
        card.classList.remove('revealed');
    });

    matchedCards = 0;
    flippedCards = [];
    shuffleCards();
});

// Shuffle cards function
function shuffleCards() {
    const shuffledCards = Array.from(cards);
    shuffledCards.sort(() => Math.random() - 0.5);
    shuffledCards.forEach((card, index) => {
        card.style.order = index;
    });
}

// Initial shuffle when the game loads
shuffleCards();
