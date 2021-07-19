import React from 'react';
import Page from '../layout/Page/page';
import {Link} from 'react-router-dom'
import {Button, Container, FormControlLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@material-ui/core';
import '../Styles/Patient.css';


const Index=()=>{
    return(
        
        <Page>
           <Container maxWidth="sm">
               <Typography className="patient" variant="h4">Patient Details</Typography><br/>
                 <label>The appointment is for:</label>
                 
                     <RadioGroup>
                        <Link to="/index"> <FormControlLabel label="John" control={<Radio/>} value="John"/></Link>
                        <Link to="/someone"><FormControlLabel label="Someone else" control={<Radio/>} value="Someone else"/></Link>
                       
                     </RadioGroup>
                     
                     <label>Please provide following information about John:</label><br/><br/>
                     <label>Patient Name:</label><br/>
                     <TextField fullWidth variant="outlined" type="text" value="John"></TextField><br/><br/>
                     <label>Mobile number:</label><br/>
                     <TextField fullWidth variant="outlined" type="number" value="7324697"></TextField><br/><br/>
                     <label>Fee: 500Rs</label><br/><br/>
                     <Button variant="contained" fullWidth color="primary">Confirm and Pay</Button>

                    
                    
           </Container>
            
        </Page>
        
    )
}
export default Index;