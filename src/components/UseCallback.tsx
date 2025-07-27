import { useState, useCallback, memo } from "react";

type ButtonProps = {
  onClick: () => void;
};

const DecrementButton = (props: ButtonProps) => {
  const { onClick } = props;

  console.log("Decrement Button rendered");

  return <button onClick={onClick}>Decrement</button>;
};

const IncrementButton = memo((props: ButtonProps) => {
  const { onClick } = props;

  console.log("Increment Button rendered");

  return <button onClick={onClick}>Increment</button>;
});

const DoubleButton = memo((props: ButtonProps) => {
  const { onClick } = props;

  console.log("Double Button rendered");

  return <button onClick={onClick}>Double</button>;
});

export const UseCallbackExample = () => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount((c) => c - 1);
  };

  const increment = () => {
    setCount((c) => c + 1);
  };

  const double = useCallback(() => {
    setCount((c) => c * 2);
  }, []);

  return (
    <div>
      <h1>UseCallback Example</h1>
      <p>Count: {count}</p>
      <DecrementButton onClick={decrement} />
      <IncrementButton onClick={increment} />
      <DoubleButton onClick={double} />
    </div>
  );
};
