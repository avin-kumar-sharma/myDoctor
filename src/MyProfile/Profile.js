import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import Page from "../layout/Page/page";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import {Typography,Paper,TextField} from "@material-ui/core";
import { useStyles } from "./styles";
import { useSelector } from "react-redux";
import { MenuItem } from "@material-ui/core";

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
  const [profileInfo, setProfileInfo] = React.useState({});

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
  
  return (
    <div className={classes.root}>
       
        <Grid   container wrap="nowrap" spacing={3}>
          
          <Grid item  xs={12} sm={6} direction="row" className={classes.heading}  >
            <Typography noWrap className={classes.account}>
              Accounts
            </Typography>
           
          </Grid>
          <Grid item xs={12} sm={6} className={classes.button}>
          <Button variant="contained" className={classes.button} color="primary">Save Changes</Button>
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
         <TextField type="file" accept="image/png, image/jpeg"></TextField>
          </Grid>
          <Grid item xs={8} >
           <Typography className={classes.grey} >Name*</Typography>
           <TextField type="text" value={profileInfo.firstName + " " + profileInfo.lastName} variant="outlined"></TextField>
          </Grid>
        </Grid>
      <hr/>
        <Grid container className={classes.grid} wrap="nowrap" spacing={3}>
          
          
            <Grid item xs={4}>
            <Typography className={classes.grey} >Phone Number</Typography>
           <TextField type="number" variant="outlined" value={profileInfo.contactNumber}></TextField>
           <Typography className={classes.grey} >Date of birth</Typography>
           <TextField type="date" variant="outlined"></TextField>
            </Grid>
            <Grid item xs={4}>
            <Typography className={classes.grey} >Email</Typography>
           <TextField type="email" value={profileInfo.email} variant="outlined"></TextField>
           <Typography className={classes.grey} >Blood Group</Typography>
           <TextField select variant="outlined" className={classes.textField}>
           {bloodgroups.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
           </TextField>
            </Grid>
            <Grid item xs={4}>
            <Typography className={classes.grey} value={profileInfo.gender}>Gender*</Typography>
           <TextField className={classes.textField}  select variant="outlined">
           {gender.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
           </TextField>
           <Typography  className={classes.grey} >Timezone</Typography>
           <TextField  select className={classes.textField} variant="outlined"></TextField>
            </Grid>
          
        </Grid>
     <hr/>
        <Grid container className={classes.grid} wrap="nowrap" spacing={3}>
         
          <Grid item xs>
          <Typography className={classes.grey} >House No./Street Name/Area</Typography>
           <TextField value={profileInfo.address} type="text" variant="outlined"></TextField>
           <Typography className={classes.grey} >State</Typography>
           <TextField type="text" variant="outlined"></TextField>
          </Grid>
          <Grid item xs>
          <Typography className={classes.grey} >Colony/Street/Locality</Typography>
           <TextField type="text" variant="outlined"></TextField>
           <Typography className={classes.grey} >Country*</Typography>
           <TextField select className={classes.textField} type="text" variant="outlined"></TextField>
          </Grid>
          <Grid item xs>
          <Typography className={classes.grey} >City</Typography>
           <TextField  type="text" variant="outlined"></TextField>
           <Typography className={classes.grey} >Pincode</Typography>
           <TextField type="number" variant="outlined"></TextField>
          </Grid>
        </Grid>
     
    </div>
  );
};

export default Profile;
