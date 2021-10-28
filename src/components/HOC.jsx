import React, { Component } from "react";

const updatedComponent = OriginalComponent => {

    class NewComponent extends Component {

        constructor(props) {
            super(props);

            this.state = {
                open: false,
                takeNoteOpen: true,
            };
        }

        handleTakeNote = () => {
            this.setState({
                takeNoteOpen: !this.state.takeNoteOpen,
            });
        };

        handleDrawerToggle = () => {
            this.setState({
                open: !this.state.open,
            });
        };

        render() {
            return (
                <OriginalComponent
                    open={this.state.open}
                    takeNoteOpen={this.state.takeNoteOpen}
                    handleDrawerToggle={this.handleDrawerToggle}
                    handleTakeNote={this.handleTakeNote}
                />
            )
        }
    }

    return NewComponent
}

export default updatedComponent