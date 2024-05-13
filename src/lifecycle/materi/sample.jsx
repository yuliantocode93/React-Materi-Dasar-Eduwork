import React, { Component } from "react";

class Lifecycleclass2 extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor is called");
  }

  componentDidMount() {
    console.log("Component is mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component did update");
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  render() {
    console.log("Render is called");
    return (
      <div>
        <h2>Lifecycle class 2</h2>
      </div>
    );
  }
}

export default Lifecycleclass2;
