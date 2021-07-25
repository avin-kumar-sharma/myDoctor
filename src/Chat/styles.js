import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 900,
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      flexDirection: "column",
    },
  })
);
