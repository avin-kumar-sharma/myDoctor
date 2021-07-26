import React from "react";
import Page from "../layout/Page/page";
import { Link, useHistory } from "react-router-dom";
import { Alert } from "@material-ui/lab";
import {
	Button,
	Container,
	FormControlLabel,
	Grid,
	Radio,
	RadioGroup,
	TextField,
	Typography,
} from "@material-ui/core";
import "../Styles/Patient.css";
import { useEffect } from "react";
import JSONResult from "../translations/en/i18n.json";
import Store from "../state/index.js";
import { bookNewAppointment } from "../state/appointment/slice";
import { useDispatch, useSelector } from "react-redux";

const Index = () => {
	const history = useHistory();

	const [patient, setPatient] = React.useState([]);

	useEffect(() => {
		setPatient(JSONResult.patient);
	}, []);
	const submit_color = { color: "white" };
	const disabledBackground = {
		backgroundColor: "#ddd",
	};
	const data = useSelector((state) => {
		return state.appointment.data;
	});
	const profile = useSelector((state) => {
		return state.user.profile;
	});
	const clientId = localStorage.getItem("user-id");
	if (!!!data || !!!clientId) {
		history.push("/");
	}
	const dispatch = useDispatch();

	const [error, setError] = React.useState(false);
	const [success, setSuccess] = React.useState(false);
	Store.subscribe(() => {
		const err = Store.getState().appointment.error;
		setError(err !== null);
		const created = Store.getState().appointment.created;
		setSuccess(created === true);
	});

	function getAppointmentDetails() {
		return {
			date: data.date,
			startTime: data.startTime,
			endTime: data.endTime,
			doctorId: data.doctorId,
			transactionDate: getTodayDate(),
			clientId,
		};
	}

	function getTodayDate() {
		const now = new Date();
		const day = String(now.getDate()).padStart(2, "0");
		const month = String(now.getMonth() + 1).padStart(2, "0");
		const year = now.getFullYear();
		return `${year}-${month}-${day}`;
	}

	return (
		<>
			<Page />
			<Container maxWidth="sm">
				<Typography className="patient" variant="h4">
					{patient.head}
				</Typography>
				<br />
				{error && (
					<Alert severity="error">
						{JSONResult.patient["appointment_fail"]}
					</Alert>
				)}
				{success && (
					<Alert severity="success">
						{JSONResult.patient["appointment_success"]}
					</Alert>
				)}
				<label>{patient.label}</label>

				<RadioGroup>
					<Link to="/self-appointment" className="link">
						{" "}
						<FormControlLabel
							checked
							label={patient.username}
							control={<Radio color="primary" />}
							value={patient.username}
						/>
					</Link>
					<Link to="/others-appointment" className="link">
						<FormControlLabel
							label={patient.otherUser}
							control={<Radio color="primary" />}
							value={patient.otherUser}
						/>
					</Link>
				</RadioGroup>

				<Container maxWidth="sm">
					<label>
						{patient.info}
						{patient.the_patient}:
					</label>
					<br />
					<br />
					<label>{patient.label_patientname}</label>
					<br />
					{profile && (
						<TextField
							fullWidth
							variant="outlined"
							type="text"
							value={`${profile.firstName} ${profile.lastName}`}
							disabled={true}
							style={disabledBackground}
						></TextField>
					)}
					<br />
					<br />
					<label>{patient.label_Mobilenumber}</label>
					<br />
					{profile && (
						<TextField
							fullWidth
							variant="outlined"
							type="number"
							value={profile.contactNumber}
							disabled={true}
							style={disabledBackground}
						></TextField>
					)}
					<br />
					<br />
					{data && (
						<label>
							{patient.label_fee}
							{data.consultationFee}
						</label>
					)}
					<br />
					<br />
					<Button
						variant="contained"
						fullWidth
						style={submit_color}
						color="primary"
						onClick={() => {
							dispatch(
								bookNewAppointment(getAppointmentDetails())
							);
						}}
					>
						{patient.confirm_and_pay}
					</Button>
				</Container>
			</Container>
		</>
	);
};
export default Index;
