import React, { Component } from "react";

import { signInWithGoogle } from "../../firebase/firebaseUtil.js";

import FormInput from "components/form-input/formInput";
import CustomButton from "components/customButton/customButton";
import "./signin.scss";

class signin extends Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      email: "",
      password: "",
    });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <div className='buttons'>
          <CustomButton type="submit"> Submit form</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSingIn>
            {" "}
            Sign in with Google
          </CustomButton>
            </div>
        </form>
      </div>
    );
  }
}

export default signin;
