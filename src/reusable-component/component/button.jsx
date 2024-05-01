import React from "react";

const Button = ({ text, onClick, type, style }) => {
  return (
    <button onClick={onClick} type={type} style={style}>
      {text}
    </button>
  );
};

export default Button;
