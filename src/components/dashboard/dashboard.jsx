import React, { Component } from "react";
import TakeNoteOne from "../takeNote/TakeNoteOne.jsx";
import TakeNoteTwo from "../takeNote/TakeNoteTwo.jsx";
import "./dashboard.scss";
import ViewNotes from "../viewNotes/viewNotes";
import updatedComponent from "../HOC.jsx";

class dashboard extends Component {
    render() {
        const { takeNoteOpen, handleTakeNote } = this.props
        return (
            <div className="notes-container" style={{ width: "80%", display: "flex", flexWrap: "wrap" }}>
                <div className="dash-take-note-container">
                    {takeNoteOpen ? (
                        <TakeNoteOne handleTakeNote={handleTakeNote} />
                    ) : (
                        <TakeNoteTwo handleTakeNote={handleTakeNote} />
                    )}
                    <div className="dash-view-note-container">
                        <ViewNotes />
                    </div>
                </div>
            </div>
        );
    }
}

export default updatedComponent(dashboard)
