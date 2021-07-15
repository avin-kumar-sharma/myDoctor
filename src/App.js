import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./dashboard";
import DoctorsDetailAndBooking from "./DoctorsDetailAndBooking/DoctorsDetailAndBooking";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/doctorDetailsAndBooking" exact component={DoctorsDetailAndBooking} />
      </Switch>
    </Router>
  );
}

export default App;
