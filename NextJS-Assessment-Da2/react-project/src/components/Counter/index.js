import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleDecrement = () => setCount(count - 1);
  const handleIncrement = () => setCount(count + 1)

  return (
    <div className="container">
       <div className="mt-50">
       <h3>Q1. Create a counter component with a button. <br/>
       Q2. Create a counter with increment and decrement buttons.
       </h3>
      <button className="" onClick={handleDecrement}>
        Decrement
      </button>
      <strong className="count">Counter: {count}</strong>
      <button
        className="" onClick={handleIncrement}>
        Increment
      </button>
      </div>
    </div>
  );
}

export default Counter;
