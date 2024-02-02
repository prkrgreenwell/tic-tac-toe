import { useState } from "react";
import "../styles/board.css";
import checkWinner from "../util/checkWinner";

type squareTypes = (null | string)[];

function Square({
  value,
  onSquareClick,
}: {
  value: null | string;
  onSquareClick: () => void;
}) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState<squareTypes>(Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  const [endGame, setEndGame] = useState(false);

  function handleClick(i: number) {
    if (!endGame) {
      const nextSquares = squares.slice();
      if (nextSquares[i]) return;
      nextSquares[i] = player;
      setSquares(nextSquares);
      if (checkWinner(nextSquares)) {
        setEndGame(true);
        return;
      } else if (nextSquares.every((square) => square !== null)) {
        setPlayer("tie");
        setEndGame(true);
        return;
      }
      setPlayer(player === "X" ? "O" : "X");
    }
  }

  function newGame() {
    setSquares(Array(9).fill(null));
    setPlayer("X");
    setEndGame(false);
  }

  return (
    <>
      {endGame && (
        <div className="banner">
          <h2>{player === "tie" ? "Tie Game" : `${player} Wins!`}</h2>
          <button className="newGame" onClick={newGame}>
            New Game?
          </button>
        </div>
      )}
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
