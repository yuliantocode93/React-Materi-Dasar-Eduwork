import React from "react";

const FunctionalComponent = ({ name }) => {
  const [value, setValue] = React.useState(0); //{value:0}

  const handlePlus = () => {
    setValue(value + 1); //{value:value+1}
  };
  const handleMinus = () => {
    if (value > 0) {
      setValue(value - 1); //{value:value-1}
    }
  };
  return (
    <div>
      <h1>Functional Component : {name}</h1>
      <button onClick={handleMinus}>-</button>
      <span> {value} </span>
      <button onClick={handlePlus}>+</button>
    </div>
  );
};

FunctionalComponent.defaultProps = {
  name: "Name of Functional Component",
};

export default FunctionalComponent;
