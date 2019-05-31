class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Slot Machine</h1>
        <Machine m1="x" m2="y" m3="x" />
        <Machine m1="x" m2="x" m3="x" />
        <Machine m1="y" m2="x" m3="z" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
