import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { Typography, Avatar } from "@material-ui/core";
import Flex from "../../shared/components/Flex";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 12,
    fontWeight: "semi-bold",
  },
  pos: {
    marginBottom: 12,
  },
  avatar: {
    width: 60,
    height: 60,
  },
});

export default function DoctorCard({data}) {
  const classes = useStyles();
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
        <Button size="small" variant="contained" color="primary" >BOOK APPOINTMENT</Button>
      </CardActions>
    </Card>
  );
}
