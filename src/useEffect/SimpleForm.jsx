import { useForm } from "./hooks/useForm";
import { Message } from "./Message";

export const SimpleForm = () => {
  const { state, handleInputChange, handleResetInputs } = useForm({
    username: "",
    email: "",
    password: "",
  });

  return (
    <>
      <h1>useEffect</h1>
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={state.username}
        onChange={handleInputChange}
      />
      {state.username === "jorgescript" && <Message />}
      <input
        type="email"
        className="form-control"
        placeholder="jorge@email.com"
        name="email"
        value={state.email}
        onChange={handleInputChange}
      />
      <input
        type="password"
        className="form-control"
        name="password"
        value={state.password}
        onChange={handleInputChange}
      />
      <button onClick={handleResetInputs} className="btn btn-secondary">
        Reset inputs
      </button>
    </>
  );
};
