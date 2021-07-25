import React, { useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Chip from "@material-ui/core/Chip";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./styles";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {setAppointmentData} from "../../../state/appointment/slice.js"

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const SlotBooking = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  
  const dispatch = useDispatch();
  const history = useHistory();

  let { availableSlots } = props.data;
  const doctorId = props.data._id;

  dispatch(setAppointmentData(null));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function selectSlot(slotId, timeId) {
    const idxSlot = availableSlots.findIndex((s) => s._id === slotId);
    const idxTime = availableSlots[idxSlot].time.findIndex((t) => t._id === timeId);
    const date = new Date(availableSlots[idxSlot].date);
    const startTime = availableSlots[idxSlot].time[idxTime].startTime;
    const endTime = availableSlots[idxSlot].time[idxTime].endTime;
    dispatch(setAppointmentData({
      date: formatDate(date),
      startTime: formatTime(startTime),
      endTime: formatTime(endTime),
      doctorId,
    }));
    history.push(`/self-appointment`);
  }

  function formatTime(time){
    const parts = time.split(":");
    const hours = parseInt(parts[0]);
    const mins = parseInt(parts[1]);
    return `${String(hours).padStart(2, "0")}${String(mins).padStart(2, "0")}`;
  }

  function formatDate(dateObj) {
    const year = dateObj.getFullYear();
    const day = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  }

  return (
    <React.Fragment>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          {availableSlots.map((slotInfo, index) => (
            <Tab label={slotInfo.date} {...a11yProps(index)} />
          ))}
        </Tabs>
      </AppBar>
      {availableSlots.map((slotInfo, index) => (
        <TabPanel value={value} index={index}>
          <div className={classes.root}>
            {slotInfo.time.map((slot) => (
              <Chip
                variant="outlined"
                label={slot.startTime + " - " + slot.endTime}
                clickable
                onClick = {() => {selectSlot(slotInfo._id, slot._id)}}
                color="primary"
              />
            ))}
          </div>
        </TabPanel>
      ))}
    </React.Fragment>
  );
};

export default SlotBooking;
