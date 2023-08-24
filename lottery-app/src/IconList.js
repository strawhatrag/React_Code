import React, { Component } from "react";

class IconList extends Component {
  static defaultProps = {
    options: [
      "angry",
      "anchor",
      "archive",
      "archway",
      "baby",
      "bell",
      "bolt",
      "bone",
      "car",
      "city",
      "cloud",
      "couch",
    ],
  };

  constructor(props) {
    super(props);
    this.state = { icons: [] };
    this.addIcon = this.addIcon.bind(this);
  }

  addIcon() {
    let idx = Math.floor(Math.random() * this.props.options.length);
    let newIcon = this.props.options[idx];
    let newArray = [...this.state.icons, newIcon];
    this.setState({ icons: newArray });
  }

  render() {
    const icons = this.state.icons.map((i, index) => (
      <i className={`fas fa-${i}`} key={index}></i>
    ));

    return (
      <div>
        <h1>Icons: {icons}</h1>
        <button onClick={this.addIcon}>Add New Icon</button>
      </div>
    );
  }
}

export default IconList;
