import React from 'react';
import { Grid, Paper, TextField, Checkbox, Button, Typography, Link } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FacebookIcon from '@material-ui/icons/Facebook';
import '../Styles/Loginregister.css'
import { useEffect } from 'react';
import JSONResult from "../translations/en/i18n.json"


const Login = () => {
  const [loginPage, setLoginPage] = React.useState([]);
  const [loginMap,setLoginMap]=React.useState([]);

  useEffect(() => {
    setLoginMap(JSONResult.loginMap);

  }, []);

   useEffect(() => {
     setLoginPage(JSONResult.loginPage);
   }, []);

  const login = { color: 'white' }
  const colordark = { backgroundColor: "darkBlue", color: "white" }
  return (
    <>
      <Grid>
        <Paper elevation={10} id="login" className="paperStylelogin">
        <br/><br/>
          {loginMap.map((datas) => {
            return (
              <>   
                <label className="label">{datas.data_label}</label>
                <TextField variant="outlined" type={datas.data_type} placeholder={datas.data_placeholder} fullWidth required></TextField><br /><br />
              </>
            )
          })}

          <Typography>
           

            <Link  href="#" >
              {loginPage.forgot}
            </Link>
          </Typography>
          <br /><br />
          <Button fullWidth
            style={login} color="primary" variant="contained">
            {loginPage.login}
          </Button>
          <br /><br />
          
        

        </Paper>
      </Grid>
    </>
  )
}
export default Login;