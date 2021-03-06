import React from "react";
import ReactDOM from "react-dom/client";
import { MultiplesHooks } from "./examples/MultiplesHooks";
import { HooksApp } from "./HooksApp";
import "./index.css";
import { SimpleForm } from "./useEffect/SimpleForm";
import { FocusScreen } from "./useRef/FocusScreen";
import { CounterApp } from "./useState/CounterApp";
import { CounterCustomHook } from "./useState/CounterCustomHook";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HooksApp />
    <CounterApp />
    <hr />
    <CounterCustomHook />
    <hr />
    <SimpleForm />
    <hr />
    <MultiplesHooks />
    <hr />
    <FocusScreen />
  </React.StrictMode>
);
