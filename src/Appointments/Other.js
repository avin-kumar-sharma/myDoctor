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

const Others = () => {
	const history = useHistory();
	const [patient, setPatient] = React.useState(JSONResult.patient);
	const [name, setName] = React.useState("");
	const [mobile, setMobile] = React.useState("");
	useEffect(() => {
		setPatient(JSONResult.patient);
	}, []);
	const submit_color = { color: "white" };
	const data = useSelector((state) => {
		return state.appointment.data;
	});
	const clientId = localStorage.getItem("user-id");
	if (!!!data || !!!clientId) {
		history.push("/login");
	}
	const dispatch = useDispatch();

	function handleNameChange(e) {
		setName(e.target.value);
	}
	function handleMobileChange(e) {
		setMobile(e.target.value);
	}

	const [error, setError] = React.useState(false);
	const [success, setSuccess] = React.useState(false);
	const [invalid, setInvalid] = React.useState([]);
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
			otherName: name,
			otherMobileNumber: mobile,
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

	function validate() {
		const errors = [];
		if (name.trim() === "") {
			errors.push(patient["invalid_otherName"]);
		}
		if (mobile.trim() === "" || !/^\d{10}$/.test(mobile)) {
			errors.push(patient["invalid_otherMobileNumber"]);
		}
		setInvalid(errors);
		return errors.length === 0;
	}

	function bookAppointment() {
		if (validate()) {
			dispatch(bookNewAppointment(getAppointmentDetails()));
			clearForm();
		}
	}

	function clearForm() {
		setName("");
		setMobile("");
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
				{invalid.map((err) => (
					<Alert severity="error">{err}</Alert>
				))}
				<label>{patient.label}</label>

				<RadioGroup>
					<Link to="/self-appointment" className="link">
						{" "}
						<FormControlLabel
							label={patient.username}
							control={<Radio color="primary" />}
							value={patient.username}
						/>
					</Link>
					<Link to="/others-appointment" className="link">
						<FormControlLabel
							checked
							className="active"
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
					<TextField
						fullWidth
						variant="outlined"
						type="text"
						onInput={(e) => {
							handleNameChange(e);
						}}
						value={name}
					></TextField>
					<br />
					<br />
					<label>{patient.label_otherNumber} </label>
					<br />
					<TextField
						fullWidth
						variant="outlined"
						type="number"
						onInput={(e) => {
							handleMobileChange(e);
						}}
						value={mobile}
					></TextField>
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
							bookAppointment();
						}}
					>
						{patient.confirm_and_pay}
					</Button>
					<br />
					<br />
				</Container>
			</Container>
		</>
	);
};
export default Others;
