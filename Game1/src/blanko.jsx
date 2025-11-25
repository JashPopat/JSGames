import React, { useState } from "react";

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

    const randomIndex = Math.floor(Math.random() * strs.length);
    const strng = strs[randomIndex].toString();
    const sMap = strng.split("");
    console.log(sMap, sMap.length)
    const indices = new Set();

    while (indices.size < 3) {
      const r = Math.floor(Math.random() * sMap.length);
      (strng[r] === " ") ? console.log('space') : indices.add(r);
    }

    return { sMap, indices };
  });

  const { sMap, indices } = gameData;
  console.log(indices)

  return (
    <div className="mainDiv">
      <div className="grid">
        {sMap.map((ch, i) => (
          <>
            <span className="numbers">{i}</span>
            <div key={i} className="letter">
              {indices.has(i) ? <input type="text" className="letterInput" maxLength={1}/> : ch}
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Blanko;
