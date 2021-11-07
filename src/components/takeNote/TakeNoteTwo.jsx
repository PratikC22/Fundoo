import React, { Component } from "react";
import { Paper } from "@mui/material";
import { makeStyles, withStyles } from "@mui/styles";
import { InputBase } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import UndoOutlinedIcon from "@mui/icons-material/UndoOutlined";
import RedoOutlinedIcon from "@mui/icons-material/RedoOutlined";
import { takeNoteRequest } from "src/service/noteService";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper"
import "./TakeNoteTwo.scss";

class TakeNoteTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      color: "#fff",
      isArchived: false,
      anchorEl: null
    };
  }

  // Method to change value in state
  handleChange = (input) => (event) => {
    this.setState({
      [input]: event.target.value,
    });
  };

  // Method to switch to takeNoteOne
  handleTakeNote = () => {
    this.props.handleTakeNote();
  };

  // Toggle isArchived state true
  handleIsArchive = () => {
    this.setState({
      isArchived: !this.state.isArchived
    }, () => console.log(this.state.isArchived))
  }

  // Method to submit note
  handleSubmit = () => {
    const { title, description, isArchived, color } = this.state;
    const obj = {
      title: title,
      description: description,
      color: color,
      isArchived: isArchived
    };

    this.handleTakeNote();
    title !== "" &&
      takeNoteRequest(obj)
        .then((response) => {
          console.log(response);
          console.log(obj);
          this.props.addToDashboardNotes(obj);
        })
        .catch((error) => {
          console.warn(error);
        });
  };

  // Show color popper when mouse hovered
  handleMouseOver = (event) => {
    this.setState({
      anchorEl: event.currentTarget
    });
  };

  // Hide color popper when mouse is not hovered
  handleMouseLeave = () => {
    this.setState({
      anchorEl: null
    });
  };

  // Change color when user selects a color in popper
  handleChangeColor = (color) => {
    this.setState({
      color: color
    }, () => console.log(this.state.color))
  }

  render() {
    const { classes } = this.props;
    const open = Boolean(this.state.anchorEl);
    const id = open ? "simple-popper" : undefined;
    const colors = ["#fff", "#f28b82", "#fbbc04", "#fff475", "#ccff90", "#a7ffeb",
      "#cbf0f8", "#aecbfa", "#d7aefb", "#fdcfe8", "#e6c9a8", "#e8eaed"]

    return (
      <div className="take-note-two-main-container">
        <Paper
          className="take-a-note-two-content"
          elevation={2}
          style={paperStyle}
        >

          {/* ----------- Title ----------- */}
          <div className="take-a-note-two">
            <InputBase
              className={classes.input}
              fullWidth
              placeholder="Title"
              onChange={this.handleChange("title")}
            />

            {/* ----------- Description ----------- */}
            <InputBase
              className={classes.input}
              multiline
              fullWidth
              onChange={this.handleChange("description")}
              placeholder="Take a note..."
            />
          </div>

          {/* ----------- Icons ----------- */}
          <div className="take-note-bottom">
            <div className="take-note-bottom-icons">
              <IconButton sx={{ p: "10px" }}>
                <AddAlertOutlinedIcon fontSize="small" />
              </IconButton>

              <IconButton sx={{ p: "10px" }}>
                <PersonAddAlt1OutlinedIcon fontSize="small" />
              </IconButton>

              <IconButton sx={{ p: "10px" }}
                onMouseOver={this.handleMouseOver}
                onMouseLeave={this.handleMouseLeave}>
                <ColorLensOutlinedIcon fontSize="small" />
                <Popper
                  id={id} open={open} anchorEl={this.state.anchorEl} placement="top"
                >
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
                          onClick={() => this.handleChangeColor(color)}
                        />
                      </div>
                    ))}
                  </Paper>
                </Popper>
              </IconButton>

              <IconButton sx={{ p: "10px" }}>
                <ImageOutlinedIcon fontSize="small" />
              </IconButton>

              <IconButton sx={{ p: "10px" }} onClick={this.handleIsArchive}>
                <ArchiveOutlinedIcon fontSize="small" />
              </IconButton>

              <IconButton sx={{ p: "10px" }}>
                <MoreVertOutlinedIcon fontSize="small" />
              </IconButton>

              <IconButton disabled sx={{ p: "10px" }}>
                <UndoOutlinedIcon fontSize="small" />
              </IconButton>

              <IconButton disabled sx={{ p: "10px" }}>
                <RedoOutlinedIcon fontSize="small" />
              </IconButton>
            </div>

            {/* ----------- Close button ----------- */}
            <div className="take-note-close">
              <div className="close">
                <IconButton
                  size="small"
                  sx={{ p: "4px" }}
                  onClick={this.handleSubmit}
                >
                  close
                </IconButton>
              </div>
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "8px 8px",
    display: "flex",
    width: 200,
    height: 200,
  },
  input: {
    flex: 1,
  },
}));

const paperStyle = {
  display: "flex",
  justifyContent: "space-Between",
  padding: "12px 20px 0 20px",
  minHeight: 130,
  // width: 600,
  borderRadius: "5px",
  // border: "1px solid red",
};

const colorItem = {
  border: "1px solid",
  width: "28px",
  height: "28px",
  borderRadius: "50%",
  margin: "1px",
  cursor: "pointer",
  opacity: "0.7",
}

export default withStyles(useStyles)(TakeNoteTwo);
