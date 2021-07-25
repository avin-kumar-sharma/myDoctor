import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./Theme/index";
import SignInOutContainer from "./Containers/Index";
import Dashboard from "./dashboard";
import DoctorsDetailAndBooking from "./DoctorsDetailAndBooking/DoctorsDetailAndBooking";

import MyAppointments from "./MyAppointments/MyAppointments";

import Others from "./Appointments/Other";
import Index from "./Appointments/Index";

function App() {
  return (
    <Router>
      <Switch>
        <ThemeProvider theme={theme}>
          <Route path="/login" exact component={SignInOutContainer} />
          <Route path="/" exact component={Dashboard} />
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
