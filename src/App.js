import { createMuiTheme,ThemeProvider } from "@material-ui/core";
import SignInOutContainer from "./Containers/Index";

const theme = createMuiTheme({
  palette:{
    primary:{
      main:'rgb(102, 204, 255)',
      
    },
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SignInOutContainer/>
    </ThemeProvider>
  );
}

export default App;
