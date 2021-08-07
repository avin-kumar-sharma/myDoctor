import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    padding: "0.5rem 1rem",
    margin: "1rem",
  },
  chatContainer: {
  },
  heading: {
    display: "flex",
    color: theme.palette.primary.main,
    fontWeight: "bold",
    "& span": {
      marginLeft: "0.28rem",
    }
  },
  doctorAvatarLarge: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  doctorHeading: {
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
    "& .title": {
      color: theme.palette.primary.main,
      fontWeight: 500,
      marginTop: "0.5rem",
    },
  },
  conversationBox: {
    overflowX: "hidden",
    overflowY: "auto",
    backgroundColor: theme.palette.grey[200],
    height: "60vh",
    padding: "1rem",
    borderRadius: "0.24rem",
  },
  chatBox: {
    display: "flex",
    
  }

}));