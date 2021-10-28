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

    handleDrawerToggle = () => {
        this.setState({
            open: !this.state.open,
        });
    };

    render() {
        return (
            <>
                {/* <div className="navbar-component"> */}
                <NavigationBar handleDrawerToggle={this.handleDrawerToggle} />
                {/* </div> */}
                {/* <div className="dash-sidebar-container"> */}
                <Sidebar
                    style={{ position: "fixed" }}
                    handleDrawerToggle={this.handleDrawerToggle}
                    open={this.state.open}
                />
            </>
            // </div>
        )
    }
}

export default MainContainer
