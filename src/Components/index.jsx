import React from "react";
import ClassComponent from "./Pembahasan/ClassComponent";
import FunctionalComponent from "./Pembahasan/FunctionalComponent";

class Component extends React.Component {
  render() {
    return (
      <div>
        <ClassComponent name="Class Component" />
        <FunctionalComponent name={"Functional Component"} />
      </div>
    );
  }
}
export default Component;
