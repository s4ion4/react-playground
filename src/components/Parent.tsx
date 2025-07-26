import { memo, useState } from "react";

type CounterProps = {
  count: number;
};

const MemoizedChild = memo<CounterProps>((props) => {
  const { count } = props;
  console.log("MemoizedChild rendered");

  return (
    <div>
      <h2>Memoized Child Component</h2>
      <p>Count: {count}</p>
    </div>
  );
});

const NormalChild = (props: CounterProps) => {
  const { count } = props;
  console.log("NormalChild rendered");

  return (
    <div>
      <h2>Normal Child Component</h2>
      <p>Count: {count}</p>
    </div>
  );
};

const Parent = () => {
  const [parentCount, setParentCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  console.log("Parent rendered");

  return (
    <div>
      <h1>Parent Component</h1>
      <div>
        <button onClick={() => setParentCount(parentCount + 1)}>
          Increment Parent Count
        </button>
        <br />
        <br />
        <button onClick={() => setChildCount(childCount + 1)}>
          Increment Child Count
        </button>
      </div>
      <br />
      <div>
        <NormalChild count={childCount} />
        <MemoizedChild count={childCount} />
      </div>
    </div>
  );
};

export default Parent;
