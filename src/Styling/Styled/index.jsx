import React from "react";
import styled from "styled-components";
import Title from "../Sass/Title";

const Button = styled.button`
  border: 2px solid black;
  background-color: white;
  color: black;
  padding: 14px 28px;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: rgb(22, 70, 204);
    color: white;
    border-color: rgb(22, 70, 204);
  }
`;
class Styled extends React.Component {
  render() {
    return (
      <div>
        <Title />
        <h2 className="title">Belajan React</h2>
        <Button>Go Eduwork</Button>
      </div>
    );
  }
}

export default Styled;
