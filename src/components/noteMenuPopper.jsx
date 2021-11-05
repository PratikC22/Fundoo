import * as React from 'react';
import Popper from '@mui/material/Popper';
import { Paper } from '@mui/material';
import IconButton from "@mui/material/IconButton";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { ClickAwayListener } from "@mui/material";

export default function NoteMenuPopper({ deleteNote }) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const handleDeleteNote = () => {
        deleteNote();
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;
    return (

        <div>
            {/* -------- button -------- */}
            <IconButton sx={{ p: "5px" }} onClick={handleClick}>
                <MoreVertOutlinedIcon fontSize="small" />
            </IconButton>

            {/* -------- popper content -------- */}
            <Popper id={id} open={open} anchorEl={anchorEl} placement="bottom-start">
                <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
                    <Paper elevation={2} sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                        <li style={{ cursor: "pointer", listStyle: "none" }} onClick={handleDeleteNote}>Delete Note</li>
                        <li style={{ cursor: "pointer", listStyle: "none" }}>Add label</li>
                        <li style={{ cursor: "pointer", listStyle: "none" }}>Add drawing</li>
                        <li style={{ cursor: "pointer", listStyle: "none" }}>Make a copy</li>
                        <li style={{ cursor: "pointer", listStyle: "none" }}>Show tick boxes</li>
                        <li style={{ cursor: "pointer", listStyle: "none" }}>Copy to Google docs</li>
                    </Paper>
                </ClickAwayListener>
            </Popper>
        </div>
    );
}

