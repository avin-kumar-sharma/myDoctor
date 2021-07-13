import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { Typography, Avatar } from "@material-ui/core";
import {useTranslation} from "react-i18next";
import Flex from "../../../shared/components/Flex";
import { useStyles } from "./styles";


export default function DoctorCard({data}) {
  const classes = useStyles();
  const {t} = useTranslation('i18n');
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Flex>
          <Avatar src={data.profileImage} className={classes.avatar} />
          <Flex column style={{ marginLeft: "16px" }}>
            <Typography
              className={classes.title}
              color="textPrimary"
              gutterBottom
            >
              {data.name}
            </Typography>
            <Typography
              className={classes.subTitle}
              color="primary"
              gutterBottom
            >
              {data.specialisation} | {data.experience} years exp
            </Typography>
            <Flex column>
            <Typography
              className={classes.subTitle}
              color="primary"
              gutterBottom
            >
              Fee: {data.fee}
            </Typography>
            </Flex>
          </Flex>
         
        </Flex>

      </CardContent>
      <CardActions style={{justifyContent: 'center'}}>
        <Button size="small" variant="contained" color="primary" >{t('dashboard.book_appointment')}</Button>
      </CardActions>
    </Card>
  );
}
