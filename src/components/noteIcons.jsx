import React, { Component } from 'react'
import IconButton from "@mui/material/IconButton";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import SimplePopper from "src/components/colorPopper"
import NoteMenuPopper from "./noteMenuPopper";
import { changeColor } from "src/service/noteService";
import { addNoteToArchive } from "src/service/noteService";
import { trashNote } from "src/service/noteService";
import 'src/components/viewNotes/viewNotes.scss'

class NoteIcons extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color: '',
            isArchived: false,
            isDeleted: false,
        };
    }

    // Method to change note color
    changeNoteColor = (id, color = "#fff") => {
        let noteData = {
            noteIdList: [id],
            color: color,
        }

        changeColor(noteData).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.warn(error);
        })
    }

    // Method to archive notes
    archiveNote = (id) => {
        this.setState({
            isArchived: !this.state.isArchived
        })

        let noteData = {
            noteIdList: [id],
            isArchived: this.state.isArchived,
        }

        console.log(noteData);
        addNoteToArchive(noteData).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.warn(error);
        })
    }

    // Method to trash notes
    deleteNote = (id) => {
        this.setState({
            isDeleted: !this.state.isDeleted
        })

        let noteData = {
            noteIdList: [id],
            isDeleted: this.state.isDeleted,
        };
        console.log(noteData);
        trashNote(noteData).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.warn(error);
        })
    }

    render() {
        const { note } = this.props;
        return (
            <div className="note-icons">

                {/*------- Icons ------- */}
                <IconButton sx={{ p: "5px" }} >
                    <AddAlertOutlinedIcon fontSize="small" />
                </IconButton>

                <IconButton sx={{ p: "5px" }}>
                    <PersonAddAlt1OutlinedIcon fontSize="small" />
                </IconButton>

                {/* -------- color popper -------- */}
                <SimplePopper changeNoteColor={(color) => this.changeNoteColor(note.id, color)}
                    listenToMouseOver={this.props.listenToMouseOver} />

                <IconButton sx={{ p: "5px" }}>
                    <ImageOutlinedIcon fontSize="small" />
                </IconButton>

                <IconButton sx={{ p: "5px" }} onClick={() => this.archiveNote(note.id)}>
                    <ArchiveOutlinedIcon fontSize="small" />
                </IconButton>

                {/* -------- Note menu popper -------- */}
                <NoteMenuPopper deleteNote={() => this.deleteNote(note.id)} />
            </div>
        )
    }
}

export default NoteIcons
