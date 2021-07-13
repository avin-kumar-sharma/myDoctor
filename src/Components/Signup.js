import { Checkbox } from '@material-ui/core'
import { Grid , Paper , TextField ,Typography ,Link , Button} from '@material-ui/core'
import field from '../Signup.json'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import React from 'react'



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
                <p className="stylesPro">Are you a doctor?
                <Link >Register here</Link></p>
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
                 label='Recieve relevant offers and promotional communication from myDoctor' className="label"/>
                 <br/><br/>
                 <Typography className="label">By Signing up,I agree to 
                  <Link > terms</Link>
                  </Typography>
                  <br/><br/>
                  <Button fullWidth color="primary" variant="contained" style={color}>Login</Button>
                </form>
            </Paper>
        </Grid>
        
    )
    
}

export default Signup
