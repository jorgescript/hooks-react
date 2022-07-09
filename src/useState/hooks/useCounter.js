import { useState } from "react";
export const useConter = (initialValue) => {
  const [state, setState] = useState({
    counter: initialValue,
    clicks: 0,
    other: false,
  });

  const handleAdd = () => {
    setState({
      ...state,
      counter: state.counter + 1,
      clicks: state.clicks + 1,
    });
  };

  const handleSubstract = () => {
    setState({
      ...state,
      counter: state.counter - 1,
      clicks: state.clicks + 1,
    });
  };

  const handleReset = () => {
    setState({
      ...state,
      counter: initialValue,
      clicks: 0,
    });
  };

  return { state, handleAdd, handleSubstract, handleReset };
};
