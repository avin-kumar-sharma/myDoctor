import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './Theme/index'
import SignInOutContainer from "./Containers/Index";
import Dashboard from "./dashboard";
import DoctorsDetailAndBooking from "./DoctorsDetailAndBooking/DoctorsDetailAndBooking";
import MyAppointments from './MyAppointments/MyAppointments';

import Others from "./Patientdetails/Other";
import Index from "./Patientdetails/Index";
import Patient from "./Patientdetails/Patient";


function App() {
  return (
    <Router>
      <Switch>
        <ThemeProvider theme={theme}>  
         <Route path="/login" exact component={SignInOutContainer} />
        <Route  path="/" exact component={Dashboard} />
        <Route path="/doctorDetailsAndBooking" exact component={DoctorsDetailAndBooking} />
        <Route path="/myAppointments" exact component={MyAppointments} />
        <Route path="/someone" component={Others}></Route>
        <Route path="/index" component={Index}></Route>

        </ThemeProvider>
      </Switch>
    </Router>
  );
}

export default App;