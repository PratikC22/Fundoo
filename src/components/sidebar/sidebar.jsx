import React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { withStyles } from "@mui/styles";
import createStyleSheet from "@mui/styles/createStyles";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

class Sidebar extends React.Component {
	handleDrawerToggle = () => {
		this.props.handleDrawerToggle();
	};

	handleDrawerClose = () => {
		this.props.handleDrawerClose();
	};

	handleDrawerOpen = () => {
		this.props.handleDrawerOpen();
	};

	render() {
		const classes = this.props.classes;

		return (
			<Drawer
				classes={{ paper: classes.paper }}
				variant="permanent"
				open={this.props.open}
				onMouseEnter={this.handleDrawerOpen}
				onMouseLeave={this.handleDrawerClose}
			>
				<List>
					{menuItems.map((item) => (
						<ListItem button key={item.text}>
							<ListItemIcon>{item.icon}</ListItemIcon>
							<ListItemText primary={item.text} />
						</ListItem>
					))}
				</List>
			</Drawer>
		);
	}
}

const drawerWidth = 240;

const styleSheet = createStyleSheet({
	paper: {
		height: "90vh",
		top: "10vh",
	},
});

const menuItems = [
	{
		text: "Notes",
		icon: <LightbulbOutlinedIcon />,
	},
	{
		text: "Reminders",
		icon: <NotificationsNoneOutlinedIcon />,
	},
	{
		text: "Edit Labels",
		icon: <ModeEditOutlineOutlinedIcon />,
	},
	{
		text: "Archive",
		icon: <ArchiveOutlinedIcon />,
	},
	{
		text: "Bin",
		icon: <DeleteOutlinedIcon />,
	},
];

const openedMixin = (theme) => ({
	width: drawerWidth,
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: "hidden",
});

const closedMixin = (theme) => ({
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: "hidden",
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up("sm")]: {
		width: `calc(${theme.spacing(9)} + 1px)`,
	},
});

const Drawer = styled(MuiDrawer, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	width: drawerWidth,
	flexShrink: 0,
	whiteSpace: "nowrap",
	boxSizing: "border-box",
	...(open && {
		...openedMixin(theme),
		"& .MuiDrawer-paper": openedMixin(theme),
	}),
	...(!open && {
		...closedMixin(theme),
		"& .MuiDrawer-paper": closedMixin(theme),
	}),
}));

export default withStyles(styleSheet)(Sidebar);
