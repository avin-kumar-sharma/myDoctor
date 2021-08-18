import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ProtectedPage from '../layout/Page/protectedpage';
import Profile from './Profile';
import Password from './Password';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    marginTop:65,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
   width:1000
    
  },
  list:{
    cursor:"pointer",
    '&:hover':{
      backgroundColor:"lightBlue",
      color:"darkBlue",
      borderRadius:20
    }
  }
}));

export default function ClippedDrawer() {
  const classes = useStyles();
  const[display,setDisplay]=React.useState(true);
const displayl=()=>{
   setDisplay(true);
}
const displayp=()=>{
  setDisplay(false);
}
  return (
    <ProtectedPage>
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem onClick={displayl} className={classes.list}>Profile</ListItem>
            <ListItem onclick={displayp} className={classes.list}>Change Password</ListItem>
            
          </List>
        
         
        </div>
      </Drawer>
        {(display)?
          <main className={classes.content}>
      
        <Profile />
        </main>
      :
      <main className={classes.content}>
      <Password/>
      </main>
      }
      
    </div>
    
    </ProtectedPage>
  );
}
