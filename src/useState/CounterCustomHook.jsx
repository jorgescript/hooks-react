import { useConter } from "./hooks/useCounter";

export const CounterCustomHook = () => {
  const { state, handleAdd, handleSubstract, handleReset } = useConter(10);
  return (
    <>
      <h1>useState customHook</h1>
      <h2>Counter: {state.counter} </h2>
      <h2>Clicks: {state.clicks} </h2>
      <button onClick={handleAdd} className="btn btn-primary">
        {" "}
        +1{" "}
      </button>
      <button onClick={handleSubstract} className="btn btn-primary">
        {" "}
        -1{" "}
      </button>
      <button onClick={handleReset} className="btn btn-primary">
        {" "}
        Reset{" "}
      </button>
    </>
  );
};
