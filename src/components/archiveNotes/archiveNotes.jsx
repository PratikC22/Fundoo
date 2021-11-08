import React, { Component } from 'react'
import { getArchivedNotes } from 'src/service/noteService'
import ViewNotes from '../viewNotes/viewNotes'


class archiveNotes extends Component {

    constructor(props) {
        super(props)

        this.state = {
            archivedList: [],
            isArchived: false
        }
    }

    // Load archive notes once component is mounted
    componentDidMount() {
        getArchivedNotes().then((dataArray) => {
            this.setState({
                archivedList: dataArray.data.data.data
            })
            console.log(this.state.archivedList);
        }).catch((error) => {
            console.warn(error);
        });
    }

    // Method to remove note from archive
    removeFromArchive = (id) => {
        let note = {};
        for (let i = 0; i < this.state.archivedList.length; i++) {
            let obj = this.state.archivedList[i];
            if (obj.id === id) {
                note = obj;
            }
        }
        const index = this.state.archivedList.indexOf(note);
        if (index > -1) {
            this.state.archivedList.splice(index, 1);
            this.setState({
                isArchived: !this.state.isArchived
            })
        }
    }

    render() {
        return (
            <div style={{ width: "80%", display: "flex", flexWrap: "wrap" }}>
                {
                    this.state.archivedList.map((note) => {
                        return <ViewNotes key={note.id} note={note}
                            toggleArchive={(stateName) => this.toggleArchive(stateName)}
                            removeFromArchive={(id) => this.removeFromArchive(id)}
                            action="archiveProp" />
                    })
                }
            </div>
        )
    }
}

export default archiveNotes
