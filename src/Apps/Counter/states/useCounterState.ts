import { useState } from "react";

const useCounterState = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubstract = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return {
    count,
    handleSubstract,
    handleAdd,
    handleReset
  };
};

export default useCounterState;
