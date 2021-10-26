import React, { Component } from "react";
import { TextField, Button, Checkbox, FormControlLabel } from "@mui/material";
import { Link } from "react-router-dom";
import { signUpRequest } from "src/service/userService";
import "./signUp.scss";

const firstNameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const lastNameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passwordRegex =
  /^(?=.*[A-Z])(?=.*[a-z])(?=[^!@#$%^&+=]*[!@#$%^&+=][^!@#$%^&+=]*$)(?=.*[0-9]).{8,}$/;

class signUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      service: "Basic",
      email: "",
      password: "",
      confirmPassword: "",

      showPassword: false,

      errorFirstName: false,
      errorLastName: false,
      errorEmail: false,
      errorPassword: false,
      errorConfirmPassword: false,

      helperTextFirstName: "",
      helperTextLastName: "",
      helperTextEmail: "",
      helperTextPassword: "",
      helperTextConfirmPassword: "",
    };
  }

  handleChange = (input) => (event) => {
    this.setState({
      [input]: event.target.value,
    });
  };

  handleInvalidState = (check, hText, err, msg) => {
    if (check) {
      this.setState({
        [hText]: "",
        [err]: false,
      });
    } else {
      this.setState({
        [hText]: msg,
        [err]: true,
      });
    }
  };

  handleValidation = () => {
    const { firstName, lastName, email, password, confirmPassword } =
      this.state;

    const checkFirstName = firstNameRegex.test(firstName);
    const checkLastName = lastNameRegex.test(lastName);
    const checkEmail = emailRegex.test(email);
    const checkPassword = passwordRegex.test(password);
    const validatePass = password === confirmPassword;

    this.handleInvalidState(
      checkFirstName,
      "helperTextFirstName",
      "errorFirstName",
      "Invalid format for first name"
    );
    this.handleInvalidState(
      checkLastName,
      "helperTextLastName",
      "errorLastName",
      "Invalid format for last name"
    );
    this.handleInvalidState(
      checkEmail,
      "helperTextEmail",
      "errorEmail",
      "Invalid format for email"
    );
    this.handleInvalidState(
      checkPassword,
      "helperTextPassword",
      "errorPassword",
      "Invalid format for password"
    );
    this.handleInvalidState(
      validatePass,
      "helperTextConfirmPassword",
      "errorConfirmPassword",
      "Passwords do not match"
    );

    return (
      checkFirstName &&
      checkLastName &&
      checkEmail &&
      checkPassword &&
      validatePass
    );
  };

  handleClickShowPassword = () => {
    this.setState({
      showPassword: !this.state.showPassword,
    });
  };

  handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const valid = this.handleValidation();
    const { firstName, lastName, service, email, password } = this.state;
    let obj = { firstName, lastName, service, email, password };

    valid &&
      signUpRequest(obj)
        .then((response) => {
          console.log(response);
          (response.status === 200) && alert("You have sucessesfully signed up")
        })
        .catch((error) => {
          console.warn(error);
        });
  };

  render() {
    return (
      <div className="signup-container">
        <div className="signup-content">
          <div className="signup-left">
            <div className="google-logo">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                width="75"
                alt="logo"
              />
            </div>

            <div className="signup-header-text">Create your Google Account</div>

            <div className="signup-form-container">
              <div className="signup-name">
                <div className="signup-firstName">
                  <TextField
                    id="first-name"
                    label="First Name"
                    variant="outlined"
                    size="small"
                    required
                    error={this.state.errorFirstName}
                    helperText={this.state.helperTextFirstName}
                    onChange={this.handleChange("firstName")}
                    fullWidth
                  ></TextField>
                </div>

                <div className="signup-lastName">
                  <TextField
                    id="last-name"
                    label="Last Name"
                    variant="outlined"
                    size="small"
                    required
                    error={this.state.errorLastName}
                    helperText={this.state.helperTextLastName}
                    onChange={this.handleChange("lastName")}
                    fullWidth
                  ></TextField>
                </div>
              </div>

              <div className="signup-email-container">
                <div className="signup-email">
                  <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    size="small"
                    fullWidth
                    onChange={this.handleChange("email")}
                    error={this.state.errorEmail}
                    helperText={this.state.helperTextEmail}
                    required
                  ></TextField>
                </div>

                <div className="signup-email-instructions">
                  You can use letters, numbers & periods
                </div>
              </div>

              <div className="signup-password-container">
                <div className="signup-password">
                  <TextField
                    id="password"
                    label="Password"
                    variant="outlined"
                    size="small"
                    type={this.state.showPassword ? "text" : "password"}
                    value={this.state.password}
                    fullWidth
                    onChange={this.handleChange("password")}
                    error={this.state.errorPassword}
                    helperText={this.state.helperTextPassword}
                    required
                  ></TextField>
                </div>
                <div className="signup-confirm-password">
                  <TextField
                    id="confirm-password"
                    label="Confirm"
                    variant="outlined"
                    size="small"
                    type={this.state.showPassword ? "text" : "password"}
                    value={this.state.confirmPassword}
                    onChange={this.handleChange("confirmPassword")}
                    error={this.state.errorConfirmPassword}
                    helperText={this.state.helperTextConfirmPassword}
                    fullWidth
                    required
                  ></TextField>
                </div>
              </div>

              <div className="signup-password-insruction">
                Use 8 or more characters with mix of letters, numbers & symbols
              </div>

              <div className="signup-checkbox">
                <FormControlLabel
                  control={<Checkbox onClick={this.handleClickShowPassword} />}
                  label="Show Password"
                />
              </div>

              <div className="signup-choice">
                <div className="signup-signIn-instead">
                  <Link
                    id="sign-in-link"
                    underline="none"
                    to="/"
                    className="sign-in"
                  >
                    Sign in instead
                  </Link>
                </div>

                <div className="signup-button">
                  <Button onClick={this.handleSubmit} variant="contained">
                    Sign Up
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="signup-right">
            <div className="google-logo2">
              <img
                src="https://ssl.gstatic.com/accounts/signup/glif/account.svg"
                alt="logo"
              />
            </div>

            <div className="signup-some-text">
              All of Google working for you
            </div>
          </div>
        </div>

        <div className="signup-footer">
          <div className="languages">English (India)</div>

          <div className="links">
            <Link to="">Help</Link>
            <Link to="">Privacy</Link>
            <Link to="">Terms</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default signUp;
