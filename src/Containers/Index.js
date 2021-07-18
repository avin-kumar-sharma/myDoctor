import React, { useState } from 'react';
import { Paper,Tabs , Tab } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Login from '../Components/Login';
import Signup from '../Components/Signup';
import '../Styles/Loginregister.css'
import info from '../JSON/Info.json'
const SignInOutContainer=({field})=>{
    const [value,setValue]= useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
   
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
        <Paper className="paperStyle2" >
        <Tabs 
       
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab className="widthch" label={info.login} />
          
          <Tab className="widthch" label={info.register} />
        </Tabs>
        <TabPanel value={value} index={0}><Login /> </TabPanel>
        <TabPanel value={value} index={1}><Signup field={field}/> </TabPanel>
      </Paper>
    )
}

export default SignInOutContainer