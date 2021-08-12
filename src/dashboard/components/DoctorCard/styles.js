import { makeStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

export const useStyles = makeStyles({
    root: {
      minWidth: 275,
      height: 200,
      width:200,
      boxShadow: '5px 10px 18px #888888'
      
    },
    title: {
      fontSize: 14,
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
      width: 50,
      height: 50,
    },
    button : {
      borderRadius:15,
      transition: "ease-in-out",
      transitionDelay:"0.1s",
      '&:hover':{
        backgroundColor: '#0069d9',
        color:"#FFFFFF",
        borderColor: '#0062cc',
        boxShadow: '5px 10px 18px #888888',
      }
    }
  
  });
  