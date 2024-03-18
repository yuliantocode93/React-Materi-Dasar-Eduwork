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
      <h1>Hello Functional Component : {name}</h1>
      {/* <button onClick={() => setValue(value + 1)}>+</button>
      <span> {value} </span>
      <button onClick={() => setValue(value - 1)}>-</button> */}

      <button onClick={handleMinus}>-</button>
      <span> {value} </span>
      <button onClick={handlePlus}>+</button>
    </div>
  );
};

FunctionalComponent.defaultProps = {
  name: "Functional Component",
};

export default FunctionalComponent;
