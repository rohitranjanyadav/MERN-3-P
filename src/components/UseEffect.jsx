import { useEffect, useState } from "react";

const UseEffect = () => {
  // ? useEffect --->

  // useEffect(() => {
  //   console.log("hello");
  // }, []);

  const [count, setCount] = useState(0);
  const [like, setLike] = useState(1);

  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };

  const handleLike = () => {
    setLike(like + 1);
  };

  useEffect(() => {
    console.log(
      "Runs when state is changed -- Count or like increased or decreased"
    );
  }, [count, like]);

  // useEffect(() => {
  //   console.log("Like sent to server");
  // }, [like]);

  useEffect(() => {
    console.log("Runs every time whenever anything is changed!");
  });

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increaseCount}>Button + </button>
      <button onClick={decreaseCount}>Button - </button>
      <h1>Like: {like}</h1>
      <button onClick={handleLike}>Like</button>
    </>
  );
};

export default UseEffect;
