import { makeStyles } from "@material-ui/core/styles";
import { Autocomplete } from "@material-ui/lab";

export const useStyles = makeStyles({
  root: {
    maxWidth: 2000,
    marginTop:30,
    ' & input':{
      border: "none",
      backgroundColor:"white",
      height:40,
      width:200,
      fontSize:15,
    },
    '& select':{
      border: "none",
      backgroundColor:"white",
      height:40,
      width:200,
      fontSize:15,
      color:"black",
    }
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
    margin:"auto"
  },
 
  grey:{
    color:"gray",
    fontSize:14,
  }
 ,
 textField:{
   width:214,
 },
 input: {
  display: 'none',
},
name:{
  marginLeft:460
},
name2:{
  marginLeft:400
}
,
namee:{
  textAlign:"center",
  color:"gray",
  
},
button:{
 display:"flex",
 margin:"auto",
 
},
icon:{
  marginLeft:640,
  marginTop:-200,
  zIndex:1,
  height:20,
  width:20
	// display: "none"
},
profile:{
  margin:"auto",
  
},
flex:{
  display:"flex",
} ,
flexitems:{
  marginLeft:200
}
});
