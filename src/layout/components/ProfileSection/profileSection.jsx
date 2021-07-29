import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import { Avatar, Menu } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/PersonOutline";
import AppointmentsIcon from "@material-ui/icons/CalendarToday";
import LogoutIcon from "@material-ui/icons/ExitToApp";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../state/user/slice";
import { useStyles } from "./styles";
import { Link, useHistory } from "react-router-dom";

export default function ProfileSection() {
  const classes = useStyles();
  const anchorRef = React.useRef(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.user);
  const history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onLogoutClick = () => {
    dispatch(logout());
    setAnchorEl(null);
    history.push("/login");
  };

  return (
    <div className={classes.root}>
      <div>
        <Avatar
          src={profile.profileImage}
          className={classes.avatar}
          ref={anchorRef}
          aria-haspopup="true"
          onClick={handleClick}
        />
        <Menu
          id="simple-menu"
          onClose={handleClose}
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
        >
          <MenuItem
            onClick={() => {
              history.push("/profile");
            }}
          >
            <SearchIcon style={{ marginRight: "8px" }} /> Profile
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <AppointmentsIcon style={{ marginRight: "8px" }} /> My Appointments
          </MenuItem>
          <MenuItem onClick={onLogoutClick}>
            <LogoutIcon style={{ marginRight: "8px" }} /> Logout
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}
