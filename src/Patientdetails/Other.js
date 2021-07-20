import React from 'react';
import Page from '../layout/Page/page';
import {Link} from 'react-router-dom'
import {Button, Container, FormControlLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@material-ui/core';
import '../Styles/Patient.css';
import Index from './Index';
import data from '../JSON/patient.json'


const Others=()=>{
    return(
         <>
            <Page/>
               <Container  maxWidth="sm">
               <Typography className="patient" variant="h4">{data.head}</Typography><br/>
                 <label>{data.label}</label>
                 
                     <RadioGroup>
                        <Link to="/index" className="link"> <FormControlLabel label={data.username} control={<Radio color="primary"/>} value={data.username}/></Link>
                        <Link to="/someone" className="link"><FormControlLabel checked className="active" label={data.otherUser} control={<Radio color="primary" />} value={data.otherUser}/></Link>
                     </RadioGroup>

                  
                     <label>{data.info}{data.username}</label><br/><br/>
                     <label>{data.label_patientname}</label><br/>
                     <TextField fullWidth variant="outlined" type="text" ></TextField><br/><br/>
                     <label>{data.label_Mobilenumber}</label><br/>
                     <TextField fullWidth variant="outlined" type="number" ></TextField><br/><br/>
                     <label>{data.label_otherNumber} </label><br/>
                     <TextField fullWidth variant="outlined" type="number" ></TextField><br/><br/>
                     <label>{data.label_fee}{data.user_fees}</label><br/><br/>
                     <Button variant="contained" fullWidth color="primary">{data.confirm_and_pay}</Button>
                     <br/><br/>
                     </Container>
                    </> 
               
    )
}
export default Others;
