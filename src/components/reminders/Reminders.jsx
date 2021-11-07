import React, { Component } from 'react'
import updatedComponent from '../HOC.jsx';
import TakeNoteOne from "../takeNote/TakeNoteOne.jsx";
import TakeNoteTwo from "../takeNote/TakeNoteTwo.jsx";

class Reminders extends Component {
    render() {
        // Destructuring props
        const { takeNoteOpen, handleTakeNote } = this.props
        return (
            <div className="dash-styles">

                {/* ------ Conditional rendering of Take note ------ */}
                {takeNoteOpen ? (
                    <TakeNoteOne handleTakeNote={handleTakeNote} />
                ) : (
                    <TakeNoteTwo handleTakeNote={handleTakeNote} />
                )}

                {/* ------ View Notes component ------ */}
                <div className="dash-view-note-container">
                    {/* <ViewNotes /> */}
                </div>
            </div>
        )
    }
}

export default updatedComponent(Reminders);
