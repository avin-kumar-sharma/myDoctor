import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import SearchBar from "../../dashboard/components/SearchBar/searchBar";
import Specialisation from "../../dashboard/components/Specialization/specialisation";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { ReactComponent as Logo } from "../../icons/logo.svg";
import ProfileSection from "../components/ProfileSection/profileSection";
import { useStyles } from "./styles";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadDoctors } from "../../state/doctors/slice";
import { Link, useHistory } from "react-router-dom";
import { loadprofile, logout } from "../../state/user/slice.js";
import { useEffect } from "react";
import i18n from "../../translations/en/i18n.json";

function Page(props) {
  const classes = useStyles();
  const history = useHistory();
  const [specialization, setSpecialization] = useState();


  // const dispatch = useDispatch();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadDoctors());
  }, []);

  const userLoggedIn = useSelector((state) => {
    return state.user.loggedIn;
  });

  const userProfile = useSelector((state) => {
    return state.user.profile;
  });

  useEffect(() => {
    if (userLoggedIn && !userProfile) {
      dispatch(
        loadprofile({
          id: localStorage.getItem('user-id'),
        })
      );
    }
  });

  function handleLogout() {
    dispatch(logout());
    history.push("/");
  }
  const onSearchHandler = (searchString) => {
    dispatch(loadDoctors(1, specialization, searchString));
  };
  const onSelecteSpecialization = (selection) => {
    setSpecialization(selection);
    dispatch(loadDoctors(1, selection, ""));
  };
  return (
    <div style={{ minHeight: "100%" }}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          
          <Logo className={classes.logo} onClick={() => history.push("/")} />
          <div className={classes.searchSection}>
          <Specialisation onSelectSpecialization={onSelecteSpecialization} />
          <SearchBar onSearch={onSearchHandler} />
          </div>
          {userLoggedIn ? (
            <ProfileSection onLogoutClick={handleLogout} profile={userProfile} />
          ) : (
            <Link to="/login" style={{textDecoration: 'none'}}>
              {" "}
              <Button color="primary" variant="contained">
                {i18n["loginPage"]["login"]}
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
