import "../src/App.css";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseCount, decreaseCount } from "./features/counter/counterSlice";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  const [input, setInput] = useState(0)

  const increment = () => {
    dispatch(increaseCount(Number(input)));
  };

  const decrement = () => {
    dispatch(decreaseCount(Number(input)));

  };

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
        <div className="counter__input">
          <input type="text" value={input == 0 ? "" : input} onChange={(e)=>{setInput(e.target.value)}}/>
        </div>
      </div>
    </div>
  );
}

export default App;
