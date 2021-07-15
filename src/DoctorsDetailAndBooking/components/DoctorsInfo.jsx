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
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

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
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const DoctorsInfo = () => {
  const classes = useStyles();
  const [doctorInfos, setDoctorInfos] = React.useState({});

  useEffect(() => {
    var doctorInfoValue = {
      doctorsImageURL:
        "https://www.filmibeat.com/img/2018/06/rku3-1529659059.jpg",
      name: "Murali Prasad Sharma",
      qualifications: "MBBS, MS - General Surgery",
      experienceInYears: "18",
      description:
        "Dr. Murali Prasad Sharma is a General Surgeon currently associated with Greenview Medical Center, Bangalore. Having completed his MBBS and MS in General Surgery from reputed colleges of the country, Dr. Abdul Razack has successfully performed several general surgeries like breast surgery, thyroid surgery and liver resection to name a few. With a special interest in endoscopy and laparoscopic surgery, he has also performed several other procedures, including appendectomy, biopsy, cholecystectomy, gastric bypass, melanoma, and catheter placement. Being a dedicated doctor and an avid learner, Dr. Abdul Razack regularly attends many local and state-wide conferences to learn about the latest developments in his field of practice",
    };

    setDoctorInfos(doctorInfoValue);
  }, []);

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <img src={doctorInfos.doctorsImageURL}></img>
          </Avatar>
        }
        title={"Dr. " + doctorInfos.name}
        subheader={
          doctorInfos.qualifications +
          ", " +
          doctorInfos.experienceInYears +
          " Years of Experience"
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
