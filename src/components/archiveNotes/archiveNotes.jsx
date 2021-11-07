import React, { Component } from 'react'
import { getArchivedNotes } from 'src/service/noteService'
import ViewNotes from '../viewNotes/viewNotes'


class archiveNotes extends Component {

    constructor(props) {
        super(props)

        this.state = {
            archivedList: [],
        }
    }

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

    render() {
        return (
            <div style={{ width: "80%", display: "flex", flexWrap: "wrap" }}>
                {
                    this.state.archivedList.map((note) => {
                        return <ViewNotes key={note.id} note={note}
                            toggleArchive={(stateName) => this.toggleArchive(stateName)}
                            action="archiveProp" />
                    })
                }
            </div>
        )
    }
}

export default archiveNotes
