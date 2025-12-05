import { useState, useEffect } from "react";
import s1 from "./assets/1.png";
import s2 from "./assets/2.png";
import s3 from "./assets/3.png";
import s4 from "./assets/4.png";
import s5 from "./assets/5.png";
import s6 from "./assets/6.png";
import s7 from "./assets/7.png";
import s8 from "./assets/8.png";

// The solved state of the board
const solvedBoard = [s1, s2, s3, s4, s5, s6, s7, s8, null];

function shuffleArray(array) {
  // Fisher-Yates shuffle algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function Slido() {
  const [board, setBoard] = useState([]);

  useEffect(() => {
    const shuffledImages = [...solvedBoard];
    shuffleArray(shuffledImages);
    setBoard(shuffledImages);
  }, []);

  const areNeighbors = (index1, index2) => {
    const row1 = Math.floor(index1 / 3);
    const col1 = index1 % 3;
    const row2 = Math.floor(index2 / 3);
    const col2 = index2 % 3;

    // Check for horizontal adjacency
    if (row1 === row2 && Math.abs(col1 - col2) === 1) {
      return true;
    }
    // Check for vertical adjacency
    if (col1 === col2 && Math.abs(row1 - row2) === 1) {
      return true;
    }
    return false;
  };

  const handleTileClick = (clickedIndex) => {
    const emptyIndex = board.findIndex((item) => item === null);

    if (areNeighbors(clickedIndex, emptyIndex)) {
      const newBoard = [...board];
      // Swap the clicked tile with the empty tile
      [newBoard[clickedIndex], newBoard[emptyIndex]] = [newBoard[emptyIndex], newBoard[clickedIndex]];
      setBoard(newBoard);
    }
  };

  const solvePuzzle = () => {
    setBoard(solvedBoard);
  };

  return (
    <div className="mainDiv">
      <div className="grid-container">
        <div className="grid-board">
          {board.map((val, i) => (
            <div
              key={i}
              className="grid-item hover:cursor-pointer"
              onClick={() => handleTileClick(i)}
            >
              {val && <img src={val} alt={`tile-${i}`} />}
            </div>
          ))}
        </div>
        <button className="resetBtn" onClick={solvePuzzle}>Solve</button>
      </div>
    </div>
  );
}
export default Slido;