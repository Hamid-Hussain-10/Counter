import { useState } from "react";
import "./Task.css";

function Task() {
  const [count, setcount] = useState(0);
  const [countin, setCountin] = useState("");

  const handleIncrement = () => {
    setcount(count + countin);
  };

  const handleDecrement = () => {
    setcount(count - countin);
  };

  const handleReset = () => {
    setcount(0);
  };

  return (
    <div className="container">
      <h1 className="heading snake-animation">Enter Your Number</h1>
      <p className="description">{count}</p>
      <input
        type="Number"
        className="input-box"
        placeholder="Enter num here..."
        value={countin}
        onChange={(e) => setCountin(Number(e.target.value))}
      />
      <div className="button-group">
        <button
          className="btn primary"
          onClick={handleIncrement}
          disabled={count >= 100}
        >
          Increment
        </button>
        <button
          className="btn secondary"
          onClick={handleDecrement}
          disabled={count <= 0}
        >
          Decrement
        </button>
        <button className="btn danger" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Task;
