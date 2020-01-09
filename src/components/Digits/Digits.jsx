import React from "react";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const Digits = props => {
  return (
    <div className = "block">
      {letters.map(letter => (
        <button
          key={letter}
          className="digit"
        //   disabled={props.guesses.includes(letter) ? true : false}
          onClick={props.onClick}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Digits;
