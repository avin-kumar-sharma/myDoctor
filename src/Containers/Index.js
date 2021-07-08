import React, { useState } from 'react';
import { Paper,Tabs , Tab } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Login from '../Components/Login';
import Signup from '../Components/Signup';

const SignInOutContainer=()=>{
    const [value,setValue]= useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const paperStyle={width:500,margin:"20px auto"}
    const widthch={width:250}
    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box p={2}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }
    return(
        <Paper style={paperStyle}>
        <Tabs 
       
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab style={widthch} label="Log In" />
          
          <Tab style={widthch} label="Register" />
        </Tabs>
        <TabPanel value={value} index={0}><Login/> </TabPanel>
        <TabPanel value={value} index={1}><Signup/> </TabPanel>
      </Paper>
    )
}

export default SignInOutContainer