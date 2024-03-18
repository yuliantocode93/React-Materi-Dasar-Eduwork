import React from "react";

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
  }

  handlePlus() {
    this.setState({
      value: this.state.value + 1,
    });
  }

  handleMinus() {
    if (this.state.value > 0)
      this.setState({
        value: this.state.value - 1,
      });
  }
  render() {
    return (
      <div>
        <h1>Hello Class Component : {this.props.name}</h1>
        <button onClick={this.handleMinus.bind(this)}>-</button>
        <span> {this.state.value} </span>
        <button onClick={this.handlePlus.bind(this)}>+</button>
      </div>
    );
  }
}
export default ClassComponent;
