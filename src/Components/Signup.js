import { Checkbox } from '@material-ui/core'
import { Grid , Paper , TextField ,Typography ,Link , Button} from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { TabPanel } from '@material-ui/lab';
import React,{useState} from 'react'
import { useEffect } from 'react';
import JSONResult from "../translations/en/i18n.json"
import Login from './Login';


   
    const Signup = () => {
        const [loginPage, setLoginPage] = React.useState([]);
        const [signup,setSignup]=React.useState([]);
         useEffect(() => {
     setLoginPage(JSONResult.loginPage);
 
   }, []);
   useEffect(()=>{
    setSignup(JSONResult.signup);
   },[]);
    const color ={color:"white"}
    return (
       
               
        <Grid >
            <Paper elevation={10} className="paperStyle">
                <form>
                { signup.map((sign)=>{
                return(
                     <>
                <label key={sign.field_id} className="label">{sign.field_label}</label>
                <TextField id="outlined-basic"  variant="outlined" required fullWidth name={sign.field_label} placeholder={sign.field_placeholder}  type={sign.field_type}/>
                <br/><br/>
                </>
               )})}
              
                  <Button fullWidth color="primary" variant="contained" style={color}>{loginPage.register}</Button>
                </form><br/>
                <Typography>{loginPage.already_have_an_account}<Link  href="/Login" className="signin">{loginPage.signIn}</Link></Typography>
            </Paper>
        </Grid>
        
    )
    
}

export default Signup
