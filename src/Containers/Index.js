import React, { useState, useEffect } from "react";
import { Paper, Tabs, Tab, Grid } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import "../Styles/Loginregister.css";
import JSONResult from "../translations/en/i18n.json";

const SignInOutContainer = ({ field }) => {
	const [value, setValue] = useState(0);

	const [loginPage, setLoginPage] = React.useState([]);
	const [message, setMessage] = React.useState("");

	function handleSignupSuccess(message) {
		setMessage(message);
		setValue(0);
	}

	function handleClearMessage() {
		setMessage("");
	}

	useEffect(() => {
		setLoginPage(JSONResult.loginPage);
	}, []);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	function TabPanel(props) {
		const { children, value, index, ...other } = props;

		return (
			<div
				role="tabpanel"
				hidden={value !== index}
				id={`simple-tabpanel-${index}`}
				aria-labelledby={`simple-tab-${index}`}
				{...other}
			>
				{value === index && (
					<Box p={2}>
						<Typography>{children}</Typography>
					</Box>
				)}
			</div>
		);
	}
	return (
		<Grid
			container
			direction="row"
			justifyContent="center"
			alignItems="center"
			style={{ minHeight: 100 + "%" }}
		>
			<Grid item xs={0} md={3} lg={4}>
				<img src={"myDoctor.jpg"} alt="Logo" />
			</Grid>
			<Grid item md={5} lg={3}>
				<Paper className="paperStyle2">
					{message !== "" && (
						<Alert severity="success">{message}</Alert>
					)}
					<Tabs
						value={value}
						indicatorColor="primary"
						textColor="primary"
						onChange={handleChange}
						aria-label="disabled tabs example"
					>
						<Tab className="widthch" label={loginPage.login} />

						<Tab className="widthch" label={loginPage.register} />
					</Tabs>
					<TabPanel value={value} index={0}>
						<Login />
					</TabPanel>
					<TabPanel value={value} index={1}>
						<Signup
							field={field}
							onSuccess={handleSignupSuccess}
							onClear={handleClearMessage}
						/>{" "}
					</TabPanel>
				</Paper>
			</Grid>
		</Grid>
	);
};

export default SignInOutContainer;
