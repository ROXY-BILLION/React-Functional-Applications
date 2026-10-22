import { useState, useEffect } from "react";
import "./PersistentCounter.css";

function PersistentCounter() {
  const [count, setCount] = useState(() => {
    const savedData = localStorage.getItem("counter");
    return savedData === null ? 0 : JSON.parse(savedData);
  });

  useEffect(() => {
    localStorage.setItem("counter", JSON.stringify(count));
  }, [count]);

  function increase() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrease() {
    setCount((prevCount) => prevCount - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <main className="counter-page">
      <div className="counter-decoration decoration-one"></div>
      <div className="counter-decoration decoration-two"></div>

      <section className="counter-card">
        <div className="counter-header">
          <div className="counter-logo">✦</div>

          <span className="saved-badge">
            <span className="saved-dot"></span>
            SAVED AUTOMATICALLY
          </span>
        </div>

        <div className="counter-intro">
          <p className="counter-eyebrow">YOUR PERSONAL TRACKER</p>
          <h1>Small steps.<br /><span>Big progress.</span></h1>
          <p className="counter-description">
            Keep track of every step, one count at a time.
          </p>
        </div>

        <div className="counter-display">
          <span className="display-label">CURRENT COUNT</span>
          <h2 key={count} className="counter-number">
            {count}
          </h2>
          <div className="count-indicator">
            <span></span>
            Your progress is being tracked
          </div>
        </div>

        <div className="counter-controls">
          <button
            className="counter-button decrease-button"
            onClick={decrease}
            aria-label="Decrease count"
          >
            <span>−</span>
            <small>Decrease</small>
          </button>

          <button
            className="counter-button increase-button"
            onClick={increase}
            aria-label="Increase count"
          >
            <span>+</span>
            <small>Increase</small>
          </button>
        </div>

        <button className="reset-button" onClick={reset}>
          <span>↺</span> Reset counter
        </button>

        <div className="counter-footer">
          <div className="footer-icon">✓</div>
          <div>
            <p className="footer-title">Your count is safe</p>
            <p className="footer-description">
              Automatically saved on this device.
            </p>
          </div>
        </div>
      </section>

      <p className="page-caption">SIMPLE TRACKING. CONSISTENT PROGRESS.</p>
    </main>
  );
}

export default PersistentCounter;