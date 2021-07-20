import { Checkbox } from '@material-ui/core'
import { Grid , Paper , TextField ,Typography ,Link , Button} from '@material-ui/core'
import field from '../JSON/Signup.json'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import React from 'react'

import { useEffect } from 'react';
import JSONResult from "../translations/en/i18n.json"



    const Signup = () => {
        const [loginPage, setLoginPage] = React.useState([]);

   useEffect(() => {
     setLoginPage(JSONResult.loginPage);
   }, []);
    const color ={color:"white"}
    return (
       
               
        <Grid >
            <Paper elevation={10} className="paperStyle">
                <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                <p className="headerStyle">Join</p>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <br/>
                <p className="stylesPro">{loginPage.are_you_a_doctor}
                <Link >{loginPage.Register}</Link></p>
                </Grid>
                
                </Grid>
               <hr/>
               
                <form>
                {field.map((fields)=>{
                return(
                     <>
                <label key={fields.field_id} className="label">{fields.field_label}</label>
                <TextField id="outlined-basic"  variant="outlined" required fullWidth name={fields.field_label} placeholder={fields.field_placeholder}  type={fields.field_type}/>
                <br/><br/>
                </>
               )})}
              
                <FormControlLabel control={ <Checkbox
                 color ="primary"              
                 />}
                 label={loginPage.reg_checkbox} className="label"/>
                 <br/><br/>
                 <Typography className="label">{loginPage.agree}
                  <Link > {loginPage.terms}</Link>
                  </Typography>
                  <br/><br/>
                  <Button fullWidth color="primary" variant="contained" style={color}>{loginPage.register}</Button>
                </form>
            </Paper>
        </Grid>
        
    )
    
}

export default Signup
