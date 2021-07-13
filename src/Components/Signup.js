import { Checkbox } from '@material-ui/core'
import { Grid , Paper , TextField ,Typography ,Link , Button} from '@material-ui/core'
import field from '../JSON/Signup.json'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import React from 'react'
import info from '../JSON/Info.json'



    const Signup = () => {
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
                <p className="stylesPro">{info.are_you_a_doctor}
                <Link >{info.Register}</Link></p>
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
                 label={info.reg_checkbox} className="label"/>
                 <br/><br/>
                 <Typography className="label">{info.agree}
                  <Link > {info.terms}</Link>
                  </Typography>
                  <br/><br/>
                  <Button fullWidth color="primary" variant="contained" style={color}>{info.register}</Button>
                </form>
            </Paper>
        </Grid>
        
    )
    
}

export default Signup
