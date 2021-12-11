import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    console.log('Constructor');
    super(props);

    this.state = {
      counter: 0,
    };

    this.increment = () => this.setState({ counter: this.state.counter + 1 });
    this.decrement = () => this.setState({ counter: this.state.counter - 1 });
  }

  componentDidMount = () => {
    console.log('Component did Mount');
    console.log('-------------------');
  };

  render() {
    console.log('Render');

    return (
      <div className="counter">
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <div>Counter: {this.state.counter}</div>
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Component did Update');
  }

  componentWillUnmount() {
    console.log('Component Will Unmount');
    console.log('----------------------');
  }
}
