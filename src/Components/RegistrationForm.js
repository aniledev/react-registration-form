import React, { Component } from "react";

export default class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // WHY IS THIS AN OBJECT OF OBJECTS, INSTEAD OF ONE THIS.STATE OBJECT WITH MULTIPLE KEY VALUE PAIRS
      name: {
        value: "",
      },
      password: {
        value: "",
      },
      repeatPassword: {
        value: "",
      },
    };
  }
  updateName(name) {
    this.setState({ name: { value: name } });
  }

  updatePassword(password) {
    this.setState({ password: { value: password } });
  }

  updateRepeatPassword(repeatPassword) {
    this.setState({ repeatPassword: { value: repeatPassword } });
  }

  //methods to validate fields
  validateName() {
    const name = this.state.name.value.trim();
    if (name.length === 0) {
      return "Name is required.";
    } else if (name.length < 3) {
      return "Name must be at least 3 characters long";
    }
  }
  validatePassword() {
    const password = this.state.password.value.trim();
    if ((password.length = 0)) {
      return "Password is required.";
    }
    if (password.length < 6 || password.length > 72) {
      return "Password must be between 6 and 72 characters long.";
    } else if (!password.match(/[0-9]/)) {
      // use a regular expression to check if the password contains at least one number
      return "Password must contain at least one number.";
    }
  }
  validateRepeatPassword() {
    const repeatPassword = this.state.repeatPassword.value.trim();
    const password = this.state.password.value.trim();
    if (repeatPassword !== password) {
      return "Passwords do not match.";
    }
  }

  //event handler to process submission of the form
  handleSubmit(event) {
    event.preventDefault();
    // with a controlled form you can grab the values directly from the state
    const { name, password, repeatPassword } = this.state;
    console.log("Name: ", name.value);
    console.log("Password: ", password.value);
    console.log("Repeat Password: ", repeatPassword.value);
    // if these values pass the validation then potential submit these values to the server
  }

  // THIS IS AN UNCONTROLLED FORM BECAUSE THE STATE OF THE FORM IS NOT KEPT AND MAINTAINED IN THE REACT STATE; THE VALUES OF THE FORM ARE STORED IN THE DOM ITSELF
  render() {
    return (
      <div className="RegistrationForm">
        <form className="registration" onSubmit={(e) => this.handleSubmit(e)}>
          <h2>Register</h2>
          <div className="registration__hint">* required field</div>
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              className="registration__control"
              name="name"
              id="name"
              defaultValue="Frank"
              onChange={(e) => this.updateName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password *</label>
            <input
              type="password"
              className="registration__control"
              name="password"
              id="password"
              onChange={(e) => this.updatePassword(e.target.value)}
            />
            <div className="registration__hint">
              6 to 72 characters, must include a number
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="repeatPassword">Repeat Password *</label>
            <input
              type="password"
              className="registration__control"
              name="repeatPassword"
              id="repeatPassword"
              onChange={(e) => this.updateRepeatPassword(e.target.value)}
            />
          </div>

          <div className="registration__button__group">
            <button type="reset" className="registration__button">
              Cancel
            </button>
            <button type="submit" className="registration__button">
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}
