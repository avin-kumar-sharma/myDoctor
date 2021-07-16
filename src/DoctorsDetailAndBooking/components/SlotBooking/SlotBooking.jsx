import React, { useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Chip from "@material-ui/core/Chip";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./styles";
import JSONResult from "../../../../src/data.json";

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

const SlotBooking = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [slotInfo, setSlotInfo] = React.useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setSlotInfo(JSONResult.slotInfo);
  }, []);

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
          {slotInfo.map((slotInfo, index) => (
            <Tab label={slotInfo.date} {...a11yProps(index)} />
          ))}
        </Tabs>
      </AppBar>
      {slotInfo.map((slotInfo, index) => (
        <TabPanel value={value} index={index}>
          <div className={classes.root}>
            {slotInfo.slots.map((slot) => (
              <Chip variant="outlined" label={slot} clickable color="primary" />
            ))}
          </div>
        </TabPanel>
      ))}
    </React.Fragment>
  );
};

export default SlotBooking;
