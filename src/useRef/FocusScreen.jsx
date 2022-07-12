import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();
  const focusOnClick = () => inputRef.current.select();

  return (
    <>
      <h1>useRef</h1>
      <input
        ref={inputRef}
        type="text"
        className="form-control"
        placeholder="Ingrese su nombre"
      />
      <button className="btn btn-primary" onClick={focusOnClick}>
        Set focus
      </button>
    </>
  );
};
