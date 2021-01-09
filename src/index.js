import React from "react";
import ReactDOM from "react-dom";
import "./Styles/index.css";
import App from "./Components/App";
import RegistrationForm from "./Components/RegistrationForm";

ReactDOM.render(
  <React.StrictMode>
    <RegistrationForm />
  </React.StrictMode>,
  document.getElementById("root")
);
