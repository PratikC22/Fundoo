import React, { Component } from 'react'
import { Paper, Button } from '@mui/material'

class logoutPopup extends Component {
    render() {
        return (
            <div>
                <Paper elevation={2} style={paperStyle}>
                    <div className="logout-img">
                        <img
                            className="logout-profile"
                            src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg"
                            alt=""
                            aria-hidden="true"
                            style={{ width: "40px", height: "40px" }}
                            onClick={this.handleClick}
                        ></img>
                    </div>
                    <div className="logout-btn">
                        <Button>
                            Logout
                        </Button>
                    </div>
                </Paper>
            </div>
        )
    }
}

const paperStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    height: 300,
    width: 250
}

export default logoutPopup
