import React from "react";
import Grid from "@material-ui/core/Grid";
import DoctorsInfo from "./components/DoctorsInfo/DoctorsInfo";
import SlotBooking from "./components/SlotBooking/SlotBooking";
import DoctorDetails from "./components/DoctorDetails/DoctorDetails";
import Page from "../layout/Page/page";
import { useStyles } from "./styles";

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
