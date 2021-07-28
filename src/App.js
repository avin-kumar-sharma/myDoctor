import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./Theme/index";
import SignInOutContainer from "./Containers/Index";
import Dashboard from "./dashboard";
import DoctorsDetailAndBooking from "./DoctorsDetailAndBooking/DoctorsDetailAndBooking";

import MyAppointments from "./MyAppointments/MyAppointments";

import Others from "./Appointments/Other";
import Index from "./Appointments/Index";
import { io } from "socket.io-client";
import Chat from "./Chat";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadprofile } from "./state/user/slice";


function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem('auth-token');
  useEffect(() => {
    if(token){
      dispatch(loadprofile({
        id: localStorage.getItem("user-id")
      }));
    }
  }, [token]);
  return (
    <Router>
      <Switch>
        <ThemeProvider theme={theme}>
          <Route path="/" exact component={Dashboard} />
          <Route path="/appointments" exact component={Chat} />
          <Route path="/chat/:appointmentId" component={Chat} />
          <Route path="/login" exact component={SignInOutContainer} />
          <Route
            path="/doctor/:doctorId"
            exact
            component={DoctorsDetailAndBooking}
          />
          <Route path="/myAppointments" exact component={MyAppointments} />
          <Route path="/self-appointment"
            exact
            component={Index}>
          </Route>
          <Route path="/others-appointment"
            exact
            component={Others}>
          </Route>
        </ThemeProvider>
      </Switch>
    </Router>
  );
}

export default App;
