import React from "react";
import "./index.scss";
import Title from "./Title";

export default class Sass extends React.Component {
  render() {
    return (
      <div>
        <Title />
        <h2 className="title">Belajan React</h2>
        <button className="btn btn-info">Go Eduwork</button>
      </div>
    );
  }
}
