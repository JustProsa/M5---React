import React, { Component } from "react";

class ProvaCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  incrementCounter() {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  }

  decrementCounter() {
    this.setState((prevState) => ({
      counter: prevState.counter - 1,
    }));
  }

  render() {
    return (
      <>
        <h1>{this.state.counter}</h1>
        <button onClick={() => this.incrementCounter()}>Increment</button>
        <button onClick={() => this.decrementCounter()}>Decrement</button>
      </>
    );
  }
}

export default ProvaCounter;
