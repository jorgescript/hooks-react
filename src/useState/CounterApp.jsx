import { useState } from "react";

export const CounterApp = () => {
  const [state, setState] = useState({ counter: 10, clicks: 0, other: false });

  return (
    <>
      <h1>useState</h1>
      <h2>Counter: {state.counter} </h2>
      <h2>Clicks: {state.clicks} </h2>
      <button
        onClick={() =>
          setState({
            ...state,
            counter: state.counter + 1,
            clicks: state.clicks + 1,
          })
        }
        className="btn btn-primary"
      >
        +1
      </button>
    </>
  );
};
