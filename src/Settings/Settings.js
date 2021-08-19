import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ProtectedPage from '../layout/Page/protectedpage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Profile from './Profile'
import DemoForm from './Password'
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    marginTop:65
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    marginTop:65,
    position:"absolute",
    height: "120vh"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  link:{
    textDecoration:"none",
    color:"black"
  },
  list:{
    '&:hover':{
      backgroundColor:"rgb(63, 81, 181)",
      color:"white",
     
    }
  },
  span:{
    marginLeft:10
  },
  
    fullwidth:{
      width:1000
    }
  
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
    
      <List>
      
        <Link to="/Profile" className={classes.link}>
            <ListItem className={classes.list}><PersonIcon/><span className={classes.span}>Profile</span></ListItem>
            </Link>
            <Link to="/DemoForm" className={classes.link}>
            <ListItem className={classes.list}><LockIcon/><span className={classes.span}>Change Password</span></ListItem>
            </Link>
  
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
   
    <div className={classes.root}>
      <BrowserRouter>
      <CssBaseline />
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
         Settings
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
        <Route exact path="/settings" >
        <div className={classes.fullwidth}><Profile/></div>
        </Route>
        <Route exact path="/Profile" >
        <div className={classes.fullwidth}><Profile/></div>
        </Route>
        <Route exact path="/DemoForm">
        <div className={classes.fullwidth}> <DemoForm/></div>
        </Route>
      </Switch>
      </main>
      </BrowserRouter>
    </div>
   
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;