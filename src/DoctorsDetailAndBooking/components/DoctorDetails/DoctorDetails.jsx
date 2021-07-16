import React, { useEffect } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./styles";
import JSONResult from "../../../../src/data.json";

const DoctorDetails = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [doctorInfos, setDoctorInfos] = React.useState([]);

  useEffect(() => {
    setDoctorInfos(JSONResult.doctorInfoValue);
  }, []);

  const handlePanelChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  //TODO:remove dependency of doctorInfo.panel property
  return (
    <div className={classes.root}>
      {doctorInfos.map((doctorInfo, index) => (
        <Accordion
          expanded={expanded === doctorInfo._id}
          onChange={handlePanelChange(doctorInfo._id)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}>
              <b>{doctorInfo.heading}</b>
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
