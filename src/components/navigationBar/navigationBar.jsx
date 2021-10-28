import React, { Component } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import ViewStreamOutlinedIcon from "@mui/icons-material/ViewStreamOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { Box } from "@mui/system";
import "./navigationBar.scss";
import LogoutPopup from "../logoutPopup";

class NavigationBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    // Toggle state open close
    handleClick = () => {
        this.setState({
            open: !this.state.open
        });
    };

    // close on click away
    handleClickAway = () => {
        this.setState({
            open: false
        });
    };

    // handle drawer open close from button in navbar
    handleDrawerToggle = () => {
        this.props.handleDrawerToggle();
    };


    render() {
        return (
            <React.Fragment>
                <div className="navbar-container">
                    <div className="navbar-sec1">
                        <div className="navbar-sec1-item1">
                            <IconButton sx={{ p: "10px" }} onClick={this.handleDrawerToggle}>
                                <MenuIcon style={{ color: "grey" }} />
                            </IconButton>
                        </div>

                        <div className="navbar-sec1-item2">
                            {/*------- fundoo image ------- */}
                            <img
                                className=""
                                src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
                                srcSet="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png 1x, 
                            https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png 2x "
                                alt=""
                                aria-hidden="true"
                                style={{ width: "40px", height: "40px" }}
                            ></img>
                        </div>

                        <div className="navbar-sec1-item3">
                            <h3>Fundoo</h3>
                        </div>
                    </div>

                    <div className="navbar-sec2">
                        <div className="navbar-sec2-item2">
                            <Paper
                                component="form"
                                sx={{
                                    p: "2px 4px",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                {/*------- Search ------- */}
                                <IconButton sx={{ p: "10px" }} aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                                <InputBase
                                    className="navbar-input"
                                    sx={{ ml: 1, flex: 1 }}
                                    placeholder="Search"
                                    inputProps={{ "aria-label": "search google maps" }}
                                />
                            </Paper>
                        </div>
                    </div>

                    {/*------- Navigation bar icons ------- */}
                    <div className="navbar-sec3">
                        <IconButton sx={{ p: "10px" }}>
                            <RefreshOutlinedIcon />
                        </IconButton>

                        <IconButton sx={{ p: "10px" }}>
                            <ViewStreamOutlinedIcon />
                        </IconButton>

                        <IconButton sx={{ p: "10px" }}>
                            <SettingsOutlinedIcon />
                        </IconButton>

                        <div className="navbar-sec3-item3-and-item4-combine">
                            <div className="navbar-sec3-item4-icon">
                                <IconButton sx={{ p: "10px" }}>
                                    <AppsOutlinedIcon />
                                </IconButton>
                            </div>
                            <div className="navbar-sec3-item4-profile">
                                <ClickAwayListener
                                    mouseEvent="onMouseDown"
                                    touchEvent="onTouchStart"
                                    onClickAway={this.handleClickAway}
                                >
                                    <Box sx={{ position: "relative" }}>
                                        <img
                                            className="profile"
                                            src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg"
                                            alt=""
                                            aria-hidden="true"
                                            style={{ width: "28px", height: "28px" }}
                                            onClick={this.handleClick}
                                        ></img>
                                        {this.state.open ? (
                                            <LogoutPopup />
                                        ) : null}
                                    </Box>
                                </ClickAwayListener>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default NavigationBar;
