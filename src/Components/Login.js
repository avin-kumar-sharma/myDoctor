import React from 'react';
import { Grid, Paper, TextField, Checkbox, Button, Typography, Link } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FacebookIcon from '@material-ui/icons/Facebook';
import '../Styles/Loginregister.css'
import data from '../JSON/Login.json'
import { useEffect } from 'react';
import JSONResult from "../translations/en/i18n.json"


const Login = () => {
  const [loginPage, setLoginPage] = React.useState([]);

   useEffect(() => {
     setLoginPage(JSONResult.loginPage);
   }, []);
  const login = { color: 'white' }
  const colordark = { backgroundColor: "darkBlue", color: "white" }
  return (
    <>
      <Grid>
        <Paper elevation={10} className="paperStyle">
        <br/><br/>
          {data.map((datas) => {
            return (
              <>   
                <label className="label">{datas.data_label}</label>
                <TextField variant="outlined" type={datas.data_type} placeholder={datas.data_placeholder} fullWidth required></TextField><br /><br />
              </>
            )
          })}

          <Typography>
            <FormControlLabel control={
              <Checkbox color="primary" />
            }
              label={loginPage.info_remember_me} className="label" />

            <Link className="forgotpw" href="#" >
              {loginPage.forgot}
            </Link>
          </Typography>


          <FormControlLabel control={
            <Checkbox
              color="primary" />}
            label={loginPage.Login_with_otp} className="label" />
          <br /><br />
          <Button fullWidth
            style={login} color="primary" variant="contained">
            {loginPage.login}
          </Button>
          <br /><br />
          <table><tr colspan="2"><td><hr className="halfline"></hr></td>or<td><hr className="halfline"></hr></td></tr></table><br />
          <Button fullWidth style={colordark} variant="contained"   >
            <FacebookIcon></FacebookIcon>{loginPage.facebook}
          </Button>

        </Paper>
      </Grid>
    </>
  )
}
export default Login;