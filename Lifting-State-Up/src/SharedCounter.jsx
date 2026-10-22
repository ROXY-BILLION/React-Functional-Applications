import { useState } from "react";
import CounterDisplay from "./CounterDisplay";
import CounterButtons from "./CounterButtons";
import "./SharedCounter.css";

function SharedCounter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="shared-counter">
      <h1>Lifting State Up</h1>

      <CounterDisplay count={count} />

      <CounterButtons
        onIncrease={increase}
        onDecrease={decrease}
      />
    </div>
  );
}

export default SharedCounter;
