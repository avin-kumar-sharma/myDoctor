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
import { BrowserRouter, Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import DemoForm from './Password';
import { NoEncryption } from '@material-ui/icons';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    
  },
  link:{
    textDecoration:'none',
    color: 'black'
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    
  },
  drawerPaper: {
    width: drawerWidth,
    marginTop:65,
    position: 'absolute'
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
 

  return (
    <ProtectedPage >
    <div className={classes.root}>
      <BrowserRouter>
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
            <Link to="/Profile" className={classes.link}>
            <ListItem className={classes.list}>Profile</ListItem>
            </Link>
            <Link to="/DemoForm" className={classes.link}>
            <ListItem className={classes.list}>Change Password</ListItem>
            </Link>
          </List>
        
         
        </div>
      </Drawer>
      <main className={classes.content}>
      <Switch>
        <Route exact path="/settings" >
        <Profile/>
        </Route>
        <Route exact path="/Profile" >
        <Profile/>
        </Route>
        <Route exact path="/DemoForm">
          <DemoForm/>
        </Route>
      </Switch>
      </main>
      
      </BrowserRouter>
    </div>
    
    </ProtectedPage>
  );
}
