class App extends React.Component {
  render() {
    return (
      <div>
        <h1>hi</h1>
        {/* passing data  var="value" -- as props*/}
        <Hello to="rag" from="paul" />
        <Hello to="dom" from="paul" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
