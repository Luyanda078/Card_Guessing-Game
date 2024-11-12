const express = require('express');
const path = require('path');
const app = express();

// Set up EJS and static file serving
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Generate a deck of cards (18 pairs, 36 cards in total)
function generateCards() {
    const symbols = ['🍎', '🍌', '🍒', '🍉', '🍇', '🍊', '🍍', '🍓', '🍑', '🥭', '🍈', '🍍', '🍉', '🍒', '🍎', '🍌', '🍊', '🍇'];
    const shuffled = symbols.concat(symbols).sort(() => Math.random() - 0.5); // Shuffle the cards
    return shuffled.map(symbol => ({ symbol, revealed: false }));
}

// Route to serve the main game page
app.get('/', (req, res) => {
    res.render('index', { cards: generateCards() });
});

// Start the server
app.listen(3000, () => console.log('Server running on http://localhost:3000'));
