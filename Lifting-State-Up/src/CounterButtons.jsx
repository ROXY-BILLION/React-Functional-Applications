function CounterButtons({ onIncrease, onDecrease }) {
  return (
    <div className="buttons">
      <button onClick={onDecrease}>− Decrease</button>
      <button onClick={onIncrease}>+ Increase</button>
    </div>
  );
}

export default CounterButtons;
