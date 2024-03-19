import React from "react";
import style from "./index.module.css";

export default class Module extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello Plain</h1>
        <button className={`btn ${style.info}`}>Go Eduwork</button>
        <br />
        <button className={`${style.btn} ${style.info}`}>Go Eduwork</button>
      </div>
    );
  }
}
