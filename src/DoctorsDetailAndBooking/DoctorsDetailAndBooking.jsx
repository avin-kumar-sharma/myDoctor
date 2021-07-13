import React from "react";
import Grid from "@material-ui/core/Grid";
import DoctorsInfo from "./components/DoctorsInfo";
import SlotBooking from "./components/SlotBooking";
import DoctorDetails from "./components/DoctorDetails";

const DoctorsDetailAndBooking = () => {
  return (
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
  );
};

export default DoctorsDetailAndBooking;
