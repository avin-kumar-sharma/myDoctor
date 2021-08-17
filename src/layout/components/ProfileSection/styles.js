import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },
    paper: {
      marginRight: theme.spacing(2),
    },
    menuitem:{
      marginRight:200,
      marginTop:100,
    }
  }));