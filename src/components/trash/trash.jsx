import React, { Component } from 'react'
import { getTrashedNotes } from 'src/service/noteService'
import ViewNotes from '../viewNotes/viewNotes'

class trash extends Component {
    constructor(props) {
        super(props)

        this.state = {
            deletedList: [],
        }
    }

    componentDidMount() {
        getTrashedNotes().then((dataArray) => {
            this.setState({
                deletedList: dataArray.data.data.data
            }, () => console.log(this.state.deletedList))
        }).catch((error) => {
            console.warn(error);
        });
    }

    render() {
        return (
            <div style={{ width: "80%", display: "flex", flexWrap: "wrap" }}>
                {
                    this.state.deletedList.map((note) => {
                        return <ViewNotes key={note.id} note={note} />
                    })
                }
            </div>
        )
    }
}

export default trash
