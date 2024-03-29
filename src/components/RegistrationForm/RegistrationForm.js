import React, { Component } from "react";
import { Button, Input, Required } from "../Utils/Utils";
import AuthApiService from "../../services/auth-api-service";

export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  };

  state = { error: null };

  handleSubmit = ev => {
    ev.preventDefault();
    const { username, fullname, password } = ev.target;

    this.setState({ error: null });

    AuthApiService.postUser({
      fullname: fullname.value,
      username: username.value,
      password: password.value
    })
      .then(user => {
        username.value = "";
        fullname.value = "";
        password.value = "";
        this.props.onRegistrationSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <form className="RegistrationForm" onSubmit={this.handleSubmit}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="FullName">
          <label htmlFor="RegistrationFormFullName">
            Full name <Required />
          </label>
          <Input
            name="fullname"
            type="text"
            placeholder="Test User"
            required
            id="RegistrationFormFullName"
          ></Input>
        </div>
        <div className="UserName">
          <label htmlFor="RegistrationFormUserName">
            User name <Required />
          </label>
          <Input
            name="username"
            type="text"
            placeholder="testuser"
            required
            id="RegistrationFormUserName"
          ></Input>
        </div>
        <div className="password">
          <label htmlFor="RegistrationFormPassword">
            Password <Required />
          </label>
          <Input
            name="password"
            type="password"
            placeholder="Testuser3!"
            required
            id="RegistrationFormPassword"
          ></Input>
          <p>*Password must contain 8 characters, one uppercase letter, one number, and one special character</p>
        </div>
        <Button type="submit" className="LoginButton">Register</Button>
      </form>
    );
  }
}
