import { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    console.log("Se monto el componente");
    const onMouseMove = (e) => {
      console.log(e);
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      console.log("Se desmonto el componente");
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <h3>El usuario ya existe</h3>
    </>
  );
};
