import React, { useState } from "react";
import "../src/App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <div className="counter">
      <div className="counter__wrapper">
        <div className="counter__number">
          <span>{count}</span>
        </div>
        <div className="counter__btn">
          <div className="increase__btn">
            <button onClick={increment}>Increase</button>
          </div>
          <div className="decrease__btn">
            <button onClick={decrement}>Decrease</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
