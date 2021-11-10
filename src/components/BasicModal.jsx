import React, { Component } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TakeNoteTwo from './takeNote/TakeNoteTwo';

class BasicModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            updateTitle: this.props.note.title,
            updateDesc: this.props.note.description
        }
    }

    setTitle = (title) => {
        this.setState({
            updateTitle: title
        })
    }

    setDesc = (desc) => {
        this.setState({
            updateDesc: desc
        })
    }

    render() {
        return (
            <div>
                <Modal
                    open={this.props.modalOpen}
                    onClose={this.props.toggleModalOpen}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <TakeNoteTwo
                            modal="fromModal"
                            note={this.props.note}
                            toggleModalOpen={this.props.toggleModalOpen}
                            toggleRenderState={(stateName) => this.props.toggleRenderState(stateName)}
                            setTitle={(title) => this.setTitle(title)}
                            setDesc={(desc) => this.setDesc(desc)}
                            updateTitle={this.state.updateTitle}
                            updateDesc={this.state.updateDesc}
                        />
                    </Box>
                </Modal>
            </div>
        )
    }
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
};

export default BasicModal
