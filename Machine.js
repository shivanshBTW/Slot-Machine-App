class Machine extends React.Component {
  render() {
    var result =
      this.props.m1 === this.props.m2 && this.props.m1 === this.props.m3 ? 'You Win!' : 'You Lose!';
    return (
      <div>
        <p>
          {this.props.m1} {this.props.m2} {this.props.m3}
        </p>
        {result}
      </div>
    );
  }
}
