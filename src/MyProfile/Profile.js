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
const [contact, setContact] = React.useState();

useEffect(()=>{
  setContact(profileInfo.contactNumber);
},[contacty])
const handleChange2=(e)=>{
  setContact(e.target.value);
  
}
//username hook
var username1 = profileInfo.firstName + " " + profileInfo.lastName;
const[username,setUsername] = React.useState();

useEffect(()=>{
  setUsername(username1);
},[username1])

const handleChange=(e)=>{
  setUsername(e.target.value);
  
}
//dob hook
var dob1 = profileInfo.dateOfBirth;
const[dob,setDob] = React.useState();

useEffect(()=>{
  setDob(dob1);
},[dob1])

const handleChange3=(e)=>{
  setDob(e.target.value);
  
}

//email hook
var email1 = profileInfo.email;
const[email,setEmail] = React.useState();

useEffect(()=>{
  setEmail(email1);
},[email1])

const handleChange4=(e)=>{
  setEmail(e.target.value);
  
}


//bloodGroup hook
var bloodgroup1 = profileInfo.bloodgroup;
const[bloodgroup,setBloodgroup] = React.useState();

useEffect(()=>{
  setBloodgroup(bloodgroup1);
},[bloodgroup1])

const handleChange5=(e)=>{
  setBloodgroup(e.target.value);
  
}

//gender hook
var gender1 = profileInfo.gender;
const[genderval,setGenderval] = React.useState();

useEffect(()=>{
  setGenderval(gender1);
},[gender1])

const handleChange6=(e)=>{
  setGenderval(e.target.value);
  
}
//timezone hook
var timezone1 = profileInfo.timezone;
const[timezone,setTimezone] = React.useState();

useEffect(()=>{
  setTimezone(timezone1);
},[timezone1])

const handleChange7=(e)=>{
  setTimezone(e.target.value);
  
}
//address hook
var address1 = profileInfo.address;
const[address,setAddress] = React.useState();

useEffect(()=>{
  setAddress(address1);
},[address1])

const handleChange8=(e)=>{
  setAddress(e.target.value);
  
}

//state hook
var state1 = profileInfo.state;
const[state,setState] = React.useState();

useEffect(()=>{
  setState(state1);
},[state1])

const handleChange9=(e)=>{
  setState(e.target.value);
  
}
//locality hook
var locality1 = profileInfo.locality;
const[locality,setLocality] = React.useState();

useEffect(()=>{
  setLocality(locality1);
},[locality1])

const handleChange10=(e)=>{
  setLocality(e.target.value);
  
}
//country hook
var country1 = profileInfo.country;
const[country,setCountry] = React.useState();

useEffect(()=>{
  setCountry(country1);
},[country1])

const handleChange11=(e)=>{
  setCountry(e.target.value);
  
}
//city hook
var city1 = profileInfo.city;
const[city,setCity] = React.useState();

useEffect(()=>{
  setCity(city1);
},[city1])

const handleChange12=(e)=>{
  setCity(e.target.value);
  
}
//pincode hook
var pincode1 = profileInfo.pincode;
const[pincode,setPincode] = React.useState();

useEffect(()=>{
  setPincode(pincode1);
},[pincode1])

const handleChange13=(e)=>{
  setPincode(e.target.value);
  
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
    
    <ProtectedPage>
     
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
          <Button onClick={editbutton}  variant="contained" className={classes.button} color="primary">Edit profile</Button>
          </Grid>
           :
          <Grid item xs={2} className={classes.button}>
          <Button onClick={savebutton}   variant="contained" className={classes.button} color="primary">Save changes</Button>
          </Grid> 
          }
 
          
        </Grid>
    <hr/>
    <div class="profilepic">
    <Avatar class="profilepic__image" src="data:image/jpeg;base64,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" width="150" height="150" alt="Profibild" />
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
</div>
   
          <br/>
          <Grid item  >
           <Typography className={classes.namee}  >Name*</Typography>
           <TextField disabled={put} type="text" className={classes.name}  onInput={handleChange}  value={username} variant="outlined"></TextField>
          </Grid>
        
      <hr/>
        <Grid container className={classes.grid} wrap="nowrap" spacing={3}>
          
          
            <Grid item xs={4}>
            <Typography className={classes.grey} >Mobile Number*</Typography>
           <TextField   type="number" disabled={put} variant="outlined" onInput={handleChange2}  value={contact}></TextField>
           <Typography className={classes.grey} >Date of birth</Typography>
           <TextField type="date" disabled={put}  onInput={handleChange3}  value={dob} variant="outlined"></TextField>
            </Grid>
            <Grid item xs={4}>
            <Typography className={classes.grey} >Email</Typography>
           <TextField disabled={put} type="email" onInput={handleChange4}  value={email} variant="outlined"></TextField>
           <Typography className={classes.grey} >Blood Group</Typography>
           <TextField disabled={put} select variant="outlined" onInput={handleChange5}  value={bloodgroup} className={classes.textField}>
           {bloodgroups.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
           </TextField>
            </Grid>
            <Grid item xs={4}>
            <Typography className={classes.grey} value={profileInfo.gender}>Gender*</Typography>
           <TextField disabled={put} className={classes.textField} onInput={handleChange6}  value={genderval} select variant="outlined">
           {gender.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
           </TextField>
           <Typography  className={classes.grey} >Timezone</Typography>
           <TextField disabled={put} select className={classes.textField} onInput={handleChange7}  value={timezone} variant="outlined"></TextField>
            </Grid>
          
        </Grid>
     <hr/>
        <Grid container className={classes.grid} wrap="nowrap" spacing={3}>
         
          <Grid item xs>
          <Typography className={classes.grey} >House No./Street Name/Area</Typography>
           <TextField disabled={put} onInput={handleChange8}  value={address} type="text" variant="outlined"></TextField>
           <Typography className={classes.grey} >State</Typography>
           <TextField disabled={put} type="text" onInput={handleChange9}  value={state} variant="outlined"></TextField>
          </Grid>
          <Grid item xs>
          <Typography className={classes.grey} >Colony/Street/Locality</Typography>
           <TextField disabled={put} type="text" variant="outlined"  onInput={handleChange10}  value={locality}></TextField>
           <Typography className={classes.grey} >Country*</Typography>
           <TextField disabled={put} select className={classes.textField} type="text" variant="outlined"  onInput={handleChange11}  value={country}></TextField>
          </Grid>
          <Grid item xs>
          <Typography className={classes.grey} >City</Typography>
           <TextField disabled={put} type="text" variant="outlined" onInput={handleChange12}  value={city} ></TextField>
           <Typography className={classes.grey} >Pincode</Typography>
           <TextField disabled={put} type="number" variant="outlined"  onInput={handleChange13}  value={pincode}></TextField>
          </Grid>
        </Grid>
     
    </div>
    </Container>
    </ProtectedPage>
  );
};

export default Profile;
