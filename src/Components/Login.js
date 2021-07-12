import React from 'react';
import {Grid,Paper,TextField,Checkbox,Button,Typography,Link} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FacebookIcon from '@material-ui/icons/Facebook';
import '../Styles/Loginregister.css'

const Login=()=>{
  const login={color:'white'}
  const colordark={backgroundColor:"darkBlue",color:"white"}
return(
    <>
    <Grid>
        <Paper elevation={10} className="paperStyle">
           <br/><br/>
           <label className="label">Mobile Number/ Email ID</label>
           <TextField variant="outlined" type="email tel"  placeholder='Enter username' fullWidth required></TextField><br/><br/>
           <label className="label">Password</label>
           <TextField variant="outlined" type='password'  placeholder='Enter password' fullWidth required></TextField><br/><br/>


           <Typography>
          <FormControlLabel control={
             <Checkbox color="primary"/>
          }
          label='Remember me for 30 days' className="label"/>
     
        <Link className="forgotpw" href="#" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Forgot Password?
       </Link>
          </Typography>


      <FormControlLabel control={ 
        <Checkbox
        color="primary"/>}
        label='Login with OTP instead of password' className="label"/>
        <br/><br/>
      <Button fullWidth
      style={login} color="primary" variant="contained">
         Login
      </Button>
      <br/><br/>
       <table><tr colspan="2"><td><hr className="halfline"></hr></td>or<td><hr className="halfline"></hr></td></tr></table><br/>
       <Button fullWidth style={colordark} variant="contained"   >
        <FacebookIcon></FacebookIcon>&nbsp; Connect with Facebook
       </Button>

      </Paper>
    </Grid>
    </>
)
}
export default Login;