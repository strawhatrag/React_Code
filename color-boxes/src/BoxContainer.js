import React, { Component } from "react";
import Box from "./Box";
import "./BoxContainer.css";

export default class BoxContainer extends Component {
  static defaultProps = {
    numBoxes: 18,
    allColors: [
      "#FF5733", // High contrast - Vivid Red
      "#33FF57", // High contrast - Lime Green
      "#3357FF", // High contrast - Cobalt Blue
      "#FF33E9", // High contrast - Electric Pink
      "#FFC233", // High contrast - Amber
      "#33D0FF", // High contrast - Bright Sky Blue
      "#FF3381", // High contrast - Magenta
      "#33FFA8", // High contrast - Turquoise
      "#FF3333", // High contrast - Pure Red
      "#33FFC6", // High contrast - Electric Green
      "#E74C3C", // Normal contrast - Alizarin Crimson
      "#3498DB", // Normal contrast - Curious Blue
      "#1ABC9C", // Normal contrast - Mountain Meadow
      "#F39C12", // Normal contrast - Butterscotch
      "#9B59B6", // Normal contrast - Amethyst
    ],
  };

  render() {
    const boxes = Array.from({ length: this.props.numBoxes }).map(() => (
      <Box colors={this.props.allColors} />
    ));

    return <div className="BoxContainer">{boxes}</div>;
  }
}
