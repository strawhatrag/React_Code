class App extends React.Component {
  render() {
    return (
      <div>
        <Friend name="Luffy" hobbies={["eating", "fighting", "laughing"]} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
