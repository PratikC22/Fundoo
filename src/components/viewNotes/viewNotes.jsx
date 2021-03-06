import React, { Component } from "react";
import { Paper } from "@mui/material";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import IconButton from "@mui/material/IconButton";
import NoteIcons from "../noteIcons";
import "./viewNotes.scss";
import BasicModal from "../BasicModal";

class viewNotes extends Component {
	constructor(props) {
		super(props);

		this.state = {
			visibility: false,
			modalOpen: false,
		};
	}

	// Toggle modal open
	toggleModalOpen = () => {
		this.setState({
			modalOpen: !this.state.modalOpen
		})
	}

	// Toggle icon visibility
	toggleIconVisibility = () => {
		this.setState({
			visibility: !this.state.visibility
		})
	}

	// Filter archived Notes
	filterTrashedNotes = () => {
		const trashedList = this.state.data.filter(element => { return element.isDeleted })
		console.log(trashedList);
	}

	render() {
		const { note } = this.props;
		return (
			<React.Fragment>
				<div key={note.id} className="viewNotes-Paper-container">
					<Paper className='viewNotes-Paper'
						style={paperStyle}
						sx={{ backgroundColor: `${note.color}` }}
						onMouseEnter={this.toggleIconVisibility}
						onMouseLeave={this.toggleIconVisibility}
						onClick={this.toggleModalOpen}>
						<div className="note-container">
							<div className="title-pin">

								{/*------- Note Title ------- */}
								<p>{note.title}</p>
								<div className="note-icons">
									{
										this.state.visibility === true ? <IconButton sx={{ p: "5px" }}>
											<PushPinOutlinedIcon />
										</IconButton> : null
									}
								</div>
							</div>
							<div className="note-content">
								<div className="note-desc">

									{/*------- Note Description ------- */}
									<p>{note.description}</p>
								</div>

								{/*------- Note Icons ------- */}
								<div className="note-icons-container">
									{
										this.state.visibility === true ? <NoteIcons
											note={note}
											listenToMouseOver={this.listenToMouseOver}
											toggleRenderState={(stateName) => this.props.toggleRenderState(stateName)}
											removeFromArchive={(id) => this.props.removeFromArchive(id)}
											removeFromTrash={(id) => this.props.removeFromTrash(id)}
											dashboardCheck={this.props.dashboardCheck}
											action={this.props.action}
											trash={this.props.trash}
										/> : null
									}
								</div>
							</div>
						</div>
					</Paper>
				</div>
				<div>
					<BasicModal
						note={note}
						toggleModalOpen={this.toggleModalOpen}
						toggleRenderState={(stateName) => this.props.toggleRenderState(stateName)}
						modalOpen={this.state.modalOpen} />
				</div>
			</React.Fragment>
		);
	}
}

const paperStyle = {
	display: "flex",
	justifyContent: "space-between",
	padding: 8,
	minHeight: 125,
	height: "auto",
	width: 260,
	marginTop: 15,
	margin: 20,
	wordWrap: "break-word",

	//   border: "10px solid blue",
};

export default viewNotes;
