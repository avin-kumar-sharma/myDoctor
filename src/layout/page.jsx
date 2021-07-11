import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { ReactComponent as Logo } from "../icons/logo.svg";
import ProfileSection from "./components/profileSection";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../state/user/slice";

const useStyles = makeStyles((theme) =>
  createStyles({
    main: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {},
    appBar: {
      backgroundColor: "transparent",
      boxShadow: "none",
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    logo: {
      height: 50,
    },
    avatar: {
      width: 50,
      height: 50,
    },
  })
);

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
            <Button color="primary" variant="contained" onClick={() => {
              dispatch(login());
            }}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Page;
