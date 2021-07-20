import React from 'react';
import Page from '../layout/Page/page';
import {Link} from 'react-router-dom'
import {Button, Container, FormControlLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@material-ui/core';
import '../Styles/Patient.css';
import data from '../JSON/patient.json'


const Index=()=>{
    return(
        <>
        <Page/>
            <Container  maxWidth="sm">
               <Typography className="patient" variant="h4">{data.head}</Typography><br/>
                 <label>{data.label}</label>
                 
                     <RadioGroup>
                       
                        <Link to="/index" className="link" > <FormControlLabel checked label={data.username}   control={<Radio color="primary"/>} value={data.username}/></Link>
                        <Link to="/someone" className="link"><FormControlLabel label={data.otherUser} control={<Radio color="primary"/>} value={data.otherUser}/></Link>
                     </RadioGroup>

                <Container maxWidth="sm">
                 <label>{data.info}{data.username}</label><br/><br/>
                 <label>{data.label_patientname}</label><br/>
                 <TextField fullWidth variant="outlined" type="text" value={data.username}></TextField><br/><br/>
                 <label>{data.label_Mobilenumber}</label><br/>
                 <TextField fullWidth variant="outlined" type="number" value={data.user_number}></TextField><br/><br/>
                 <label>{data.label_fee}{data.user_fees}</label><br/><br/>
                 <Button variant="contained" fullWidth color="primary">{data.confirm_and_pay}</Button>
               </Container>
                     
           </Container>
            </> 
        
        
    )
}
export default Index;