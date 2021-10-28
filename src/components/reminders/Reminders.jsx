import React, { Component } from 'react'
import updatedComponent from '../HOC.jsx';
import TakeNoteOne from "../takeNote/TakeNoteOne.jsx";
import TakeNoteTwo from "../takeNote/TakeNoteTwo.jsx";
import ViewNotes from "../viewNotes/viewNotes";

class Reminders extends Component {
    render() {
        const { takeNoteOpen, handleTakeNote } = this.props
        return (
            <div style={styles}>
                {takeNoteOpen ? (
                    <TakeNoteOne handleTakeNote={handleTakeNote} />
                ) : (
                    <TakeNoteTwo handleTakeNote={handleTakeNote} />
                )}
                <div className="dash-view-note-container">
                    <ViewNotes />
                </div>
            </div>
        )
    }
}

const styles = {
    width: "80%",
    display: "flex",
    flexDirection: "column",

    flexWrap: "wrap",
    border: "1px solid red"
}

export default updatedComponent(Reminders);
