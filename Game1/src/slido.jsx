import { useState, useEffect, react } from "react";
import s1 from "./assets/1.png";
import s2 from "./assets/2.png";
import s3 from "./assets/3.png";
import s4 from "./assets/4.png";
import s5 from "./assets/5.png";
import s6 from "./assets/6.png";
import s7 from "./assets/7.png";
import s8 from "./assets/8.png";

const solved = [s1, s2, s3, s4, s5, s6, s7, s8, null];
const images = [s1, s2, s3, s4, s5, s6, s7, s8, null];
function shuffleArray(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}

function changePosition() {
    alert();
}


function Slido() {
  const [board, setBoard] = useState([]);
  const [active, setActive] = useState(false);

  const initGame = () => {
    shuffleArray(images);
    setBoard(images);
    console.log(active);
  };



  useEffect(() => {
    initGame();
  }, []);

  return (
    <div className="mainDiv">
      <div className="grid-container">
        {console.log("Shuffled:", board)}
        <div className="grid-board">{board.map((val, i) => {
          return (
            <div
              key={i}
              className="grid-item"
              >
                <img src={val}/>
              </div>
          );
        })}
              </div>
              </div>
      </div>
  );
}
export default Slido;
