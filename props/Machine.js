class Machine extends React.Component {
  render() {
    let result =
      this.props.s1 === this.props.s2 && this.props.s2 === this.props.s3
        ? "You win!"
        : "You lose!";

    return (
      <div>
        <h1>Slot Machine!</h1>
        <h2>{this.props.s1 + this.props.s2 + this.props.s3}</h2>
        <h3>{result}</h3>
      </div>
    );
  }
}
