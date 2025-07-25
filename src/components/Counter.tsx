import { useReducer } from "react";

type Action = "Decrement" | "Increment" | "Double" | "Reset";

const reducer = (state: number, action: Action) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    case "Double":
      return state * 2;
    case "Reset":
      return 0;
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={() => dispatch("Increment")}>Increment</button>
      <button onClick={() => dispatch("Decrement")}>Decrement</button>
      <button onClick={() => dispatch("Double")}>Double</button>
      <button onClick={() => dispatch("Reset")}>Reset</button>
      <p>Count: {state}</p>
    </div>
  );
};

export default Counter;
