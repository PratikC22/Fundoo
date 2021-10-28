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

        //Method to handle condition for rendering takeNoteOne and takeNoteTwo
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
                //Sending props to original component
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