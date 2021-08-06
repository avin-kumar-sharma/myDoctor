import { makeStyles } from "@material-ui/core/styles";
import { Autocomplete } from "@material-ui/lab";

export const useStyles = makeStyles({
  root: {
    maxWidth: 1300,

    marginTop:30,
    marginLeft:30,
    
   
  },
  grid:{
    height:170,
    
  },
  account:{
        fontWeight:"bold",
        fontSize:30,
  },
  button :
  {
    textAlign:"right",
  },
  heading : 
  {
    height:80,
  },
  avatar:{
    width: 100,
    height: 100,
  },
 
  grey:{
    color:"gray",
    fontSize:14,
  }
 ,
 textField:{
   width:214,
 }
});
