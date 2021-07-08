import React from 'react';
import {Grid,Paper,TextField,Checkbox,Button,Typography,Link} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FacebookIcon from '@material-ui/icons/Facebook';
const Login=()=>{
    const paperStyle={padding :20,height:'85vh',width:400,margin:"20px auto"}
    const label={fontSize:14,fontWeight:400,color:'grey'}
    const color={backgroundColor:'rgb(102, 204, 255)',color:'white'}
    const skyblue={color:'rgb(102, 204, 255)',fontSize:14}
    const half={width:180,alignItems:"center"}
    const colordark={backgroundColor:"darkBlue",color:"white"}
return(
    <>
    <Grid>
        <Paper elevation={10} style={paperStyle}>
           <br/><br/>
           <label style={label}>Mobile Number/ Email ID</label>
           <TextField variant="outlined" type="email tel"  placeholder='Enter username' fullWidth required></TextField><br/><br/>
           <label style={label}>Password</label>
           <TextField variant="outlined" type='password'  placeholder='Enter password' fullWidth required></TextField><br/><br/>
           <Typography>
          <FormControlLabel control={ <Checkbox
        
       color=""
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />}label='Remember me for 30 days' style={label}/>
     
  <Link style={skyblue} href="#" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Forgot Password?
  </Link>
</Typography>
      <FormControlLabel control={ <Checkbox
        
        color=""
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />}label='Login with OTP instead of password' style={label}/><br/><br/>
      <Button fullWidth style={color} variant="contained"   >
  Login
</Button><br/><br/>
<table><tr colspan="2"><td><hr style={half}></hr></td>or<td><hr style={half}></hr></td></tr></table><br/>
<Button fullWidth style={colordark} variant="contained"   >
 <FacebookIcon></FacebookIcon>&nbsp; Connect with Facebook
</Button>

        </Paper>
    </Grid>
    </>
)
}
export default Login;