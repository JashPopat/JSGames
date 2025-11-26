import React, { useEffect, useState } from "react";

function Blanko() {
  const [gameData] = useState(() => {
    const strs = [
      "the fat cats",
      "larger frogs",
      "banana cakes",
      "unsw vs usyd",
      "french toast",
      "hawaii pizza",
      "barack obama",
    ];

    const chosenNum = Math.floor(Math.random() * strs.length);
    const chosen = strs[chosenNum];
    const alph = chosen.split("");
    let swap = [];
    console.log(alph);

    while (swap.length < 3) {
      const rand = Math.floor(Math.random() * alph.length);
      console.log(alph[rand], rand);
      alph[rand] !== " "
        ? !swap.some((item) => item.index === rand)
          ? swap.push({ index: rand, char: alph[rand] })
          : console.log("duplicate")
        : console.log("space");
    }
    console.log(swap);

    return { swap, alph };
  });
  const [inputs, setInputs] = useState({});

  const handleInputChange = (index, value) => {
    setInputs((prev) => ({
      ...prev,
      [index]: value
    }));

  };
  const { swap, alph } = gameData;
  const checkAnswers = () => {
    const results = swap.map(item => ({
        index: item.index,
        expected: item.char,
        typed: inputs[item.index] || "",
        correct: inputs[item.index] === item.char
    }));
    return results;
    };

    function handleClick() {
        alert("Correct!");
        window.location.reload(false);
}

    const restart = () => {
        console.log('done!')
        const current = parseInt(localStorage.getItem('gamesWon') || '0', 10);
        const wins = current + 1;
        localStorage.setItem('gamesWon', String(wins));
        console.log('wins now', wins);
        handleClick();
    }

    // Usage:
    useEffect (() => {
    const feedback = checkAnswers();
    let correct = 0;
        feedback.forEach(r => {
            ((r.typed !== '') ?
        console.log(`Index ${r.index}: expected "${r.expected}", got "${r.typed}" - ${r.correct ? correct = correct + 1 : "x"}`):null);
        console.log(correct, 'right inputs')
        correct === 3 ? restart() : null;
        });
    }, [inputs])


  
  return (
    <div className="mainDiv">
      {alph.map((val, i) => {
        return (
          <span key={i} className="letter">
            {swap.some((item) => item.index === i)
            ? <input
                    type="text"
                    className="letterInput"
                    maxLength={1}
                    onChange={(e) => handleInputChange(i, e.target.value)} /> 
            : val}
          </span>
        );
      })}
    </div>
  );
}

export default Blanko;
