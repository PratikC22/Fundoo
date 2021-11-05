import * as React from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import { ClickAwayListener } from "@mui/material";
import { Paper, Button } from '@mui/material'
import { useHistory } from 'react-router-dom'

export default function SimplePopper() {
    const history = useHistory()
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const handleSignOut = () => {
        localStorage.removeItem("fundooToken");
        history.push('/');
    }

    const open = Boolean(anchorEl);
    const id = open ? "simple-popper" : undefined;

    return (
        <div>
            <img
                className="profile"
                src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg"
                alt=""
                aria-hidden="true"
                style={{ width: "28px", height: "28px" }}
                onClick={handleClick}
            ></img>

            <Popper id={id} open={open} anchorEl={anchorEl} placement="bottom">
                <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
                    <Box sx={{ p: 1, bgcolor: "background.paper" }}>
                        <Paper elevation={2} style={paperStyle}>
                            <div className="logout-img">
                                {/* -------- profile image sample -------- */}
                                <img
                                    className="logout-profile"
                                    src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg"
                                    alt=""
                                    aria-hidden="true"
                                    style={{ width: "40px", height: "40px" }}
                                ></img>
                            </div>

                            {/* -------- logout button -------- */}
                            <div className="logout-btn">
                                <Button
                                    onClick={handleSignOut}
                                    variant="contained">
                                    Logout
                                </Button>
                            </div>
                        </Paper>
                    </Box>
                </ClickAwayListener>
            </Popper>
        </div>
    );
}

const paperStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    height: 300,
    width: 250
}