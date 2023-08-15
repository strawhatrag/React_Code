class Machine extends React.Component {
  render() {
    function assignFruit() {
      const fruits = ["🍊", "🍇", "🍒"];
      return fruits[Math.floor(Math.random() * fruits.length)];
    }

    const [s1, s2, s3] = [assignFruit(), assignFruit(), assignFruit()];

    let result = s1 === s2 && s2 === s3 ? "You win!" : "You lose!";

    return (
      <div>
        <h1>Slot Machine!</h1>
        <h2>{s1 + s2 + s3}</h2>
        <h3>{result}</h3>
      </div>
    );
  }
}

ReactDOM.render(<Machine />, document.getElementById("root"));
