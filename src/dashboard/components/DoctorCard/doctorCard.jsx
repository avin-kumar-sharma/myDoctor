import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import moment from "moment";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { Typography, Avatar } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import Flex from "../../../shared/components/Flex";
import { useStyles } from "./styles";
import { useHistory } from "react-router-dom";

export default function DoctorCard({ data }) { 
  const classes = useStyles();
  const { t } = useTranslation("i18n");
  const history = useHistory();
  var a = moment([new Date().getFullYear(), 0]);
  var b = moment([new Date(data.practicingFrom).getFullYear(), 0]);
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Flex className={classes.flex}>
          <Avatar src={data.imageUrl} className={classes.avatar} />
          <Flex column style={{ marginLeft: "20px" }}>
            <Typography
              className={classes.title}
              color="textPrimary"
              gutterBottom
            >
              {`${data.firstName} ${data.lastName}`}
            </Typography>
            <Typography
              className={classes.subTitle}
              color="textSecondary"
              gutterBottom
            >
              
           {data.qualifications.map((qualification) => (
               qualification.name + ","
              ))}
             
            </Typography>
            <Typography
              className={classes.subTitle}
              color="textSecondary"
              gutterBottom
            >
              {data.specializations.join(",")} | {a.diff(b, "years")} years exp
            </Typography>
            <Flex column>
              <Typography
                className={classes.subTitle}
                color="textSecondary"
                gutterBottom
              >
                License  : 12344565
              </Typography>
              <Typography
                className={classes.subTitle}
                color="textSecondary"
                gutterBottom
              >
                Languages : English , Hindi
              </Typography>
              <Typography
                className={classes.subTitle}
                color="textSecondary"
                gutterBottom
              >
                Hospital : {data.experience.map((exp) => (
               exp.hospitalName
              ))}
              </Typography>
              
            </Flex>
          </Flex>
        </Flex>
      </CardContent>
      <CardActions style={{ marginLeft: "88px" }} >
        <flex>
        <Typography
                className={classes.subTitle}
                color="textPrimary"
                gutterBottom
              >
                Next available on : Tommorow
              </Typography>
        <Button
          size="small"
          className={classes.button}
          onClick={() => {
            history.push(`/doctor/${data._id}`);
          }}
          variant="outlined"
          color="primary"
        >
          {t("dashboard.book_appointment")}
        </Button>
        </flex>
      </CardActions>
    </Card>
  );
}
