import React, { Component } from "react";
import { Paper } from "@mui/material";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import IconButton from "@mui/material/IconButton";

class TakeNoteOne extends Component {
    handleTakeNote = () => {
        this.props.handleTakeNote();
    };

    render() {
        return (
            <div
                className="take-note-main-container"
                onClick={this.handleTakeNote}
            >
                <Paper
                    className="take-a-note-content"
                    elevation={2}
                    style={paperStyle}
                >
                    <div className="take-a-note">Take a note...</div>
                    <div className="take-a-note-icons">
                        <IconButton sx={{ p: "10px" }}>
                            <CheckBoxOutlinedIcon />
                        </IconButton>

                        <IconButton sx={{ p: "10px" }}>
                            <BrushOutlinedIcon />
                        </IconButton>

                        <IconButton sx={{ p: "10px" }}>
                            <ImageOutlinedIcon />
                        </IconButton>
                    </div>
                </Paper>
            </div>
        );
    }
}

const paperStyle = {
    display: "flex",
    justifyContent: "space-Between",
    alignItems: "center",
    padding: 20,
    height: 50,
    // width: 600,
    borderRadius: "5px",
    // border: "1px solid red",
};

export default TakeNoteOne;
