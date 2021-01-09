import React, { Component } from "react";

export default class RegistrationForm extends Component {
  //event handler to process submission of the form
  handleSubmit(event) {
    event.preventDefault();
    // you can access the values in the form by using the event object
    const name = event.target.name.value;
    const password = event.target.password.value;
    console.log("Name: ", name);
    console.log("Password: ", password);
  }

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
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password *</label>
            <input
              type="password"
              className="registration__control"
              name="password"
              id="password"
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
