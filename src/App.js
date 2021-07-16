import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./dashboard";
import DoctorsDetailAndBooking from "./DoctorsDetailAndBooking/DoctorsDetailAndBooking";
import MyAppointments from './MyAppointments/MyAppointments';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/doctorDetailsAndBooking" exact component={DoctorsDetailAndBooking} />
        <Route path="/myAppointments" exact component={MyAppointments} />
      </Switch>
    </Router>
  );
}

export default App;
