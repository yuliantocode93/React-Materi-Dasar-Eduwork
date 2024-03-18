import React from "react";
import ClassComponent from "./Pembahasan/ClassComponent";
import FunctionalComponent from "./Pembahasan/FunctionalComponent";

class Component extends React.Component {
  render() {
    return (
      <div>
        {/* <ClassComponent name="Class Component" /> */}
        <ClassComponent name={23} />
        <FunctionalComponent name={"Functional Component"} />
        {/* <FunctionalComponent /> */}
      </div>
    );
  }
}
export default Component;
