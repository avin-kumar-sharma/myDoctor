import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { ReactComponent as Logo } from "../../icons/logo.svg";
import ProfileSection from "../components/ProfileSection/profileSection";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../state/user/slice";
import { useStyles } from "./styles";
import {Link} from 'react-router-dom';
import info from '../../JSON/Info.json'

function Page(props) {
  const classes = useStyles();
  const profile = useSelector((state) => {
    console.log(state);
    return state.user.profile;
  });
  const dispatch = useDispatch();
  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Logo className={classes.logo} />
          {profile ? (
            <ProfileSection />
          ) : (
           <Link to="/login"> <Button color="primary" variant="contained" onClick={() => {
              dispatch(login());
            }}>
              {info.login}
            </Button></Link>
          )}
        </Toolbar>
      </AppBar>
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Page;
