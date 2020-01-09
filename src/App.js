import React, { Component } from "react";
import "./App.css";
import Wrapper from "./components/Wrapper/Wrapper";
import Header from "./components/Header/Header";
import Digits from "./components/Digits/Digits";

// const letters = /^[a-z0-9]+$/i;
// const digits = document.getElementsByClassName('digit');

class App extends Component {
  state = {};

  // constructor(props) {
  //   super(props);
  //   console.log();
  // }

  componentDidMount() {
    document.addEventListener("keydown", this.onKeyDown);
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
    // return letter.length > 1 ? null : this.checkLetter(letter);
    console.log(letter);
  };

  // isDisabled(letter) {
  //   for (let i = 0; i < digits.length; i++) {
  //     if (digits[i].textContent === letter) {
  //       return digits[i].hasAttribute('disabled');
  //     }
  //   }
  // }

  render() {
    return (
      <Wrapper className="wrapper">
        <div className="jumbotron">
          <Header className="header">Hang-Man React</Header>
        </div>
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
