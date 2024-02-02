type squareTypes = (null | string)[];

const checkRows = (squares: squareTypes) => {
  for (let i = 0; i < 9; i += 3) {
    if (
      squares[i] === squares[i + 1] &&
      squares[i] === squares[i + 2] &&
      squares[i] !== null
    )
      return true;
  }
  return false;
};

const checkCols = (squares: squareTypes) => {
  for (let i = 0; i < 3; i++) {
    if (
      squares[i] === squares[i + 3] &&
      squares[i] === squares[i + 6] &&
      squares[i] !== null
    )
      return true;
  }
  return false;
};

const checkDiags = (squares: squareTypes) => {
  return (
    ((squares[0] === squares[4] && squares[0] === squares[8]) ||
      (squares[2] === squares[4] && squares[2] === squares[6])) &&
    squares[4] !== null
  );
};

export default function checkWinner(squares: squareTypes) {
  return checkRows(squares) || checkCols(squares) || checkDiags(squares);
}
