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
import { set } from "lodash";

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

// Approach to make editable form
// Use a state `editable` (boolean) which indicates whether form is editable or not.
// Set `editable` to `true` when Edit button is clicked and `false` when Save button is clicked (initially false).
// Then based on the `editable` value, you can conditionally render the inputs as read only.
const Profile = (props) => {
  
  
  const [put, setPut] = React.useState(true);
  const[hide,setHide]= React.useState(false);
  const[hide2,setHide2]= React.useState(true);
  

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







  // useEffect(() => {
  //   fetch(`http://localhost:4000/v1/user/${clientId}`)
  //     .then((response) => response.json())
  //     .then((data) => setProfileInfo(data.message));
  // }, []);
 
  if (profileInfo == null) {
    return (
      <Page>
        <div>Loading...</div>
      </Page>
    );
  }
 
 
 
  // Instead of changing button labels, try to use two separate buttons.
    //TODO: BUG e.target is button element which was clicked. Instead, input element is expected.
    // setData(e.target.value); // Trying to set data to the buttons's value attribute!!! Button has no value attribute.
//  const setEdit=(e)=>{
//    setState(e.target.value);
//  }

 const editbutton=()=>{
   setPut(false);
   setHide(true);
   setHide2(false);
  
 }
 const savebutton=()=>{
  setPut(true);
  setHide2(true);
  setHide(false);
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
          <Grid item xs={1} className={classes.button}>
          <Button onClick={editbutton} disabled={hide}  variant="contained" className={classes.button} color="primary">Edit</Button>
          </Grid>
          <Grid item xs={2} className={classes.button}>
          <Button onClick={savebutton} disabled={hide2}   variant="contained" className={classes.button} color="primary">Save changes</Button>
          </Grid>
          
        </Grid>
    <hr/>
        <Grid container wrap="nowrap" spacing={3}>
          
          <Grid xs={2} direction="column"  item xs className={classes.grid} >
           <Typography className={classes.grey} >Profile Photo</Typography>
          <Avatar alt="A" src={profileInfo.profileImage} className={classes.avatar} />
          </Grid>
          <Grid item xs={4}>
           <Typography className={classes.grey}>Pick a photo from your computer </Typography>
           <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          ADD PHOTO
        </Button>
      </label>
          </Grid>
          <Grid item xs={8} >
           <Typography className={classes.grey} >Name*</Typography>
           <TextField disabled={put} type="text"  onInput={handleChange}  value={username} variant="outlined"></TextField>
          </Grid>
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
