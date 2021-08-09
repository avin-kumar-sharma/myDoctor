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
  
  const [profileInfo, setProfileInfo] = React.useState({});
  const [put, setPut] = React.useState(true);
  
  

  const classes = useStyles();

  const profile = useSelector((state) => {
    return state.user.profile;
  });

  const clientId = profile._id;

  useEffect(() => {
    fetch(`http://localhost:4000/v1/user/${clientId}`)
      .then((response) => response.json())
      .then((data) => setProfileInfo(data.message));
  }, []);
 
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
   
  
 }
 const savebutton=()=>{
  setPut(true);
}
  return (
    <ProtectedPage>

    <Container maxWidth="lg" >
    <div className={classes.root}>
        <Grid   container wrap="nowrap" spacing={3}>
          <Grid item  xs={12} sm={6} direction="row" className={classes.heading}  >
            <Typography color="primary" noWrap className={classes.account}>
              Account Details
            </Typography>
           
          </Grid>
          <Grid item xs={12} sm={6} className={classes.button}>
          <Button onClick={editbutton}   variant="contained" className={classes.button} color="primary">Edit</Button>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.button}>
          <Button onClick={savebutton}   variant="contained" className={classes.button} color="primary">Save changes</Button>
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
           <TextField disabled={put} type="text" defaultValue={profileInfo.firstName + " " + profileInfo.lastName}  variant="outlined"></TextField>
          </Grid>
        </Grid>
      <hr/>
        <Grid container className={classes.grid} wrap="nowrap" spacing={3}>
          
          
            <Grid item xs={4}>
            <Typography className={classes.grey} >Mobile Number</Typography>
           <TextField  InputProps={{
            readOnly: false,
          }} type="number" variant="outlined"   value={profileInfo.contactNumber}></TextField>
           <Typography className={classes.grey} >Date of birth</Typography>
           <TextField type="date" variant="outlined"></TextField>
            </Grid>
            <Grid item xs={4}>
            <Typography className={classes.grey} >Email</Typography>
           <TextField disabled={put} type="email" defaultValue={profileInfo.email} defaultValue={profileInfo.email} variant="outlined"></TextField>
           <Typography className={classes.grey} >Blood Group</Typography>
           <TextField disabled={put} select variant="outlined" defaultValue="A+" className={classes.textField}>
           {bloodgroups.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
           </TextField>
            </Grid>
            <Grid item xs={4}>
            <Typography className={classes.grey} value={profileInfo.gender}>Gender*</Typography>
           <TextField disabled={put} className={classes.textField}  select variant="outlined">
           {gender.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
           </TextField>
           <Typography  className={classes.grey} >Timezone</Typography>
           <TextField disabled={put} select className={classes.textField} variant="outlined"></TextField>
            </Grid>
          
        </Grid>
     <hr/>
        <Grid container className={classes.grid} wrap="nowrap" spacing={3}>
         
          <Grid item xs>
          <Typography className={classes.grey} >House No./Street Name/Area</Typography>
           <TextField disabled={put} value={profileInfo.address} type="text" variant="outlined"></TextField>
           <Typography className={classes.grey} >State</Typography>
           <TextField disabled={put} type="text" variant="outlined"></TextField>
          </Grid>
          <Grid item xs>
          <Typography className={classes.grey} >Colony/Street/Locality</Typography>
           <TextField disabled={put} type="text" variant="outlined" defaultValue={profileInfo.address}></TextField>
           <Typography className={classes.grey} >Country*</Typography>
           <TextField disabled={put} select className={classes.textField} type="text" variant="outlined" defaultValue={profileInfo.country}></TextField>
          </Grid>
          <Grid item xs>
          <Typography className={classes.grey} >City</Typography>
           <TextField disabled={put} type="text" variant="outlined" defaultValue={profileInfo.city}></TextField>
           <Typography className={classes.grey} >Pincode</Typography>
           <TextField disabled={put} type="number" variant="outlined" defaultValue={profileInfo.pincode}></TextField>
          </Grid>
        </Grid>
     
    </div>
    </Container>
    </ProtectedPage>
  );
};

export default Profile;
