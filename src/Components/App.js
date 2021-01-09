import React, { Component } from "react";
import "../Styles/App.css";
import RegistrationForm from "./RegistrationForm";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <RegistrationForm />
      </div>
    );
  }
}
