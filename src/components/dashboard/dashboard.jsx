import React, { Component } from "react";
import TakeNoteOne from "../takeNote/TakeNoteOne.jsx";
import TakeNoteTwo from "../takeNote/TakeNoteTwo.jsx";
import "./dashboard.scss";
import ViewNotes from "../viewNotes/viewNotes";
import updatedComponent from "../HOC.jsx";
import { requestData } from "src/service/noteService";

class dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            dashboardNotes: [],
        };
    }

    // Get all notes once component is mounted
    componentDidMount() {
        this.getAllNotes();
    }

    // Get all notes on click
    getAllNotes = async () => {
        await requestData()
            .then((dataArray) => {
                this.setState({
                    data: dataArray,
                });
                this.getDashboardNotes();
            })
            .catch((error) => {
                console.warn(error);
            });
    };

    // Filter notes
    getDashboardNotes = () => {
        const notes = this.state.data.filter(data => {
            return (!data.isArchived && !data.isDeleted)
        });
        this.setState({
            dashboardNotes: notes
        })
    }

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
                    {
                        this.state.dashboardNotes.map((note) => {
                            return <ViewNotes key={note.id} note={note} />
                        })
                    }
                </div>
            </div>
        );
    }
}

export default updatedComponent(dashboard)
