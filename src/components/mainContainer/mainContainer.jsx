import React, { Component } from 'react'
import NavigationBar from "../navigationBar/navigationBar";
import Sidebar from "../sidebar/sidebar";

class MainContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            takeNoteOpen: true,
        };
    }

    // Drawer state toggle
    handleDrawerToggle = () => {
        this.setState({
            open: !this.state.open,
        });
    };

    render() {
        return (
            <>
                {/* ------ Navigation bar ------ */}
                <NavigationBar handleDrawerToggle={this.handleDrawerToggle} />

                {/* ------ Side bar ------ */}
                <Sidebar
                    style={{ position: "fixed" }}
                    handleDrawerToggle={this.handleDrawerToggle}
                    open={this.state.open}
                />
            </>
        )
    }
}

export default MainContainer
