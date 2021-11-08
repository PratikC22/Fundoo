import React, { Component } from 'react'
import { getTrashedNotes } from 'src/service/noteService'
import ViewNotes from '../viewNotes/viewNotes'

class trash extends Component {
    constructor(props) {
        super(props)

        this.state = {
            deletedList: [],
            isTrashed: false
        }
    }

    // Load trash notes once component is mounted
    componentDidMount() {
        getTrashedNotes().then((dataArray) => {
            this.setState({
                deletedList: dataArray.data.data.data
            }, () => console.log(this.state.deletedList))
        }).catch((error) => {
            console.warn(error);
        });
    }

    // Method to remove note from trash
    removeFromTrash = (id) => {
        let note = {};
        for (let i = 0; i < this.state.deletedList.length; i++) {
            let obj = this.state.deletedList[i];
            if (obj.id === id) {
                note = obj;
            }
        }
        const index = this.state.deletedList.indexOf(note);
        if (index > -1) {
            this.state.deletedList.splice(index, 1);
            this.setState({
                isTrashed: !this.state.isTrashed
            })
        }
    }

    render() {
        return (
            <div style={{ width: "80%", display: "flex", flexWrap: "wrap" }}>
                {
                    this.state.deletedList.map((note) => {
                        return <ViewNotes key={note.id} note={note}
                            removeFromTrash={(id) => this.removeFromTrash(id)}
                            trash="trashProp" />
                    })
                }
            </div>
        )
    }
}

export default trash
