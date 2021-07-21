import React from 'react';
import Page from '../layout/Page/page';
import {Link} from 'react-router-dom'
import {Button, Container, FormControlLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@material-ui/core';
import '../Styles/Patient.css';
import { useEffect } from 'react';
import JSONResult from "../translations/en/i18n.json"


const Index=()=>{
   
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
                 <Button variant="contained" fullWidth style={submit_color} color="primary">{patient.confirm_and_pay}</Button>
               </Container>
                     
           </Container>
            </> 
        
        
    )
}
export default Index;