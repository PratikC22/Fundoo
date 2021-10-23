import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { resetpass } from 'src/service/userService';
import { Button, IconButton, InputLabel, FormControl, OutlinedInput, InputAdornment } from "@mui/material/";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import './ResetFundooPassword.scss'

class ResPass extends Component {

    constructor(props) {
        super(props)

        this.state = {
            password: '',
            showPassword: false
        }
    }

    componentDidMount() {
        // console.log(this.props);
        localStorage.setItem("token", this.props.match.params.token)
        // console.log(this.props.match.params.token);
    }

    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        })
    }

    handleClickShowPassword = () => {
        this.setState({
            showPassword: !this.state.showPassword
        });
    };

    handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { password } = this.state
        const obj = { newPassword: password }
        resetpass(obj).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
    }

    render() {
        return (
            <div className="res-pass-container">
                <div className="res-pass-border-container">
                    <div className="res-pass-content">
                        <div className="res-pass-google-logo">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                                width="75"
                                alt="" />
                        </div>

                        <div className="res-pass-header-sub-header-text">
                            <div className="res-pass-header-text">
                                Account recovery
                            </div>
                            <div className="res-pass-sub-header-text">
                                Recover your Google Account
                            </div>
                        </div>
                        <form onSubmit={this.handleSubmit}>

                            <div className="signin-password">
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">New Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        size='small'
                                        fullWidth sx={{ mb: 1, mt: 1 }}
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
                                                    {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password"
                                    />
                                </FormControl>
                            </div>

                            <div className="res-pass-forgot-email">
                                <Link
                                    id="fEmail"
                                    to=''>
                                    Forgot Email?
                                </Link>
                            </div>

                            <div className="res-pass-choice">
                                <div className="res-pass-create-acc">
                                    <Link
                                        id='sign-up-link'
                                        underline='none'
                                        to='/'
                                        className='sign-in' >
                                        Sign In
                                    </Link>
                                </div>

                                <div className="res-pass-btn">
                                    <Button
                                        onClick={this.handleSubmit}
                                        variant='contained'
                                        type='submit'>
                                        Next
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className='res-pass-footer'>
                    <div className='languages'>
                        English (India)
                    </div>

                    <div className='links'>
                        <Link to=''>Help</Link>
                        <Link to=''>Privacy</Link>
                        <Link to=''>Terms</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default ResPass

