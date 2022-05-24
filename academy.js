// Make your changes to store and update game state in this file
let board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
let gameOver = false;
let noughtTurn = true;

// Take the row and column number between 0 and 2
// (inclusive) and update the game state.
function takeTurn(row, column) {
  if (!gameOver) {
    console.log("takeTurn was called with row: " + row + ", column:" + column);
    console.log(`takeTurn was called with row: ${row}, column: ${column}`);
    if (board[row][column] === null && noughtTurn === true) {
      board[row][column] = "nought";
      noughtTurn = false;
      console.log(board);
    } else if (board[row][column] === null && !noughtTurn) {
      board[row][column] = "cross";
      noughtTurn = true;
      console.log(board);
    } else {
      alert("This space is taken");
      console.log(board);
    }
  }
}
//winning combinations

// Return either "noughts", "crosses" or "nobody" if the game is over.
// Otherwise return null to continue playing.
function checkWinner() {
  console.log("checkWinner was called");
  const horizontalWinner = checkHorizontalWinner();
  const verticalWinner = checkVerticalWinner();
  const diagonalWinnerOne = checkDiagonalWinnerOne();
  const diagonalWinnerTwo = checkDiagonalWinnerTwo();

  if (horizontalWinner) {
    return horizontalWinner;
  } else if (verticalWinner) {
    return verticalWinner;
  } else if (diagonalWinnerOne) {
    return diagonalWinnerOne;
  } else if (diagonalWinnerTwo) {
    return diagonalWinnerTwo;
  }
  // else {
  //     return "nobody"
  // }

  //return null
  let drawChecker = 0;
  for (row in board) {
    for (col in board[row]) {
      if (board[row][col] != null) {
        drawChecker++;
        console.log(drawChecker);
      }
    }
    if (drawChecker === 9) {
      gameOver = true;
      return "nobody";
    }
  }
}

const checkHorizontalWinner = () => {
  for (row = 0; row < 3; row++) {
    console.log("check row equals ", checkMatchingRow(row));
    if (checkMatchingRow(row)) {
      if (noughtTurn === false) {
        gameOver = true;
        return "noughts";
      } else {
        gameOver = true;
        return "crosses";
      }
    }
  }
};

const checkMatchingRow = (row) => {
  const firstColumn = board[row][0];
  const secondColumn = board[row][1];
  const thirdColumn = board[row][2];

  return (
    firstColumn === secondColumn &&
    firstColumn === thirdColumn &&
    firstColumn !== null
  );
};
const checkVerticalWinner = () => {
  for (col = 0; col < 3; col++) {
    console.log(col);
    console.log("check col equals ", checkMatchingColumn(col));
    if (checkMatchingColumn(col)) {
      if (noughtTurn === false) {
        gameOver = true;
        return "noughts";
      } else {
        gameOver = true;
        return "crosses";
      }
    }
  }
};

const checkMatchingColumn = (col) => {
  const firstRow = board[0][col];
  const secondRow = board[1][col];
  const thirdRow = board[2][col];

  return firstRow === secondRow && firstRow === thirdRow && thirdRow != null;
};
//return null;
const checkDiagonalWinnerOne = () => {
  const firstDiagonal = board[0][0];
  const secondDiagonal = board[1][1];
  const thirdDiagonal = board[2][2];
  console.log("00 equals ", firstDiagonal, secondDiagonal, thirdDiagonal);

  if (
    firstDiagonal != "" &&
    firstDiagonal == "nought" &&
    firstDiagonal == secondDiagonal &&
    firstDiagonal == thirdDiagonal
  ) {
    console.log("there is a winner");
    gameOver = true;
    return "noughts";
  } else if (
    firstDiagonal != "" &&
    firstDiagonal == "cross" &&
    firstDiagonal == secondDiagonal &&
    firstDiagonal == thirdDiagonal
  ) {
    console.log("there is a winner");
    gameOver = true;
    return "crosses";
  }
};

const checkDiagonalWinnerTwo = () => {
  const firstDiagonalTwo = board[0][2];
  const secondDiagonalTwo = board[1][1];
  const thirdDiagonalTwo = board[2][0];
  console.log(
    "20 equals ",
    firstDiagonalTwo,
    secondDiagonalTwo,
    thirdDiagonalTwo
  );

  if (
    firstDiagonalTwo != "" &&
    firstDiagonalTwo == "nought" &&
    firstDiagonalTwo == secondDiagonalTwo &&
    firstDiagonalTwo == thirdDiagonalTwo
  ) {
    console.log("there is a winner ");
    gameOver = true;
    return "noughts";
  } else if (
    firstDiagonalTwo != "" &&
    firstDiagonalTwo == "cross" &&
    firstDiagonalTwo == secondDiagonalTwo &&
    firstDiagonalTwo == thirdDiagonalTwo
  ) {
    console.log("there is a winner");
    gameOver = true;
    return "crosses";
  }
};

// Set the game state back to its original state to play another game.
function resetGame() {
  board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  console.log("resetGame was called");
  console.log(board);
  gameOver = false;
  noughtTurn = true;
  console.log("Noughts Turn");
}

// Return the current board state with either a "nought" or a "cross" in
// each position. Put a null in a position that hasn't been played yet.
//innerhtml?
function getBoard() {
  console.log("getBoard was called");
  return board;
}

if (typeof exports === "object") {
  console.log("Running in Node");
  // Node. Does not work with strict CommonJS, but only CommonJS-like
  // environments that support module.exports, like Node.
  module.exports = {
    takeTurn,
    checkWinner,
    resetGame,
    getBoard,
  };
} else {
  console.log("Running in Browser");
}
