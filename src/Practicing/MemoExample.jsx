import { useState, memo } from "react";

export const MemoExample = () => {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(20);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setAge(age + 1)}>Increase Age</button>

      <Title />
      <CountDisplay count={count} />
    </div>
  );
};

const Title = memo(function title() {
  console.log("Title Comonent Re-rendered");

  return (
    <div>
      <p>Title Component</p>
    </div>
  );
});

const CountDisplay = memo(function CountDisplay({ count }) {
  console.log("CountDisplay Component Re-rendered");
  return (
    <div>
      <p>Count : {count}</p>
    </div>
  );
});

const AgeDisplay = memo(function AgeDisplay() {
  console.log("AgeDisplay Component Re-rendered");
  return (
    <div>
      <p>Age Display</p>
    </div>
  );
});
