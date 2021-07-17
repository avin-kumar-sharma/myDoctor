import React from "react";
import Grid from "@material-ui/core/Grid";
import DoctorsInfo from "./components/DoctorsInfo";
import SlotBooking from "./components/SlotBooking";
import DoctorDetails from "./components/DoctorDetails";
import Page from "../layout/Page/page";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 1200,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    marginTop: "30px",
  },
}));

const DoctorsDetailAndBooking = () => {
  const classes = useStyles();
  return (
    <Page>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <DoctorsInfo />
          </Grid>
          <Grid item xs={6}>
            <SlotBooking />
          </Grid>
          <Grid item xs={12}>
            <DoctorDetails />
          </Grid>
        </Grid>
      </div>
    </Page>
  );
};

export default DoctorsDetailAndBooking;
