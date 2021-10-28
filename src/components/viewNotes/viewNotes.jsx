import React, { Component } from "react";
import { Paper } from "@mui/material";
import { requestData } from "src/service/noteService";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import IconButton from "@mui/material/IconButton";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import "./viewNotes.scss";
import { addNoteToArchive } from "src/service/noteService";

class viewNotes extends Component {
	constructor(props) {
		super(props);

		this.state = {
			visibility: false,
			data: [],
		};
	}

	// Get all notes once component is mounted
	componentDidMount() {
		this.getAllNotes();
	}

	// Get all notes when component is updated
	componentDidUpdate(prevProps, prevState) {
		if (prevState.data === this.state.data) {
			this.getAllNotes();
		}
	}

	// Get all notes on click
	getAllNotes = async () => {
		await requestData()
			.then((dataArray) => {
				this.setState({
					data: dataArray,
				});
			})
			.catch((error) => {
				console.warn(error);
			});
	};

	// Toggle icon visibility
	toggleIconVisibility = () => {
		this.setState({
			visibility: !this.state.visibility
		})
	}

	// Method to archive notes
	archiveNote = (id) => {
		let obj = {
			noteIdList: [id],
			isArchived: true,
		}

		console.log(obj);

		addNoteToArchive(obj)
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.warn(error);
			})
	}


	render() {
		const { data } = this.state;
		return data.length === 0 ? (
			<div className="loading-view-notes">
				<p>Loading...</p>
			</div>
		) : (
			<React.Fragment>
				{data.map((note) => {
					return (
						<div key={note.id} className="viewNotes-Paper-container">
							<Paper className='viewNotes-Paper' style={paperStyle}>
								<div className="note-container">
									<div className="title-pin">

										{/*------- Note Title ------- */}
										<p>{note.title}</p>
										<div className="note-icons">
											<IconButton sx={{ p: "5px" }}>
												<PushPinOutlinedIcon />
											</IconButton>
										</div>
									</div>
									<div className="note-content">
										<div className="note-desc">

											{/*------- Note Description ------- */}
											<p>{note.description}</p>
										</div>
										<div className="note-icons-container">
											<div className="note-icons">

												{/*------- Icons ------- */}
												<IconButton sx={{ p: "5px" }} >
													<AddAlertOutlinedIcon fontSize="small" />
												</IconButton>

												<IconButton sx={{ p: "5px" }}>
													<PersonAddAlt1OutlinedIcon fontSize="small" />
												</IconButton>

												<IconButton sx={{ p: "5px" }}>
													<ColorLensOutlinedIcon fontSize="small" />
												</IconButton>

												<IconButton sx={{ p: "5px" }}>
													<ImageOutlinedIcon fontSize="small" />
												</IconButton>

												<IconButton sx={{ p: "5px" }} onClick={() => this.archiveNote(note.id)}>
													<ArchiveOutlinedIcon fontSize="small" />
												</IconButton>

												<IconButton sx={{ p: "5px" }}>
													<MoreVertOutlinedIcon fontSize="small" />
												</IconButton>
											</div>
										</div>
									</div>
								</div>
							</Paper>
						</div>
					);
				})}
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
	borderRadius: "5px",
	marginTop: 15,
	wordWrap: "break-word",

	//   border: "10px solid blue",
};

export default viewNotes;
