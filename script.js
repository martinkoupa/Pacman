const gameBoard = document.getElementById('game-board');
const boardSize = 28;
const wallClass = 'wall';
const dotClass = 'dot';
const pacmanClass = 'pacman';
const ghostClass = 'ghost';

// Reprezentace herní desky
const layout = [
  // (0 - prázdné místo, 1 - zeď, 2 - Pac-Man, 3 - tečka, 4 - duch)
  // Definujte layout, který vám vyhovuje
];

// Vytvořte herní desku
function createGameBoard() {
  for (let i = 0; i < layout.length; i++) {
    const square = document.createElement('div');
    gameBoard.appendChild(square);

    if (layout[i] === 1) {
      square.classList.add(wallClass);
    } else if (layout[i] === 2) {
      square.classList.add(pacmanClass);
    } else if (layout[i] === 3) {
      square.classList.add(dotClass);
    } else if (layout[i] === 4) {
      square.classList.add(ghostClass);
    }
  }
}

createGameBoard();

// Přidejte další kód pro pohyb Pac-Mana a duchů, skóre atd.
