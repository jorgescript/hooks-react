import React from "react";
import ReactDOM from "react-dom/client";
import { HooksApp } from "./HooksApp";
import "./index.css";
import { SimpleForm } from "./useEffect/SimpleForm";
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
  </React.StrictMode>
);
