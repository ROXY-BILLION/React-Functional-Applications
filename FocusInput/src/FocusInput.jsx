import { useRef } from "react";
import "./FocusInput.css";

function FocusInput() {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
  }

  function clearInput() {
    inputRef.current.value = "";
    inputRef.current.focus();
  }

  return (
    <div className="focus-app">
      <h2>Focus Input</h2>

      <input
        ref={inputRef}
        type="text"
        placeholder="Enter something..."
      />

      <div className="focus-buttons">
        <button onClick={focusInput}>Focus Input</button>
        <button onClick={clearInput}>Clear Input</button>
      </div>
    </div>
  );
}

export default FocusInput;