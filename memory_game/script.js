// Array com os pares de símbolos para as cartas
const symbols = ["🍎", "🍌", "🍇", "🍉", "🍒", "🍍", "🥝", "🍑"];
const cards = [...symbols, ...symbols]; // Duplicando o array para ter dois de cada símbolo

let flippedCards = [];
let matchedCards = 0;

// Função para embaralhar as cartas
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffle(cards); // Embaralha as cartas antes de exibir

// Seleciona o container do jogo
const gameContainer = document.getElementById('gameContainer');

// Função para criar as cartas
function createCards() {
    cards.forEach((symbol) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.symbol = symbol;
        card.addEventListener('click', flipCard);
        gameContainer.appendChild(card);
    });
}

// Função para virar uma carta
function flipCard(event) {
    const card = event.target;

    if (flippedCards.length < 2 && !card.classList.contains('flipped')) {
        card.classList.add('flipped');
        card.textContent = card.dataset.symbol;
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            checkForMatch();
        }
    }
}

// Função para checar se há correspondência entre as cartas
function checkForMatch() {
    const [card1, card2] = flippedCards;

    if (card1.dataset.symbol === card2.dataset.symbol) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedCards += 2;
        flippedCards = [];

        // Verifica se o jogo acabou
        if (matchedCards === cards.length) {
            setTimeout(() => alert('Parabéns! Você venceu!'), 500);
        }
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            card1.textContent = '';
            card2.textContent = '';
            flippedCards = [];
        }, 1000);
    }
}

// Inicia o jogo criando as cartas
createCards();
