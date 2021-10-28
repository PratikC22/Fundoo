import React, { Component } from "react";
import TakeNoteOne from "../takeNote/TakeNoteOne.jsx";
import TakeNoteTwo from "../takeNote/TakeNoteTwo.jsx";
import "./dashboard.scss";
import ViewNotes from "../viewNotes/viewNotes";
import updatedComponent from "../HOC.jsx";

class dashboard extends Component {
    render() {
        // Destructuring props
        const { takeNoteOpen, handleTakeNote } = this.props
        return (
            <div className="notes-container" style={{ width: "80%", display: "flex", flexWrap: "wrap" }}>
                <div className="dash-take-note-container">

                    {/* ------ Conditional rendering of Take note ------ */}
                    {takeNoteOpen ? (
                        <TakeNoteOne handleTakeNote={handleTakeNote} />
                    ) : (
                        <TakeNoteTwo handleTakeNote={handleTakeNote} />
                    )}

                    {/* ------ View Notes component ------ */}
                    <div className="dash-view-note-container">
                        <ViewNotes />
                    </div>
                </div>
            </div>
        );
    }
}

export default updatedComponent(dashboard)
