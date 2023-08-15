class Hello extends React.Component {
  render() {
    return (
      <div>
        {/* props is a object passed as key value pair */}
        <p>{`Hello, ${this.props.to} from ${this.props.from}`}</p>
      </div>
    );
  }
}
