import { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);
  const [action, setAction] = useState("Increased");

  const increasedAction = () => {
    setAction("Increased");
  };
  const decreasedAction = () => {
    setAction("Decreased");
  };

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const handleIncrease = () => {
    increaseCount();
    increasedAction();
  };
  const handleDecrease = () => {
    decreaseCount();
    decreasedAction();
  };

  return (
    <div>
      <h4>{action}:</h4>
      <h1> {count}</h1>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
    </div>
  );
}

export default UseState;
