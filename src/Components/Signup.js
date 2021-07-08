import { Checkbox } from '@material-ui/core'
import { Grid , Paper , TextField ,Typography ,Link , Button} from '@material-ui/core'

import FormControlLabel from '@material-ui/core/FormControlLabel';
import React from 'react'

const Signup = () => {
    const paperStyle = {padding : '30px 20px',width:400 , margin:"20px auto"}
    const headerStyle = {color:"grey",fontSize:24}
    const labelStyle = {fontSize : 14, fontWeight:500, color : "grey"}
    const pStyle ={fontSize: 12,align:"center",color:"grey"}
    const checkStyle = { color:"grey"}
    const lStyle = {color:"rgb(102, 204, 255)"}
    const color ={backgroundColor:"rgb(102, 204, 255)",color:"white"}
    const stylesPro = {fontSize:12, color:"grey"}
    const oStyle = {color:"orange"}
    return (
        <Grid >
            <Paper  style={paperStyle}>
                <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                <p style={headerStyle}>Join</p>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <br/>
                <p style={stylesPro}>Are you a doctor?
                <Link style={oStyle}>Register here</Link></p>
                </Grid>
                
                </Grid>
               <hr/>
                <form>
                <label style={labelStyle}>Full Name</label>
                
                <TextField id="outlined-basic"  variant="outlined" required fullWidth name="name" placeholder="Full Name" type="name" />
                <br/><br/>
                <label style={labelStyle}>Mobile Number</label>
                
                <TextField id="outlined-basic"  variant="outlined" required fullWidth name="number" placeholder="XXXX-XXX-XXX" type="number"/>
                <br/><br/>
                <label style={labelStyle}>Create Password</label>
                
                <TextField id="outlined-basic"  variant="outlined" required fullWidth name="password" placeholder="create password" type="password"/>
                <br/><br/>
                <FormControlLabel control={ <Checkbox
                 color="rgb(102, 204, 255)"
                 inputProps={{ 'aria-label': 'secondary checkbox' }}
                 />}
                 label='Recieve relevant offers and promotional communication from Practo' style={checkStyle}/>
                 <br/><br/>
                 <Typography style={pStyle}>By Signing up,I agree to 
                  <Link style={lStyle}> terms</Link>
                  </Typography>
                  <br/><br/>
                  <Button fullWidth style={color} variant="contained">Login</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup
