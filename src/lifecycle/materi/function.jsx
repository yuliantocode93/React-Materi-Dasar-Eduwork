import React, { useState, useEffect } from "react";

const LifecycleFunctional = () => {
  const [count, setCount] = useState(0);

  // componentDidMount
  useEffect(() => {
    console.log("Component is mounted");
    // Cleanup function (componentWillUnmount)
    return () => {
      console.log("Component will unmount");
    };
  }, []); // Empty dependency array means it only runs once after initial render

  // componentDidUpdate
  useEffect(() => {
    console.log("Component did update");
    // Do something after count state updates
  }, [count]); // Runs every time 'count' state changes

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  console.log("Render is called");

  return (
    <div>
      <h1>Function Component </h1>
      <h2>Count: {count}</h2>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

export default LifecycleFunctional;
