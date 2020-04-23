import React, { useState } from "react";
import PropTypes from "prop-types";

const Counter = ( props ) => {
  const [count, setCount] = useState(0);
  console.log(`${count} ${props.jump}`)
  
  const incrementCount = () => {
      setCount(count + props.jump)
  };

  return (
    <>
      <h1>Count: {count}</h1>
      <h2>Increment size: {props.jump}</h2>
      <button type="button" onClick={incrementCount}>
        Increment
      </button>
    </>
  );
};

Counter.defaultProps = {
  jump: 2
};

Counter.propTypes = {
  jump: PropTypes.number
};

export default Counter;
