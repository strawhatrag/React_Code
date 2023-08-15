class App extends React.Component {
  render() {
    return (
      <div>
        <h1>hi</h1>
        {/* passing data  var="value" -- as props*/}
        <Hello to="rag" from="paul" bangs={3} data={[1, 2, 3, 4]} />
        <Hello to="dom" from="paul" img="https://shorturl.at/bgQ14" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
