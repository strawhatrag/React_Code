class App extends React.Component {
  render() {
    <div>
      <Hello to="rag" from="paul" />
    </div>;
  }
}

// where to render what component
ReactDOM.render(<App />, document.getElementById("root"));
