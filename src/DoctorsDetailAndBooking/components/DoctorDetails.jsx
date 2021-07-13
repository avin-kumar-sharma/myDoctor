import React, { useEffect } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
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

const DoctorDetails = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [doctorInfos, setDoctorInfos] = React.useState([]);

  useEffect(() => {
    var doctorInfoValue = [
      { panel: "panel1", heading: "heading 1", description: "description 1" },
      { panel: "panel2", heading: "heading 2", description: "description 2" },
      { panel: "panel3", heading: "heading 3", description: "description 3" },
      { panel: "panel4", heading: "heading 4", description: "description 4" },
    ];

    setDoctorInfos(doctorInfoValue);
  }, []);

  const handlePanelChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  console.log(doctorInfos);

  return (
    <div className={classes.root}>
      {doctorInfos.map((doctorInfo) => (
        <Accordion
          expanded={expanded === doctorInfo.panel}
          onChange={handlePanelChange(doctorInfo.panel)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}>
              {doctorInfo.heading}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{doctorInfo.description}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default DoctorDetails;
