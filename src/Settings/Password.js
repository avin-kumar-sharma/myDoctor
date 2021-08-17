// import { Typography, TextField ,Paper, Container,Button} from '@material-ui/core';
// import React from 'react';
// import ProtectedPage from '../layout/Page/protectedpage';
// import './password.css';
// import './samepassword';
// const Password=()=>{
// return(
//     <>
   
//     <Container className="container" maxWidth="sm">
//         <Paper className="paper" >
//                <Typography>Current Password</Typography>
//                 <TextField placeholder="******" type="password" variant="outlined"></TextField><br/><br/>
//                 <Typography>New Password</Typography>
//                 <TextField id="password" name="password" placeholder="******" type="password" variant="outlined"></TextField><br/><br/>
//                 <Typography>Confirm Password</Typography>
//                 <TextField id="confirm_password" name="confirm_password" placeholder="******" type="password" variant="outlined"></TextField><br/><br/>
//                 <Button type="submit" color="primary" variant="contained">Save Changes</Button>
//                 </Paper>
//            </Container>
    
//     </>
// )
// }
// export default Password;
import { TextField ,Button,Container,Paper} from '@material-ui/core';
import React,{useEffect} from 'react';
import './password.css';
class DemoForm extends React.Component {
    
    constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
     
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  }
     
  handleSubmit(event) {
    event.preventDefault();
  
    if(this.validate()){
        console.log(this.state);
  
        let input = {};
        input["current_password"] = "";
        input["password"] = "";
        input["confirm_password"] = "";
        this.setState({input:input});
    }
  }
  
  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
  
      if (!input["current_password"]) {
        isValid = false;
        errors["current_password"] = "Please enter your current password.";
      }
      if (!input["password"]) {
        isValid = false;
        errors["password"] = "Please enter your password.";
      }
  
      if (!input["confirm_password"]) {
        isValid = false;
        errors["confirm_password"] = "Please enter your confirm password.";
      }
  
      if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
          
        if (input["password"] != input["confirm_password"]) {
          isValid = false;
          errors["password"] = "Passwords don't match.";
        }
      } 
  
      this.setState({
        errors: errors
      });
  
      return isValid;
  }
     
  render() {
    return (
      <div>
       <Container className="container" maxWidth="sm">
         <Paper className="paper" >
        <form onSubmit={this.handleSubmit}>
        <div class="form-group">
            <label for="password">Current Password:</label>
            <TextField
            variant="outlined"
              type="password" 
              onChange={this.handleChange}
              value={this.state.input.current_password}
              name="current_password"
              class="form-control" 
              placeholder="Enter password" 
              id="current_password" />
          </div><div className="danger">{this.state.errors.current_password}</div><br/>
          <div class="form-group">
            <label for="password">New Password:</label>
            <TextField
            variant="outlined"
              type="password" 
              name="password" 
              value={this.state.input.password}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter new password" 
              id="password" />
  
              <div className="danger">{this.state.errors.password}</div>
          </div>
          <br/>
          <div class="form-group">
            <label for="password">Confirm Password:</label>
            <TextField
            variant="outlined" 
              type="password" 
              name="confirm_password" 
              value={this.state.input.confirm_password}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter confirm password" 
              id="confirm_password" />
  
              <div className="danger">{this.state.errors.confirm_password}</div>
          </div>
          <br/>
          <Button variant="contained" color="primary" type="submit" value="Submit"  >Save Changes</Button>
        </form>
        </Paper>
        </Container>
      </div>
    );
  }
}
  
export default DemoForm;