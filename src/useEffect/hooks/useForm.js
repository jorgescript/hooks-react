import { useEffect, useState } from "react";

export const useForm = (inputs) => {
  const [state, setState] = useState(inputs);

  useEffect(() => {
    if (state["username"] === "jorgescript") {
      console.log("Mira el mensaje");
    }
  }, [state["username"]]);

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({ ...state, [name]: value });
  };

  const handleResetInputs = () => {
    setState(inputs);
  };

  return { state, handleInputChange, handleResetInputs };
};
