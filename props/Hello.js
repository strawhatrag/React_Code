class Hello extends React.Component {
  render() {
    let bangs = "!".repeat(this.props.bangs);
    return (
      <div>
        {/* props is a object passed as key value pair */}
        <p>{`Hello, ${this.props.to} from ${this.props.from} ${bangs}`}</p>
        <img src={this.props.img}></img>
      </div>
    );
  }
}
