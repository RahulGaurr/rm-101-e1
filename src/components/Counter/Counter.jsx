import styles from "./counter.module.css";
import React, { useEffect } from "react";


const Counter = ({ countval }) => {
  // sample value to be replaced
  const [count, setCount] = React.useState(0);
  // NOTE: do not delete `data-testid` key value pair
  useEffect(() => {
    setCount(countval);
  }, [countval]);

  function inc() {
    setCount(count + 1);
  }
  function dec() {
    if (count <= 1) {
      return;
    }
    setCount(count - 1);
  }

  return countval ? (
    <div className={styles.counter}>
      <button data-testid="task-counter-increment-button" onClick={inc}>
        +
      </button>
      <span data-testid="task-counter-value">{count}</span>
      <button data-testid="task-counter-decrement-button" onClick={dec}>
        -
      </button>
    </div>
  ) : null;
};

export default Counter;
