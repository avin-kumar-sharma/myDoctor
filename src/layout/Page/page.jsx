import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { ReactComponent as Logo } from "../../icons/logo.svg";
import ProfileSection from "../components/ProfileSection/profileSection";
import { useStyles } from "./styles";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadprofile, logout } from "../../state/user/slice.js";
import { useEffect } from "react";
import JSONResult from "../../translations/en/i18n.json";
import Store from "../../state/index.js";
import { useSelector } from "react-redux";

function Page(props) {
  const classes = useStyles();
  const history = useHistory();

  const [loginPage, setLoginPage] = React.useState([]);
  const [showProfile, setShowProfile] = React.useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoginPage(JSONResult.loginPage);
  }, []);

  const profile = useSelector((state) => {
    return state.user.profile;
  });

  useEffect(() => {
    if (userLoggedIn()) {
      if (!tryShowProfile(Store)) {
        dispatch(
          loadprofile({
            id: profile?._id,
          })
        );
      }
    }
  });

  Store.subscribe(() => {
    tryShowProfile(Store);
  });

  function userLoggedIn() {
    const isLoggedIn = Store.getState().user.loggedIn;
    return isLoggedIn;
  }

  function tryShowProfile(store) {
    const profileAvailable = !!store.getState().user.profile;
    if (profileAvailable) {
      setShowProfile(true);
      return true;
    }
    return false;
  }

  function handleLogout() {
    setShowProfile(false);
    dispatch(logout());
    history.push("/");
  }
  return (
    <div style={{ minHeight: "100%" }}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Logo className={classes.logo} onClick={() => history.push("/")} />
          {showProfile ? (
            <ProfileSection onLogoutClick={handleLogout} />
          ) : (
            <Link to="/login" style={{textDecoration: 'none'}}>
              {" "}
              <Button color="primary" variant="contained">
                {loginPage.login}
              </Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Page;
