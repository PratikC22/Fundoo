import React, { Component } from "react";
import NavigationBar from "../navigationBar/navigationBar";
import Sidebar from "../sidebar/sidebar";
import TakeNoteOne from "../takeNote/TakeNoteOne.jsx";
import TakeNoteTwo from "../takeNote/TakeNoteTwo.jsx";
import "./dashboard.scss";
import ViewNotes from "../viewNotes/viewNotes";

class dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      takeNoteOpen: true,
    };
  }

  handleDrawerOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleDrawerClose = () => {
    this.setState({
      open: false,
    });
  };

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
      <div className="notes-container">
        <div className="navbar-component">
          <NavigationBar handleDrawerToggle={this.handleDrawerToggle} />
        </div>
        <div className="dash-content">
          <div className="dash-sidebar-container">
            <Sidebar
              style={{ position: "fixed" }}
              handleDrawerToggle={this.handleDrawerToggle}
              handleDrawerOpen={this.handleDrawerOpen}
              handleDrawerClose={this.handleDrawerClose}
              open={this.state.open}
            />
          </div>
          <div className="dash-take-note-container">
            {this.state.takeNoteOpen ? (
              <TakeNoteOne handleTakeNote={this.handleTakeNote} />
            ) : (
              <TakeNoteTwo handleTakeNote={this.handleTakeNote} />
            )}
            <div className="dash-view-note-container">
              <ViewNotes />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default dashboard;
