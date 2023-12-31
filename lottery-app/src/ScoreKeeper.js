import React, { Component } from "react";

class ScoreKeeper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
    };
    this.singleKill = this.singleKill.bind(this);
    this.tripleKill = this.tripleKill.bind(this);
  }

  singleKill() {
    this.setState({ score: this.state.score + 1 });
  }

  // tripleKill() {
  //   // this doesn't work cuz react optimization and skips the first 2 ones
  //   this.setState({ score: this.state.score + 1 });
  //   this.setState({ score: this.state.score + 1 });
  //   this.setState({ score: this.state.score + 1 });
  // }

  //// pass in a callback function
  // tripleKill() {
  //   this.setState((st) => {
  //     return { score: st.score + 1 };
  //   });
  //   this.setState((st) => {
  //     return { score: st.score + 1 };
  //   });
  //   this.setState((st) => {
  //     return { score: st.score + 1 };
  //   });
  // }

  // //refactored
  incrementScore(curSt) {
    return { score: curSt.score + 1 };
  }

  tripleKill() {
    this.setState(this.incrementScore);
    this.setState(this.incrementScore);
    this.setState(this.incrementScore);
  }

  render() {
    return (
      <div>
        <h1>Score is: {this.state.score}</h1>
        <button onClick={this.singleKill}>Single Kill!</button>
        <button onClick={this.tripleKill}>tripleKill Kill!</button>
      </div>
    );
  }
}

export default ScoreKeeper;
