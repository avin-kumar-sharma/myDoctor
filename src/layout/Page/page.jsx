import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { ReactComponent as Logo } from "../../icons/logo.svg";
import ProfileSection from "../components/ProfileSection/profileSection";
import { useStyles } from "./styles";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { loadprofile } from "../../state/user/slice.js";
import { useEffect } from "react";
import JSONResult from "../../translations/en/i18n.json";
import Store from "../../state/index.js";


function Page(props) {
  const classes = useStyles();

  const [loginPage, setLoginPage] = React.useState([]);
  const [showProfile, setShowProfile] = React.useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setLoginPage(JSONResult.loginPage);
  }, []);

  useEffect(() => {
    if (userLoggedIn()) {
      if (!tryShowProfile(Store)) {
        dispatch(loadprofile({
          id: localStorage.getItem("user-id")
        }));
      }
    }
  });

  Store.subscribe(() => {
    tryShowProfile(Store);
  });

  function userLoggedIn() {
    const hasUserId = localStorage.getItem("user-id");
    const hasAuthToken = localStorage.getItem("auth-token");
    return hasUserId && hasAuthToken;
  }
  
  function tryShowProfile(store) {
    const profileAvailable = !!store.getState().user.profile;
    if (profileAvailable) {
      setShowProfile(true);
      return true;
    }
    return false;
  }
  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Logo className={classes.logo} />
          {showProfile ? (
            <ProfileSection />
          ) : (
           <Link to="/login"> <Button color="primary" variant="contained">
              {loginPage.login}
            </Button></Link>
          )}
        </Toolbar>
      </AppBar>
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Page;
