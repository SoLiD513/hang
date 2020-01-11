import React, { Component } from "react";
import "./App.css";
import Wrapper from "./components/Wrapper/Wrapper";
import Header from "./components/Header/Header";
import Digits from "./components/Digits/Digits";
import GameBoard from "./components/GameBoard/GameBoard";

// const letters = /^[a-z0-9]+$/i;
const digits = document.getElementsByClassName("digit");
let secretWords = ["SECRETWORD"];
let indexWord;
let buildingWord = [];

class App extends Component {
  state = {
    // buildingWord: []
    // data: [],
    // lose: false,
    // currentTitle: 0,
    // guesses: [],
    // currentDiagram: 1,
    // goodGuesses: [],
    // missedLetters: [],
    // newGame: true,
  };

  // constructor(props) {
  //   super(props);
  //   console.log();
  // }

  componentDidMount() {
    document.addEventListener("keydown", this.onKeyDown);
    this.playGame();
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyDown);
  }

  onKeyDown = event => {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
      console.log(event.key.toUpperCase());
    }
  };

  handleClick = e => {
    const letter = e.target.textContent.toUpperCase();
    console.log(letter);
    // return letter.length > 1 ? null : this.checkLetter(letter);
  };

  isDisabled(letter) {
    for (let i = 0; i < digits.length; i++) {
      if (digits[i].textContent === letter) {
        return digits[i].hasAttribute("disabled");
      }
    }
  };

  playGame = () => {
    indexWord = Math.floor(Math.random() * secretWords.length);
    console.log(secretWords);
    buildingWord = [];
    for (var i = 0; i < secretWords[indexWord].length; i++) {
      buildingWord.push("_ ");
    }
    // this.setState({ buildingWord });
    // console.log(buildingWord);
  };

  // checkLetter = currentLetter => {
  //   if (this.state.guesses.length > 0) {
  //     this.state.guesses.map(letter =>
  //       letter === currentLetter
  //         ? null
  //         : this.setState({
  //             guesses: this.state.guesses.concat(currentLetter)
  //           })
  //     );
  //   } else {
  //     this.setState({
  //       guesses: this.state.guesses.concat(currentLetter),
  //     });
  //   }

  // };

  render() {
    return (
      <Wrapper className="wrapper">
        <div className="jumbotron">
          <Header className="header">Hang-Man React</Header>
        </div>
        <GameBoard className="gameBoard">
          {this.state.buildingWord}
        </GameBoard>
        <div className="container">
          <div className="row">
            <Digits className="digits" onClick={this.handleClick} />
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default App;
