import { makeStyles } from "@material-ui/core";
import { Block } from "@material-ui/icons";

export const useStyles = makeStyles((theme) => ({
  container: {
    padding: "0.5rem 1rem",
    margin: "1rem",
  },
  chatContainer: {
    "& .chatHead": {
      display: "flex",
      flexFlow: "row nowrap",
      justifyContent: "center",
      alignItems: "center",
    },
    "& .appointment": {
      textAlign: "center",
      "& > span": {
        dispaly: "block",
      }
    }
  },
  heading: {
    display: "flex",
    color: theme.palette.primary.main,
    fontWeight: "bold",
    "& span": {
      marginLeft: "0.28rem",
    }
  },
  profileAvatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  profileBox: {
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem 0.25rem",
    "& .title": {
      fontSize: "0.9rem",
      color: theme.palette.primary.main,
      fontWeight: 500,
      marginTop: "0.5rem",
    },
  },
  conversationBox: {
    overflowX: "hidden",
    overflowY: "scroll",
    backgroundColor: theme.palette.grey[200],
    height: "60vh",
    padding: "1rem",
    borderRadius: "0.24rem",
    "& ul": {
      minHeight: "100%",
      padding: "0",
      margin: "0",
      listStyleType: "none",
      display: "flex",
      flexFlow: "column nowrap",
      justifyContent: "flex-end",

      "& .left": {
        alignSelf: "flex-start",
        maxWidth: "75%",
        color: theme.palette.secondary.contrastText,
        "& > .message": {
          display: "flex",
          flexFlow: "column nowrap",
          alignItems: "flex-end",
          gap: "0.25rem",
          backgroundColor: theme.palette.secondary.main,
          padding: "0.6rem 1.2rem",
          borderTopLeftRadius: "0.8rem",
          borderTopRightRadius: "0.8rem",
          borderBottomRightRadius: "0.8rem",
          "& > .timestamp": {
            fontSize: "0.8rem",
            alignSelf: "flex-start"
          }
        },
        "&::after": {
          display: "block",
          content: '""',
          width: "0",
          height: "0",
          borderLeft: `0.2rem solid ${theme.palette.secondary.main}`,
          borderRight: "0.2rem solid transparent",
          borderBottom: "0.2rem solid transparent",
          borderTop: `0.2rem solid ${theme.palette.secondary.main}`,
        }
      },
      "& .right": {
        alignSelf: "flex-end",
        maxWidth: "75%",
        color: theme.palette.primary.contrastText,
        "& > .message": {
          display: "flex",
          flexFlow: "column nowrap",
          alignItems: "flex-start",
          gap: "0.25rem",
          backgroundColor: theme.palette.primary.main,
          padding: "0.6rem 1.2rem",
          borderTopLeftRadius: "0.8rem",
          borderTopRightRadius: "0.8rem",
          borderBottomLeftRadius: "0.8rem",
          "& > .timestamp": {
            fontSize: "0.8rem",
            alignSelf: "flex-end"
          }
        },
        "&::after": {
          display: "block",
          content: '""',
          width: "0",
          height: "0",
          borderRight: `0.2rem solid ${theme.palette.primary.main}`,
          borderLeft: "0.2rem solid transparent",
          borderBottom: "0.2rem solid transparent",
          borderTop: `0.2rem solid ${theme.palette.primary.main}`,
          margin: "0 0 0 auto",
        }
      }
    }
  },
  chatBox: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "flex-end",
    margin: "0.5rem 0",
    "& > :not(:first-child)": {
      marginLeft: "0.8rem",
    },
    "& .inputMessageBox": {
      flexGrow: 1,
    }
  },
}));