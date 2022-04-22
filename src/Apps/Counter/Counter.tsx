import PropTypes from "prop-types";

import "./Counter.styles.css";
import useCounterState from "./states/useCounterState";

const Counter = () => {
  const { count, handleSubstract, handleAdd, handleReset } = useCounterState();

  return (
    <div className="container">
      <h1>CounterApp</h1>
      <h2> {count} </h2>
      <div className="buttons-container">
        <button className="button add" onClick={handleAdd}>
          +1
        </button>
        <button className="button remove" onClick={handleSubstract}>
          -1
        </button>
        <button className="button reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
