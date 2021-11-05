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


    // Filter archived Notes
    filterArchivedNotes = () => {
        console.log(this.state.data);
        const archivedList = this.state.data.filter(element => { return element.isArchived })
        console.log(archivedList);
    }

    componentDidMount() {
        getArchivedNotes().then((dataArray) => {
            // console.log(dataArray.data.data.data);
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
                        return <ViewNotes key={note.id} note={note} />
                    })
                }
            </div>
        )
    }
}

export default archiveNotes
