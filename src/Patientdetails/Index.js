import React from 'react';
import Page from '../layout/Page/page';
import {Link} from 'react-router-dom'
import { Alert } from '@material-ui/lab';
import {Button, Container, FormControlLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@material-ui/core';
import '../Styles/Patient.css';
import { useEffect } from 'react';
import JSONResult from "../translations/en/i18n.json"
import Store from "../state/index.js";
import { bookNewAppointment } from "../state/appointment/slice";
import { useDispatch } from "react-redux";


const Index=()=>{
   
        const [patient, setPatient] = React.useState([]);
     
        useEffect(() => {
          setPatient(JSONResult.patient);
        }, []);
    const submit_color={color:'white'}

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
                 <label>{patient.label}</label>
                 
                     <RadioGroup>
                       
                        <Link to="/index" className="link" > <FormControlLabel checked label={patient.username}   control={<Radio color="primary"/>} value={patient.username}/></Link>
                        <Link to="/someone" className="link"><FormControlLabel label={patient.otherUser} control={<Radio color="primary"/>} value={patient.otherUser}/></Link>
                     </RadioGroup>

                <Container maxWidth="sm">
                 <label>{patient.info}{patient.username}</label><br/><br/>
                 <label>{patient.label_patientname}</label><br/>
                 <TextField fullWidth variant="outlined" type="text" value={patient.username}></TextField><br/><br/>
                 <label>{patient.label_Mobilenumber}</label><br/>
                 <TextField fullWidth variant="outlined" type="number" value={patient.user_number}></TextField><br/><br/>
                 <label>{patient.label_fee}{patient.user_fees}</label><br/><br/>
                 <Button variant="contained" fullWidth style={submit_color} color="primary" onClick={()=>{ dispatch(bookNewAppointment(getAppointmentDetails())) }}>{patient.confirm_and_pay}</Button>
               </Container>
                     
           </Container>
            </> 
        
        
    )
}
export default Index;