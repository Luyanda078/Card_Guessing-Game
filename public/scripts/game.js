// Get all card elements
const cards = document.querySelectorAll('.card');
let flippedCards = [];
let matchedPairs = 0;

// Function to flip all cards face-down
function hideAllCards() {
  cards.forEach(card => card.classList.remove('visible'));
}

// Initially, show all cards for memorization
function showAllCards() {
  cards.forEach(card => card.classList.add('visible'));

  // After 5 seconds, flip all cards face-down
  setTimeout(hideAllCards, 5000);
}

// Start the game by showing all cards for memorization
showAllCards();

// Function to flip a card when clicked
function flipCard(event) {
  const card = event.target;

  if (card.classList.contains('visible') || flippedCards.length === 2) {
    return;
  }

  card.classList.add('visible');
  flippedCards.push(card);

  if (flippedCards.length === 2) {
    checkMatch();
  }
}

// Function to check if two flipped cards match
function checkMatch() {
  const [card1, card2] = flippedCards;

  if (card1.dataset.value === card2.dataset.value) {
    // Cards match; keep them visible
    matchedPairs += 1;
    flippedCards = [];

    // Check if game is won
    if (matchedPairs === cards.length / 2) {
      setTimeout(() => alert("Congratulations! You've matched all pairs!"), 300);
    }
  } else {
    // No match; flip cards back after a short delay
    setTimeout(() => {
      card1.classList.remove('visible');
      card2.classList.remove('visible');
      flippedCards = [];
    }, 1000);
  }
}

// Add event listener to each card
cards.forEach(card => card.addEventListener('click', flipCard));
