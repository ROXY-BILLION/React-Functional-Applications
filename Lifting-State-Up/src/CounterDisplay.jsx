function CounterDisplay({ count }) {
  return (
    <div>
      <h2>Shared Count</h2>
      <p className="count">{count}</p>
    </div>
  );
}

export default CounterDisplay;
