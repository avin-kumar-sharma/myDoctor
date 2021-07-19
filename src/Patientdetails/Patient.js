import React from 'react';
import Page from '../layout/Page/page';

import {Button, Container, FormControlLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@material-ui/core';
import '../Styles/Patient.css';
import Index from './Index';

const Patient=()=>{
    return(
   <Container>
       <Index/>
       <label>Please provide following information about John:</label><br/><br/>
                     <label>Patient Name:</label><br/>
                     <TextField fullWidth variant="outlined" type="text" value="John"></TextField><br/><br/>
                     <label>Mobile number:</label><br/>
                     <TextField fullWidth variant="outlined" type="number" value="7324697"></TextField><br/><br/>
                     <label>Fee: 500Rs</label><br/><br/>
                     <Button variant="contained" fullWidth color="primary">Confirm and Pay</Button>
   </Container>
    )
}
export default Patient;
