import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './Theme/index'
import SignInOutContainer from "./Containers/Index";
import Dashboard from "./dashboard";
import DoctorsDetailAndBooking from "./DoctorsDetailAndBooking/DoctorsDetailAndBooking";


function App() {
  return (
    <Router>
      <Switch>
        <ThemeProvider theme={theme}>
          <SignInOutContainer/>
        </ThemeProvider>
        <Route path="/" exact component={Dashboard} />
        <Route path="/doctorDetailsAndBooking" exact component={DoctorsDetailAndBooking} />
      </Switch>
    </Router>
  );
}

export default App;