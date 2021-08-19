import React from "react";
import { useStore, useDispatch } from "react-redux";
import ProtectedPage from "../layout/Page/protectedpage";
import i18n from "../translations/en/i18n.json";
import { Container, Paper, Card, Grid, Avatar, Button, IconButton, TextField } from "@material-ui/core";
import { useStyles } from "./styles";
import { fetchAppointmentDetails } from "../state/appointment/slice";
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import SendIcon from '@material-ui/icons/Send';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';

const ConsultationChat = ({ match, appointment, ...restProps }) => {
  const { appointmentId } = match.params;
  const userId = localStorage.getItem("user-id");

  const store = useStore();
  const dispatch = useDispatch();

  const [appointmentData, setAppointmentData] = React.useState(appointment);

  React.useEffect(() => {
    if (!appointmentData) {
      dispatch(fetchAppointmentDetails({ userId, appointmentId }));
    }
  });

  store.subscribe(() => {
    const userAppointments = store.getState().appointment.appointments[userId];
    if (userAppointments) {
      const targetAppointment = userAppointments.find((a) => a._id === appointmentId);
      if (targetAppointment) setAppointmentData(targetAppointment);
    }
  });

  const classes = useStyles();
  return (
    <ProtectedPage>
      <Container maxWidth="md">
        {appointmentData &&
          <Paper elevation={1} className={classes.container}>
            <div className={classes.heading}>
              <ForumOutlinedIcon />
              <span>Consultation Chat</span>
            </div>
            <div className={classes.chatContainer}>
              <div className="chatHead">
                <div className={classes.profileBox}>
                  <Avatar className={classes.profileAvatar} alt={getPatientName(appointmentData)} />
                  <div className="title">
                    {getPatientName(appointmentData)}
                  </div>
                </div>
                <SwapHorizIcon fontSize="large" color="primary" />
                <div className={classes.profileBox}>
                  <Avatar alt={getDoctorName(appointmentData)} className={classes.profileAvatar} src={getDoctorProfileImageURL(appointmentData)} />
                  <div className="title">
                    {getDoctorName(appointmentData)}
                  </div>
                </div>
              </div>
              <div className="appointment">
                <span className="title">Appointment</span>
                <span className="datetime">{getAppointmentDate(appointmentData)} - {getAppointmentTiming(appointmentData)}</span>
              </div>
              <div className={classes.conversationBox}>
                <ul>
                  <li class="left">
                    <div class="message">
                      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dui massa, suscipit eu enim in, auctor porta turpis. Donec ultrices nibh et eleifend venenatis.</span>
                      <span class="timestamp">01:25 AM</span>
                    </div>
                  </li>
                  <li class="right">
                    <div class="message">
                      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dui massa, suscipit eu enim in, auctor porta turpis. Donec ultrices nibh et eleifend venenatis.</span>
                      <span class="timestamp">a minute ago</span>
                    </div>
                  </li>
                  <li class="left">
                    <div class="message">
                      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dui massa, suscipit eu enim in, auctor porta turpis. Donec ultrices nibh et eleifend venenatis.</span>
                      <span class="timestamp">01:25 AM</span>
                    </div>
                  </li>
                  <li class="right">
                    <div class="message">
                      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dui massa, suscipit eu enim in, auctor porta turpis. Donec ultrices nibh et eleifend venenatis.</span>
                      <span class="timestamp">a minute ago</span>
                    </div>
                  </li>
                  <li class="left">
                    <div class="message">
                      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dui massa, suscipit eu enim in, auctor porta turpis. Donec ultrices nibh et eleifend venenatis.</span>
                      <span class="timestamp">01:25 AM</span>
                    </div>
                  </li>
                  <li class="left">
                    <div class="message">
                      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dui massa, suscipit eu enim in, auctor porta turpis. Donec ultrices nibh et eleifend venenatis.</span>
                      <span class="timestamp">01:25 AM</span>
                    </div>
                  </li>
                  <li class="right">
                    <div class="message">
                      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dui massa, suscipit eu enim in, auctor porta turpis. Donec ultrices nibh et eleifend venenatis.</span>
                      <span class="timestamp">a minute ago</span>
                    </div>
                  </li>
                  <li class="right">
                    <div class="message">
                      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dui massa, suscipit eu enim in, auctor porta turpis. Donec ultrices nibh et eleifend venenatis.</span>
                      <span class="timestamp">a minute ago</span>
                    </div>
                  </li>
                  <li class="left">
                    <div class="message">
                      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dui massa, suscipit eu enim in, auctor porta turpis. Donec ultrices nibh et eleifend venenatis.</span>
                      <span class="timestamp">01:25 AM</span>
                    </div>
                  </li>
                  <li class="right">
                    <div class="message">
                      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dui massa, suscipit eu enim in, auctor porta turpis. Donec ultrices nibh et eleifend venenatis.</span>
                      <span class="timestamp">a minute ago</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className={classes.chatBox}>
                <div className="inputMessageBox">
                  <TextField
                    aria-label="enter your message"
                    color="primary"
                    multiline
                    fullWidth={true}
                    variant="outlined"
                    margin="dense"
                    hiddenLabel={true}
                    maxRows={10}
                    placeholder="Your message"
                  />
                </div>
                <div className="chatActions">
                  <IconButton
                    color="primary"
                    aria-label="send message"
                    component="span">
                    <SendIcon />
                  </IconButton>
                </div>
              </div>
            </div>
          </Paper>
        }
      </Container>
    </ProtectedPage>
  );
};

export default ConsultationChat;


function getDoctorName(appointmentData) {
  return `${i18n['consultationChat']['doctorSalutation']} ${appointmentData.doctorId.firstName} ${appointmentData.doctorId.lastName}`;
}

function getDoctorProfileImageURL(appointmentData) {
  return appointmentData.doctorId.imageUrl;
}

function getPatientName(appointmentData) {
  const isSelf = !appointmentData.otherName;
  if (isSelf) {
    return i18n['consultationChat']['self'];
  }
  const otherName = appointmentData.otherName;
  // const otherMobileNumber = appointmentData.otherMobileNumber ? `(${appointmentData.otherMobileNumber})` : "";
  return `${otherName}`;
}

function getAppointmentDate(appointmentData) {
  const date = new Date(appointmentData.date);
  return date.toLocaleDateString('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric'
  });
}

function getAppointmentTiming(appointmentData) {
  const date = new Date();
  const startTime = [
    parseInt(appointmentData.startTime.slice(0, 2)),
    parseInt(appointmentData.startTime.slice(2))
  ];
  const endTime = [
    parseInt(appointmentData.endTime.slice(0, 2)),
    parseInt(appointmentData.endTime.slice(2))
  ];
  date.setHours(startTime[0], startTime[1]);
  const formattedStartTime = date.toLocaleTimeString('en-GB', { hour12: true, hour: '2-digit', minute: '2-digit' }).toUpperCase();
  date.setHours(endTime[0], endTime[1]);
  const formattedEndTime = date.toLocaleTimeString('en-GB', { hour12: true, hour: '2-digit', minute: '2-digit' }).toUpperCase();
  return `${formattedStartTime} - ${formattedEndTime}`;
}