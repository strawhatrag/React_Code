import React, { Component } from "react";
import Ball from "./Ball";
import "./Lottery.css";

class Lottery extends Component {
  static defaultProps = {
    title: "Lotto",
    numBalls: 40,
    maxBalls: 6,
  };

  // only creating state in parent cuz we only change values here
  constructor(props) {
    super(props);
    this.state = { nums: Array.from({ length: this.props.maxBalls }) };
    // bind it to constructor to use inside jsx component
    this.handleClick = this.handleClick.bind(this);
  }

  genertate() {
    // we are creating a new array and assigning it to nums
    // using a callback function
    this.setState((curState) => ({
      nums: curState.nums.map(
        (n) => Math.floor(Math.random() * this.props.numBalls) + 1
      ),
    }));
  }

  handleClick() {
    this.genertate();
  }

  render() {
    return (
      // always use className
      <section className="Lottery">
        <h1>{this.props.title}</h1>
        <div>
          {/* curlly {} to use jsx */}
          {this.state.nums.map((n) => (
            <Ball num={n} />
          ))}
        </div>

        <button onClick={this.handleClick}>Generate</button>
      </section>
    );
  }
}

export default Lottery;
