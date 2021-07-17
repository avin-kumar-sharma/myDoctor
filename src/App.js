import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createMuiTheme,ThemeProvider } from "@material-ui/core";
import SignInOutContainer from "./Containers/Index";
import Dashboard from "./dashboard";
import DoctorsDetailAndBooking from "./DoctorsDetailAndBooking/DoctorsDetailAndBooking";

const theme = createMuiTheme({
  palette:{
    primary:{
      main:'rgb(102, 204, 255)',      
    },
  }
})

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