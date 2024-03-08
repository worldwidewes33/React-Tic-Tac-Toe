import { useState } from "react";
import PropTypes from "prop-types";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onSquareClick: PropTypes.func,
};

function Board({ squares, xIsNext, onPlay }) {
  const winner = calculateWinner(squares);

  let status;

  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Player ${xIsNext ? "X" : "O"} is next.`;
  }

  function handleClick(index) {
    if (squares[index] || calculateWinner(squares)) return;

    const newSquares = [...squares];

    newSquares[index] = xIsNext ? "X" : "O";

    onPlay(newSquares);
  }

  return (
    <>
      <h1 className="status">{status}</h1>
      <div className="container">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

Board.propTypes = {
  squares: PropTypes.array.isRequired,
  xIsNext: PropTypes.bool.isRequired,
  onPlay: PropTypes.func.isRequired,
};

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    const newHistory = [...history, nextSquares];
    setHistory(newHistory);
    setXIsNext(!xIsNext);
  }
  return (
    <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
  );
}

function App() {
  return <Game />;
}

export default App;
