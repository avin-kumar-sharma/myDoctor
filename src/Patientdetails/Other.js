import React from 'react';
import Page from '../layout/Page/page';
import {Link} from 'react-router-dom'
import {Button, Container, FormControlLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@material-ui/core';
import '../Styles/Patient.css';
import Index from './Index';
import { useEffect } from 'react';
import JSONResult from "../translations/en/i18n.json"


const Others=()=>{
   const [patient, setPatient] = React.useState([]);

   useEffect(() => {
     setPatient(JSONResult.patient);
   }, []);
   const submit_color={color:'white'}
    return(
         <>
            <Page/>
               <Container  maxWidth="sm">
               <Typography className="patient" variant="h4">{patient.head}</Typography><br/>
                 <label>{patient.label}</label>
                 
                     <RadioGroup>
                        <Link to="/index" className="link"> <FormControlLabel label={patient.username} control={<Radio color="primary"/>} value={patient.username}/></Link>
                        <Link to="/someone" className="link"><FormControlLabel checked className="active" label={patient.otherUser} control={<Radio color="primary" />} value={patient.otherUser}/></Link>
                     </RadioGroup>

                  
                     <label>{patient.info}{patient.username}</label><br/><br/>
                     <label>{patient.label_patientname}</label><br/>
                     <TextField fullWidth variant="outlined" type="text" ></TextField><br/><br/>
                     <label>{patient.label_Mobilenumber}</label><br/>
                     <TextField fullWidth variant="outlined" type="number" ></TextField><br/><br/>
                     <label>{patient.label_otherNumber} </label><br/>
                     <TextField fullWidth variant="outlined" type="number" ></TextField><br/><br/>
                     <label>{patient.label_fee}{patient.user_fees}</label><br/><br/>
                     <Button variant="contained" fullWidth style={submit_color} color="primary">{patient.confirm_and_pay}</Button>
                     <br/><br/>
                     </Container>
                    </> 
               
    )
}
export default Others;
