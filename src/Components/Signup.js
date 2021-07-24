import { Checkbox } from '@material-ui/core'
import { Grid, Paper, TextField, Typography, Link, Button } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { TabPanel, Alert } from '@material-ui/lab';
import { signup } from "../state/user/slice";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useRef } from 'react'
import { useEffect } from 'react';
import JSONResult from "../translations/en/i18n.json"
import Login from './Login';
import Store from "../state/index.js";



const Signup = () => {
    const [loginPage, setLoginPage] = React.useState([]);
    const [signUp, setSignup] = React.useState(JSONResult.signup);
    useEffect(() => {
        setLoginPage(JSONResult.loginPage);

    }, []);
    useEffect(() => {
        setSignup(JSONResult.signup);
    }, []);
    const dispatch = useDispatch();
    const refsMap = {};
    refsMap[signUp[0]['field_id']] = useRef();
    refsMap[signUp[1]['field_id']] = useRef();
    refsMap[signUp[2]['field_id']] = useRef();
    refsMap[signUp[3]['field_id']] = useRef();
    refsMap[signUp[4]['field_id']] = useRef();
    const color = { color: "white" }

    function getSignUpDetails() {
        const fullName = refsMap["1"].current.getElementsByTagName("input")[0].value.split(" ");
        const firstName = fullName[0];
        let lastName = fullName[1] ? fullName[1].trim() : "";
        if (lastName === "") lastName = "N/A";
        return {
            "firstName": firstName,
            "lastName": lastName,
            "contactNumber": refsMap["2"].current.getElementsByTagName("input")[0].value,
            "email": refsMap["3"].current.getElementsByTagName("input")[0].value,
            "gender": "Male",
            "password": refsMap["4"].current.getElementsByTagName("input")[0].value,
        };
    }

    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    Store.subscribe(() => {
        if (Store.getState().user.error) {
            setError(true);
            setSuccess(false);
        } else {
            setError(false);
            setSuccess(true);
        }
    });

    return (


        <Grid >
            <Paper elevation={10} className="paperStyle">
                {error &&
                    <Alert severity="error">{JSONResult.loginPage['signup_fail']}</Alert>
                }
                {success &&
                    <Alert severity="success">{JSONResult.loginPage['signup_success']}</Alert>
                }


                <form>
                    {signUp.map((sign) => {
                        return (
                            <>
                                <label key={sign.field_id} className="label">{sign.field_label}</label>
                                <TextField id="outlined-basic" variant="outlined" required fullWidth name={sign.field_label} placeholder={sign.field_placeholder} type={sign.field_type} ref={refsMap[sign.field_id]} />
                                <br /><br />
                            </>
                        )
                    })}

                    <Button fullWidth color="primary" variant="contained" style={color} onClick={() => { dispatch(signup(getSignUpDetails())) }} >
                        {loginPage.register}
                    </Button>
                </form><br />
                <Typography>{loginPage.already_have_an_account}<Link href="/Login" className="signin">{loginPage.signIn}</Link></Typography>
            </Paper>
        </Grid>

    )

}

export default Signup
