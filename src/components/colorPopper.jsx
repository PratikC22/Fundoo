import * as React from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import IconButton from "@mui/material/IconButton";
import { Paper } from "@mui/material";

export default function SimplePopper({ changeNoteColor }) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMouseOver = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMouseLeave = () => {
        setAnchorEl(null);
    };

    const handleChangeColor = (color) => {
        changeNoteColor(color);
    }

    const open = Boolean(anchorEl);
    const id = open ? "simple-popper" : undefined;
    const colors = ["#fff", "#f28b82", "#fbbc04", "#fff475", "#ccff90", "#a7ffeb",
        "#cbf0f8", "#aecbfa", "#d7aefb", "#fdcfe8", "#e6c9a8", "#e8eaed"]
    return (
        <div className="color-popper-main"
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
        >
            <IconButton sx={{ p: "5px" }}

            >
                <ColorLensOutlinedIcon fontSize="small" />
            </IconButton>
            <Popper id={id} open={open} anchorEl={anchorEl} placement="top">
                <Paper elevation={2} sx={{
                    width: 140,
                    padding: 1,
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                }}
                >
                    {/* ---------- The content of the Popper ---------- */}
                    {colors.map((color) => (
                        <div key={color}>
                            <Box
                                sx={colorItem} id={color}
                                style={{ backgroundColor: `${color}` }}
                                onClick={() => handleChangeColor(color)}
                            />
                        </div>
                    ))}
                </Paper>
            </Popper>
        </div>
    );
}

const colorItem = {
    border: "1px solid",
    width: "28px",
    height: "28px",
    borderRadius: "50%",
    margin: "1px",
    cursor: "pointer",
    opacity: "0.7",
}
