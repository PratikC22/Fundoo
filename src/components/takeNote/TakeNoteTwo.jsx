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
import "./TakeNoteTwo.scss";
import { takeNoteRequest } from "src/service/noteService";


class TakeNoteTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      isArchived: false,
    };
  }

  handleChange = (input) => (event) => {
    this.setState({
      [input]: event.target.value,
    });
  };

  handleTakeNote = () => {
    this.props.handleTakeNote();
  };

  handleSubmit = () => {
    const { title, description, isArchived } = this.state;
    const obj = {
      title: title,
      description: description,
      isArchived: isArchived
    };
    this.handleTakeNote();
    title !== "" &&
      takeNoteRequest(obj)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.warn(error);
        });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="take-note-two-main-container">
        <Paper
          className="take-a-note-two-content"
          elevation={2}
          style={paperStyle}
        >
          <div className="take-a-note-two">
            <InputBase
              className={classes.input}
              fullWidth
              placeholder="Title"
              onChange={this.handleChange("title")}
            />
            <InputBase
              className={classes.input}
              multiline
              fullWidth
              onChange={this.handleChange("description")}
              placeholder="Take a note..."
            />
          </div>
          <div className="take-note-bottom">
            <div className="take-note-bottom-icons">
              <IconButton sx={{ p: "10px" }}>
                <AddAlertOutlinedIcon fontSize="small" />
              </IconButton>

              <IconButton sx={{ p: "10px" }}>
                <PersonAddAlt1OutlinedIcon fontSize="small" />
              </IconButton>

              <IconButton sx={{ p: "10px" }}>
                <ColorLensOutlinedIcon fontSize="small" />
              </IconButton>

              <IconButton sx={{ p: "10px" }}>
                <ImageOutlinedIcon fontSize="small" />
              </IconButton>

              <IconButton sx={{ p: "10px" }}>
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

export default withStyles(useStyles)(TakeNoteTwo);
