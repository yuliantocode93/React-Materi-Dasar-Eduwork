import React, { Component } from "react";

class LifecycleClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Constructor is called");
  }

  componentDidMount() {
    console.log("Component is mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component did update");
    if (prevState.count !== this.state.count) {
      console.log("Count state has been updated");
    }
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    console.log("Render is called");
    return (
      <div>
        <h1>Class Component : {this.props.name} </h1>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default LifecycleClass;
