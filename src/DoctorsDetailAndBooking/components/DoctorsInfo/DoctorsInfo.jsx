import React, { useEffect } from "react";
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
import { useTranslation } from "react-i18next";

const DoctorsInfo = () => {
  const classes = useStyles();
  const [doctorInfos, setDoctorInfos] = React.useState({});
  const { t } = useTranslation("i18n");

  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => setDoctorInfos(data.doctorsInfo));
  }, []);

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <img src={doctorInfos.doctorsImageURL}></img>
          </Avatar>
        }
        title={
          t("doctors_appointment.doctor_salutation") + " " + doctorInfos.name
        }
        subheader={
          doctorInfos.qualifications +
          ", " +
          doctorInfos.experienceInYears +
          " " +
          t("doctors_appointment.years_of_experience")
        }
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {doctorInfos.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default DoctorsInfo;
