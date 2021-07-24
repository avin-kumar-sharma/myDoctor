import React from 'react';
import Page from '../layout/Page/page';
import {Link} from 'react-router-dom';
import { Alert } from '@material-ui/lab';
import {Button, Container, FormControlLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@material-ui/core';
import '../Styles/Patient.css';
import Index from './Index';
import { useEffect } from 'react';
import JSONResult from "../translations/en/i18n.json"
import Store from "../state/index.js";
import { bookNewAppointment } from "../state/appointment/slice";
import { useDispatch } from "react-redux";


const Others=()=>{
   const [patient, setPatient] = React.useState([]);

   useEffect(() => {
     setPatient(JSONResult.patient);
   }, []);
   const submit_color={color:'white'}

   const dispatch = useDispatch();

    const [error, setError] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const [valid, setValid] = React.useState(true);
    Store.subscribe(() => {
        const err = Store.getState().appointment.error;
        setError(err !== null);
        const created = Store.getState().appointment.created;
        setSuccess(created === true);
    });

    function getAppointmentDetails() {
      return {
        "clientId": "60f7bd1a7884d765e07fbab1",
        "doctorId": "60f814f0825d0276bc3f19f2",
        "date": getTodayDate(),
        "startTime": "1300",
        "transactionDate": getTodayDate(),
      }
    }

    function getTodayDate() {
      const now = new Date();
      const day = String(now.getDate()).padStart(2, "0");
      const month = String(now.getMonth()).padStart(2, "0");
      const year = now.getFullYear();
      return `${year}-${month}-${day}`;
    }

    const nameElement = React.useRef();
    const mobileElement = React.useRef();
    const patientMobileElement = React.useRef();

    function validate() {
       const name = nameElement.current.getElementsByTagName("input")[0].value.trim();
       const mobile = mobileElement.current.getElementsByTagName("input")[0].value.trim();
       const patientMobile = patientMobileElement.current.getElementsByTagName("input")[0].value.trim();
       const isValid = name !== "" && mobile !== "" && patientMobile !== "";
       setValid(isValid);
       return isValid;
    } 

    return(
         <>
            <Page/>
               <Container  maxWidth="sm">
               <Typography className="patient" variant="h4">{patient.head}</Typography><br/>
               { error &&
                  <Alert severity="error">{JSONResult.patient['appointment_fail']}</Alert>
                 }
                 { success &&
                  <Alert severity="success">{JSONResult.patient['appointment_success']}</Alert>
                 }
                 { !valid &&
                    <Alert severity="error">{JSONResult.patient['invalid_patient_detail']}</Alert>
                 }
                 <label>{patient.label}</label>
                 
                     <RadioGroup>
                        <Link to="/index" className="link"> <FormControlLabel label={patient.username} control={<Radio color="primary"/>} value={patient.username}/></Link>
                        <Link to="/someone" className="link"><FormControlLabel checked className="active" label={patient.otherUser} control={<Radio color="primary" />} value={patient.otherUser}/></Link>
                     </RadioGroup>

                  
                     <label>{patient.info}{patient.otherPatient}</label><br/><br/>
                     <label>{patient.label_patientname}</label><br/>
                     <TextField fullWidth variant="outlined" type="text" ref={nameElement}></TextField><br/><br/>
                     <label>{patient.label_Mobilenumber}</label><br/>
                     <TextField fullWidth variant="outlined" type="number" ref={mobileElement}></TextField><br/><br/>
                     <label>{patient.label_otherNumber} </label><br/>
                     <TextField fullWidth variant="outlined" type="number" ref={patientMobileElement}></TextField><br/><br/>
                     <label>{patient.label_fee}{patient.user_fees}</label><br/><br/>
                     <Button variant="contained" fullWidth style={submit_color} color="primary" onClick={()=>{ if(validate()) {dispatch(bookNewAppointment(getAppointmentDetails()));} }}>{patient.confirm_and_pay}</Button>
                     <br/><br/>
                     </Container>
                    </> 
               
    )
}
export default Others;
