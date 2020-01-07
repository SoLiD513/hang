import React from "react";
import Counter from "./components/Counter";
import PlusButton from "./components/PlusButton";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
    this.increase = this.increase.bind(this);
  }
  increase(e) {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div>
        <Counter display={this.state.count} />
        <PlusButton clickHandler={this.increase} />
      </div>
    );
  }
}

App.propTypes = {};

export default App;
