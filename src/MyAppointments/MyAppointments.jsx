import React, { useEffect } from "react";
import Page from "../layout/Page/page";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./styles";
import JSONResult from "../data.json";
import Grid from "@material-ui/core/Grid";
import reactDom from "react-dom";

const MyAppointments = () => {
  const classes = useStyles();
  const [appointments, setAppointments] = React.useState([]);

  useEffect(() => {
    setAppointments(JSONResult.appointments);
  }, []);

  return (
    <Page>
      <div>
        {appointments.map((appointment) => (
          <Card xs={12} className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  <img src={appointment.doctor.profileUrl}></img>
                </Avatar>
              }
              title={"Dr. " + appointment.doctor.name}
              subheader={"Date :" + appointment.date + ", " + appointment.time}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Status : <b> {appointment.status}</b>
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </Page>
  );
};

export default MyAppointments;
