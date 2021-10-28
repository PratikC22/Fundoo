import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logInRequest } from "src/service/userService";
import {
  TextField,
  Button,
  IconButton,
  InputLabel,
  FormControl,
  OutlinedInput,
  InputAdornment,
} from "@mui/material/";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "./signIn.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      showPassword: false,
    };
  }

  // Method to update values in state
  handleChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
    });
  };

  // Toggle password visibility
  handleClickShowPassword = () => {
    this.setState({
      showPassword: !this.state.showPassword,
    });
  };

  // Prevent default
  handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // Submit on click
  handleSubmit = (e) => {
    const { email, password } = this.state;
    const obj = { email, password };
    e.preventDefault();

    // Axios post request
    logInRequest(obj)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          console.log(this.props);
          this.props.history.push("/home");
        }
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  render() {
    return (
      <div className="signin-container" data-testid="signIn-1">
        <div className="signin-border-container">
          <div className="signin-content">
            <div className="signin-google-logo">

              {/*------- Google logo ------- */}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                width="75"
                alt=""
              />
            </div>

            {/*------- Google header ------- */}
            <div className="signin-header-sub-header-text">
              <div className="signin-header-text" id="signin-header">
                Sign In
              </div>
              <div className="signin-sub-header-text">Continue to Google</div>
            </div>

            <form onSubmit={this.handleSubmit}>
              <div className="signin-email-password">

                {/*------- email input field ------- */}
                <div className="signin-email">
                  <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    size="small"
                    fullWidth
                    onChange={this.handleChange("email")}
                    required
                  ></TextField>
                </div>

                {/*------- email password input field ------- */}
                <div className="signin-password">
                  <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      size="small"
                      fullWidth
                      sx={{ mb: 1, mt: 1 }}
                      type={this.state.showPassword ? "text" : "password"}
                      value={this.state.password}
                      onChange={this.handleChange("password")}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={this.handleClickShowPassword}
                            onMouseDown={this.handleMouseDownPassword}
                            edge="end"
                          >
                            {this.state.showPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>
                </div>
              </div>

              {/*------- forgot password link ------- */}
              <div className="signin-forgot-reset-password">
                <div className="signin-forgot-password">
                  <Link id="fPassword" to="/forgotPassword">
                    Forgot password?
                  </Link>
                </div>
                <div className="signin-reset-password">
                  <Link id="res-Pass" to="/ResetFundooPassword">
                    Reset Password
                  </Link>
                </div>
              </div>

              <div className="sigin-browse-privately">
                <div className="signin-some-text">
                  Not your computer? Use Guest mode to sign in privately.
                </div>
                <div className="learn-more">
                  <Link
                    id="learn-more-link"
                    underline="none"
                    to="/"
                    className="sign-in"
                  >
                    Learn more
                  </Link>
                </div>
              </div>

              <div className="signin-choice">
                <div className="signin-create-acc">
                  <Link
                    id="sign-up-link"
                    underline="none"
                    to="/signUp"
                    className="sign-in"
                  >
                    Create account
                  </Link>
                </div>

                {/*------- Sign in button ------- */}
                <div className="signin-btn">
                  <Button variant="contained" type="submit">
                    Sign In
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="signin-footer">
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

export default SignIn;
