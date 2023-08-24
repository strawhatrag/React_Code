import React, { Component } from "react";
import "./Flip.css";
import Coin from "./Coin";

class Flip extends Component {
  static defaultProps = {
    coins: [
      { side: "head", imgUrl: "https://tinyurl.com/react-coin-heads-jpg" },
      { side: "tail", imgUrl: "https://tinyurl.com/24xaz6kn" },
    ],
  };

  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      heads: 0,
      tails: 0,
      currCoin: this.props.coins[0].imgUrl,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  generate = () => {
    const { coins } = this.props;
    const newCoin = coins[Math.floor(Math.random() * coins.length)];

    this.setState((prevState) => ({
      currCoin: newCoin.imgUrl,
      total: prevState.total + 1,
      heads: prevState.heads + (newCoin.side === "head" ? 1 : 0),
      tails: prevState.tails + (newCoin.side === "tail" ? 1 : 0),
    }));
  };

  handleClick() {
    this.generate();
  }

  render() {
    return (
      <div className="Flip">
        <h1>Let's flip a coin!</h1>
        <Coin side={this.state.currSide} imgUrl={this.state.currCoin} />
        <br />
        <p>
          Total flips {this.state.total}, Heads {this.state.heads}, Tails{" "}
          {this.state.tails}
        </p>
        <button onClick={this.handleClick}>Flip</button>
      </div>
    );
  }
}

export default Flip;
