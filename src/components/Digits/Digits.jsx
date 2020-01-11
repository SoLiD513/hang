import React from "react";
import { Button } from 'reactstrap';
import "./Digits.css";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const Digits = props => {
  return (
    <div className = "block">
      {letters.map(letter => (
        <Button
        color="secondary"
          key={letter}
          className="digit"
        //   disabled={props.guesses.includes(letter) ? true : false}
          onClick={props.onClick}
        >
          {letter}
        </Button>
      ))}
    </div>
  );
};

export default Digits;
