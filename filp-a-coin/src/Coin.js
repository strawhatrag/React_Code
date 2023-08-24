import React, { Component } from "react";

class Coin extends Component {
  render() {
    const { side, imgUrl } = this.props;
    return (
      <img
        src={imgUrl}
        alt={side}
        style={{ width: "100px", height: "100px" }}
        className="Coinimage"
      />
    );
  }
}

export default Coin;
