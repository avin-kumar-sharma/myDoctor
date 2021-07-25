import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./Theme/index";
import SignInOutContainer from "./Containers/Index";
import Dashboard from "./dashboard";
import DoctorsDetailAndBooking from "./DoctorsDetailAndBooking/DoctorsDetailAndBooking";

import MyAppointments from "./MyAppointments/MyAppointments";

import { io } from "socket.io-client";
import Chat from "./Chat";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadprofile } from "./state/user/slice";
import Others from "./Patientdetails/Other";
import Index from "./Patientdetails/Index";

const socket = io("http://localhost:4000", {
  path: "/chat-server/",
  userId: 1234,
});

socket.on("connect", () => {
  console.log(socket.id); // ojIckSD2jqNzOqIrAGzL
});

socket.emit('register-session', 1234);

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem('auth-token');
  useEffect(() => {
    if(token){
      dispatch(loadprofile());
    }
  }, [token]);
  return (
    <Router>
      <Switch>
        <ThemeProvider theme={theme}>
          <Route path="/" exact component={Dashboard} />
          <Route path="/chat" exact component={Chat} />
          <Route path="/login" exact component={SignInOutContainer} />
          <Route
            path="/doctor/:doctorId"
            exact
            component={DoctorsDetailAndBooking}
          />
          <Route path="/myAppointments" exact component={MyAppointments} />
          <Route path="/someone" component={Others}></Route>
          <Route path="/index" component={Index}></Route>
        </ThemeProvider>
      </Switch>
    </Router>
  );
}

export default App;
