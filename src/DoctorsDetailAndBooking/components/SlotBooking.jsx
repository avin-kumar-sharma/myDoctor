import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Button } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1.5),
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  primaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.primary,
  },
}));

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

  //TODO: render tabs using map
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
          <Tab label="July 12, Monday" {...a11yProps(0)} />
          <Tab label="July 13, Tuesday" {...a11yProps(1)} />
          <Tab label="July 14, Wednesday" {...a11yProps(2)} />
          <Tab label="July 15, Thursday" {...a11yProps(3)} />
          <Tab label="July 16, Friday" {...a11yProps(4)} />
          <Tab label="July 17, Saturday" {...a11yProps(5)} />
          <Tab label="July 18, Sunday" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div className={classes.root}>
          <Chip
            variant="outlined"
            label="08:30 AM - 09:00 AM"
            clickable
            color="primary"
          />
          <Chip
            variant="outlined"
            label="09:30 AM - 10:00 AM"
            clickable
            color="primary"
          />
          <Chip
            variant="outlined"
            label="10:00 AM - 10:30 AM"
            clickable
            color="primary"
          />
          <Chip
            variant="outlined"
            label="11:00 AM - 11:30 AM"
            clickable
            color="primary"
          />
          <Chip
            variant="outlined"
            label="07:30 PM - 08:00 PM"
            clickable
            color="primary"
          />
          <Chip
            variant="outlined"
            label="08:30 PM - 09:00 PM"
            clickable
            color="primary"
          />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className={classes.root}>
          <Chip
            variant="outlined"
            label="10:30 AM - 11:00 AM"
            clickable
            color="primary"
          />
          <Chip
            variant="outlined"
            label="11:00 AM - 11:30 AM"
            clickable
            color="primary"
          />
          <Chip
            variant="outlined"
            label="07:30 PM - 08:00 PM"
            clickable
            color="primary"
          />
          <Chip
            variant="outlined"
            label="08:30 PM - 09:00 PM"
            clickable
            color="primary"
          />
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className={classes.root}>
          <Chip
            variant="outlined"
            label="10:30 AM - 11:00 AM"
            clickable
            color="primary"
          />
          <Chip
            variant="outlined"
            label="11:00 AM - 11:30 AM"
            clickable
            color="primary"
          />
          <Chip
            variant="outlined"
            label="07:30 PM - 08:00 PM"
            clickable
            color="primary"
          />
          <Chip
            variant="outlined"
            label="08:30 PM - 09:00 PM"
            clickable
            color="primary"
          />
          <Chip
            variant="outlined"
            label="09:00 PM - 09:30 PM"
            clickable
            color="primary"
          />
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className={classes.root}>
          <Chip
            variant="outlined"
            label="08:30 AM - 09:00 AM"
            clickable
            color="primary"
          />
          <Chip
            variant="outlined"
            label="09:00 AM - 09:30 AM"
            clickable
            color="primary"
          />
          <Chip
            variant="outlined"
            label="10:00 AM - 10:30 AM"
            clickable
            color="primary"
          />
          <Chip
            variant="outlined"
            label="10:30 AM - 11:00 AM"
            clickable
            color="primary"
          />
          <Chip
            variant="outlined"
            label="11:00 AM - 11:30 AM"
            clickable
            color="primary"
          />
          <Chip
            variant="outlined"
            label="07:30 PM - 08:00 PM"
            clickable
            color="primary"
          />
          <Chip
            variant="outlined"
            label="08:30 PM - 09:00 PM"
            clickable
            color="primary"
          />
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <div className={classes.root}>
          <Chip
            variant="outlined"
            label="10:30 AM - 11:00 AM"
            clickable
            color="primary"
          />
          <Chip
            variant="outlined"
            label="11:00 AM - 11:30 AM"
            clickable
            color="primary"
          />
          <Chip
            variant="outlined"
            label="07:30 PM - 08:00 PM"
            clickable
            color="primary"
          />
          <Chip
            variant="outlined"
            label="08:30 PM - 09:00 PM"
            clickable
            color="primary"
          />
        </div>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <div className={classes.root}>
          <Chip
            variant="outlined"
            label="10:00 AM - 10:30 AM"
            clickable
            color="primary"
          />
          <Chip
            variant="outlined"
            label="10:30 AM - 11:00 AM"
            clickable
            color="primary"
          />
          <Chip
            variant="outlined"
            label="11:00 AM - 11:30 AM"
            clickable
            color="primary"
          />
          <Chip
            variant="outlined"
            label="07:30 PM - 08:00 PM"
            clickable
            color="primary"
          />
          <Chip
            variant="outlined"
            label="08:30 PM - 09:00 PM"
            clickable
            color="primary"
          />
        </div>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <div className={classes.root}>
          <Chip
            variant="outlined"
            label="09:30 AM - 10:00 AM"
            clickable
            color="primary"
          />
          <Chip
            variant="outlined"
            label="10:00 AM - 10:30 AM"
            clickable
            color="primary"
          />
          <Chip
            variant="outlined"
            label="10:30 AM - 11:00 AM"
            clickable
            color="primary"
          />
          <Chip
            variant="outlined"
            label="07:30 PM - 08:00 PM"
            clickable
            color="primary"
          />
          <Chip
            variant="outlined"
            label="08:30 PM - 09:00 PM"
            clickable
            color="primary"
          />
          <Chip
            variant="outlined"
            label="09:00 PM - 09:30 PM"
            clickable
            color="primary"
          />
          <Chip
            variant="outlined"
            label="09:30 PM - 10:00 PM"
            clickable
            color="primary"
          />
        </div>
      </TabPanel>
    </React.Fragment>
  );
};

export default SlotBooking;
