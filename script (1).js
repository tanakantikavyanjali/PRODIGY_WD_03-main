let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const checkWin = () => {
  for (let condition of winningConditions) {
    const [a, b, c] = condition;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      return gameBoard[a];
    }
  }
  return null;
};

const checkDraw = () => {
  return gameBoard.every(cell => cell !== '');
};

const handleMove = (index) => {
  if (!gameActive || gameBoard[index] !== '') return;
  gameBoard[index] = currentPlayer;
  document.getElementById(`cell-${index}`).innerText = currentPlayer;
  const winner = checkWin();
  if (winner) {
    document.getElementById('message').innerText = `${winner} wins!`;
    gameActive = false;
  } else if (checkDraw()) {
    document.getElementById('message').innerText = "It's a draw!";
    gameActive = false;
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
};

const resetGame = () => {
  currentPlayer = 'X';
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  document.getElementById('message').innerText = '';
  document.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
};
