import React from 'react';
import { Grid, Paper, TextField, Checkbox, Button, Typography, Link } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FacebookIcon from '@material-ui/icons/Facebook';
import '../Styles/Loginregister.css'
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../state/user/slice";
import JSONResult from "../translations/en/i18n.json"


const Login = () => {
  const [loginPage, setLoginPage] = React.useState([]);
  const [loginMap, setLoginMap] = React.useState(JSONResult.loginMap);

  useEffect(() => {
    setLoginMap(JSONResult.loginMap);

  }, []);

  useEffect(() => {
    setLoginPage(JSONResult.loginPage);
  }, []);

  const dispatch = useDispatch();
  const refsMap = {};
  refsMap[loginMap[0]['data_id']] = useRef();
  refsMap[loginMap[1]['data_id']] = useRef();

  function getLoginDetails() {
    const username = refsMap["1"].current.getElementsByTagName("input")[0].value;
    const password = refsMap["2"].current.getElementsByTagName("input")[0].value;
    return {
      username,
      password
    };
  }

  const loginStyle = { color: 'white' }
  const colordark = { backgroundColor: "darkBlue", color: "white" }
  return (
    <>
      <Grid>
        <Paper elevation={10} id="login" className="paperStylelogin">
          <br /><br />
          {loginMap.map((datas) => {
            return (
              <>
                <label className="label">{datas.data_label}</label>
                <TextField ref={refsMap[datas.data_id]} variant="outlined" type={datas.data_type} placeholder={datas.data_placeholder} fullWidth required></TextField><br /><br />
              </>
            )
          })}

          <Typography>


            <Link href="#" >
              {loginPage.forgot}
            </Link>
          </Typography>
          <br /><br />
          <Button fullWidth
            style={loginStyle} color="primary" variant="contained" onClick={() => { dispatch(login(getLoginDetails())) }} >
            {loginPage.login}
          </Button>
          <br /><br />



        </Paper>
      </Grid>
    </>
  )
}
export default Login;