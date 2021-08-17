import { Container, Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import Page from "../layout/Page/page";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import {Typography,TextField} from "@material-ui/core";
import { useStyles } from "./styles";
import { useSelector } from "react-redux";
import { MenuItem } from "@material-ui/core";
import ProtectedPage from "../layout/Page/protectedpage";
import './editprofile.css'

const gender = [

  {
    value:"male",
    label:"male",
  },
  {
    value:"female",
    label:"female",
  },{
    value:"others",
    label:"others",
  },
]
const bloodgroups = [
  {
    value: 'A+',
    label: 'A+',
  },
  {
    value: 'A-',
    label: 'A-',
  },
  {
    value: 'B+',
    label: 'B+',
  },
  {
    value: 'AB-',
    label: 'AB-',
  },
  {
    value: 'AB+',
    label: 'AB+',
  },
  {
    value: 'O+',
    label: 'O+',
  },
  {
    value: 'O-',
    label: 'O-',
  },
];

const Profile = (props) => {
  
  
  const [put, setPut] = React.useState(true);
  const [text, setText] = React.useState();
  
  
  const classes = useStyles();

  const profile = useSelector((state) => {
    return state.user.profile;
  });
  const [profileInfo, setProfileInfo] = React.useState({});
  useEffect(()=>{
    setProfileInfo(profile);
  })
  const clientId = profile._id;


//contactNumber Hook

var contacty = profileInfo.contactNumber;
var emaily = profileInfo.email;
var namey = profileInfo.firstName+" "+profileInfo.lastName;
var doby = profileInfo.dateOfBirth;
var addressy= profileInfo.address;
var statey = profileInfo.state;
var localityy= profileInfo.locality;
var cityy = profileInfo.city;
var pincodey = profileInfo.pincode;
const [state, setState] = React.useState({contact:'',email:'',name:'',dob:'',address:'',states:'',locality:'',city:'',pincode:''});

useEffect(()=>{
  setState({contact:contacty,email:emaily,name:namey,dob:doby,address:addressy,states:statey,locality:localityy,city:cityy,pincode:pincodey});
},[contacty,emaily,namey,doby,addressy,statey,localityy,cityy,pincodey])
const handleChange=(e)=>{
  setState(e.target.value);
  
}
  if (profileInfo == null) {
    return (
      <Page>
        <div>Loading...</div>
      </Page>
    );
  }
 
 const editbutton=()=>{
   setPut(false);
 }
 const savebutton=()=>{
  setPut(true);

}
 
  return (
    <Container maxWidth="lg" >
    <div className={classes.root}>
        <Grid   container wrap="nowrap" spacing={3}>
          <Grid item  xs={9} sm={12}  direction="row" className={classes.heading}  >
            <Typography color="primary" noWrap className={classes.account}>
              Account Details
            </Typography>
           
          </Grid>
          {(put) ?
            <Grid item xs={1} className={classes.button}>
          <Button onClick={editbutton}  variant="contained" className={classes.button} color="primary">Edit</Button>
          </Grid>
           :
          <Grid item xs={2} className={classes.button}>
          <Button onClick={savebutton}   variant="contained" className={classes.button} color="primary">Save changes</Button>
          </Grid> 
          }
 
          
        </Grid>
    <hr/>
    <div class="profilepic">
      {(!put)
      ?
      <Avatar class="profilepic__image" src="data:image/jpeg;base64,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" width="150" height="150" alt="Profibild" />
    :
    <Avatar class="profilepicimage" src="data:image/jpeg;base64,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" width="150" height="150" alt="Profibild" />
    
      }{(!put)?
    <>
    <input 
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
       <label htmlFor="contained-button-file">
  <div class="profilepic__content">
  
    <span class="profilepic__icon"><i class="fas fa-camera"></i></span>
    <span class="profilepic__text">Edit Profile</span>
    
  </div></label>
  </>
  : 
  <></>}
</div>
   
          <br/>
          <Grid item  >
           <Typography className={classes.namee}  >Name*</Typography>
           <TextField disabled={put} type="text" className={classes.name}  onInput={handleChange}  value={state.name} variant="outlined"></TextField>
          </Grid>
        
      <hr/>
        <Grid container className={classes.grid} wrap="nowrap" spacing={3}>
          
          
            <Grid item xs={4}>
            <Typography className={classes.grey} >Mobile Number*</Typography>
           <TextField   type="number" disabled={put} variant="outlined" onInput={handleChange}  value={state.contact}></TextField>
           <Typography className={classes.grey} >Date of birth</Typography>
           <TextField type="date" disabled={put}  onInput={handleChange}  value={state.dob} variant="outlined"></TextField>
            </Grid>
            <Grid item xs={4}>
            <Typography className={classes.grey} >Email</Typography>
           <TextField disabled={put} type="email" onInput={handleChange}  value={state.email} variant="outlined"></TextField>
           <Typography className={classes.grey} >Blood Group</Typography>
           <TextField disabled={put} select variant="outlined" onInput={handleChange}  defaultValue={profileInfo.bloodgroup} className={classes.textField}>
           {bloodgroups.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
           </TextField>
            </Grid>
            <Grid item xs={4}>
            <Typography className={classes.grey} >Gender*</Typography>
           <TextField disabled={put} className={classes.textField} defaultValue={profileInfo.gender} select variant="outlined">
           {gender.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
           </TextField>
           <Typography  className={classes.grey} >Timezone</Typography>
           <TextField disabled={put} select className={classes.textField}   defaultValue={profileInfo.timezone} variant="outlined"></TextField>
            </Grid>
          
        </Grid>
     <hr/>
        <Grid container className={classes.grid} wrap="nowrap" spacing={3}>
         
          <Grid item xs>
          <Typography className={classes.grey} >House No./Street Name/Area</Typography>
           <TextField disabled={put} onInput={handleChange}  value={state.address} type="text" variant="outlined"></TextField>
           <Typography className={classes.grey} >State</Typography>
           <TextField disabled={put} type="text" onInput={handleChange}  value={state.states} variant="outlined"></TextField>
          </Grid>
          <Grid item xs>
          <Typography className={classes.grey} >Colony/Street/Locality</Typography>
           <TextField disabled={put} type="text" variant="outlined"  onInput={handleChange}  value={state.locality}></TextField>
           <Typography className={classes.grey} >Country*</Typography>
           <TextField disabled={put} select className={classes.textField} type="text" variant="outlined"  onInput={handleChange}  defaultValue={state.country}></TextField>
          </Grid>
          <Grid item xs>
          <Typography className={classes.grey} >City</Typography>
           <TextField disabled={put} type="text" variant="outlined" onInput={handleChange}  value={state.city} ></TextField>
           <Typography className={classes.grey} >Pincode</Typography>
           <TextField disabled={put} type="number" variant="outlined"  onInput={handleChange}  value={state.pincode}></TextField>
          </Grid>
        </Grid>
     
    </div>
    </Container>
   
  );
};

export default Profile;
