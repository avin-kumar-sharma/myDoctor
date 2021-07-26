import { Checkbox } from "@material-ui/core";
import {
	Grid,
	Paper,
	TextField,
	Typography,
	Link,
	Button,
} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { TabPanel, Alert } from "@material-ui/lab";
import { signup } from "../state/user/slice";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useRef } from "react";
import { useEffect } from "react";
import JSONResult from "../translations/en/i18n.json";
import Login from "./Login";
import Store from "../state/index.js";
import { isFunction } from "lodash";

const Signup = (props) => {
	const [loginPage, setLoginPage] = React.useState([]);
	const [signUp, setSignup] = React.useState(JSONResult.signup);

	const [fullName, setFullName] = React.useState("");
	const [mobile, setMobile] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [confPassword, setConfPassword] = React.useState("");

	function handleFieldChange(targetField, setFunction) {
		setFunction(targetField.value);
	}

	const [invalid, setInvalid] = React.useState([]);

	useEffect(() => {
		setLoginPage(JSONResult.loginPage);
	}, []);
	useEffect(() => {
		setSignup(JSONResult.signup);
	}, []);
	const dispatch = useDispatch();
	const color = { color: "white" };

	function getSignUpDetails() {
		const nameParts = fullName.trim().split(" ");
		const firstName = nameParts[0].trim();
		let lastName = "";
		if (nameParts.length > 1) {
			lastName = nameParts.slice(1).join(" ").trim();
		}
		return {
			firstName,
			lastName,
			email,
			password,
			contactNumber: mobile,
			gender: "Male",
		};
	}

	function validate() {
		const errors = [];
		if (fullName.trim() === "") {
			errors.push(loginPage["invalid_fullname"]);
		}
		if (mobile.trim() === "" || !/^\d{10}$/.test(mobile)) {
			errors.push(loginPage["invalid_mobile"]);
		}
		if (
			email.trim() === "" ||
			!/^[a-z0-9\._]{3,}@(([a-z0-9\._]){3,}\.)+[a-z]{2,}$/i.test(email)
		) {
			errors.push(loginPage["invalid_email"]);
		}
		if (password.trim() === "") {
			errors.push(loginPage["empty_password"]);
		} else if (password.trim() !== confPassword.trim()) {
			errors.push(loginPage["mismatch_password"]);
		}
		setInvalid(errors);
		return errors.length === 0;
	}

	function doSignup() {
		setError(null);
		if (validate()) {
			dispatch(signup(getSignUpDetails()));
		} else {
			if (!!props.onClear && isFunction(props.onClear)) {
				props.onClear();
			}
		}
	}

	const [error, setError] = useState(null);

	Store.subscribe(() => {
		if (!!!Store.getState().user.loading && Store.getState().user.error) {
			const error = Store.getState().user.error;
			setError(error.data ?? JSONResult.loginPage["signup_fail"]);
			if (!!props.onClear && isFunction(props.onClear)) {
				props.onClear();
			}
		} else if (!!!Store.getState().user.loading) {
			setError(null);
			if (!!props.onSuccess && isFunction(props.onSuccess)) {
				props.onSuccess(JSONResult.loginPage["signup_success"]);
			}
		}
	});

	return (
		<Grid>
			<Paper elevation={10} className="paperStyle">
				{error && <Alert severity="error">{error}</Alert>}
				{invalid.map((err) => (
					<Alert severity="error">{err}</Alert>
				))}

				<form>
					<label key={signUp[0].field_id} className="label">
						{signUp[0].field_label}
					</label>
					<TextField
						id="outlined-basic"
						variant="outlined"
						required
						fullWidth
						name={signUp[0].field_label}
						placeholder={signUp[0].field_placeholder}
						type={signUp[0].field_type}
						onInput={(e) => {
							handleFieldChange(e.target, setFullName);
						}}
						value={fullName}
					/>
					<br />
					<br />
					<label key={signUp[1].field_id} className="label">
						{signUp[1].field_label}
					</label>
					<TextField
						id="outlined-basic"
						variant="outlined"
						required
						fullWidth
						name={signUp[1].field_label}
						placeholder={signUp[1].field_placeholder}
						type={signUp[1].field_type}
						onInput={(e) => {
							handleFieldChange(e.target, setMobile);
						}}
						value={mobile}
					/>
					<br />
					<br />
					<label key={signUp[2].field_id} className="label">
						{signUp[2].field_label}
					</label>
					<TextField
						id="outlined-basic"
						variant="outlined"
						required
						fullWidth
						name={signUp[2].field_label}
						placeholder={signUp[2].field_placeholder}
						type={signUp[2].field_type}
						onInput={(e) => {
							handleFieldChange(e.target, setEmail);
						}}
						value={email}
					/>
					<br />
					<br />
					<label key={signUp[3].field_id} className="label">
						{signUp[3].field_label}
					</label>
					<TextField
						id="outlined-basic"
						variant="outlined"
						required
						fullWidth
						name={signUp[3].field_label}
						placeholder={signUp[3].field_placeholder}
						type={signUp[3].field_type}
						onInput={(e) => {
							handleFieldChange(e.target, setPassword);
						}}
						value={password}
					/>
					<br />
					<br />
					<label key={signUp[4].field_id} className="label">
						{signUp[4].field_label}
					</label>
					<TextField
						id="outlined-basic"
						variant="outlined"
						required
						fullWidth
						name={signUp[4].field_label}
						placeholder={signUp[4].field_placeholder}
						type={signUp[4].field_type}
						onInput={(e) => {
							handleFieldChange(e.target, setConfPassword);
						}}
						value={confPassword}
					/>
					<br />
					<br />

					<Button
						fullWidth
						color="primary"
						variant="contained"
						style={color}
						onClick={() => {
							doSignup();
						}}
					>
						{loginPage.register}
					</Button>
				</form>
				<br />
				<Typography>
					{loginPage.already_have_an_account}
					<Link href="/Login" className="signin">
						{loginPage.signIn}
					</Link>
				</Typography>
			</Paper>
		</Grid>
	);
};

export default Signup;
