import React, { useState } from "react";
import Styles from "./Counter.module.scss";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <section className={Styles.counter}>
      <h1>Counter</h1>

      <div className={Styles.buttonContainer}>
        <button className={Styles.button} onClick={() => setCount(count - 1)}>
          -
        </button>
        <p data-testid="currentCount">{count}</p>
        <button className={Styles.button} onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
    </section>
  );
};

export default Counter;
