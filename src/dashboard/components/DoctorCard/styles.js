import { makeStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

export const useStyles = makeStyles({
    root: {
      minWidth: 275,
      height: 250,
      width:400, 
    },
   
    title: {
      fontSize: 16,
      fontWeight: "bold",
    },
    subTitle: {
      fontSize: 12,
      fontWeight: "semi-bold",
      
    },
    pos: {
      marginBottom: 12,
    },
    avatar: {
      width: 60,
      height: 60,
    },
    button : {
      borderRadius:15,
      transition: "ease-in-out",
      transitionDelay:"0.1s",
      '&:hover':{
        backgroundColor: '#0069d9',
        color:"#FFFFFF",
        borderColor: '#0062cc',
        
      }
    }
  
  });
  