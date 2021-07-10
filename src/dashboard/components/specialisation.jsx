import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    border: `1px solid ${theme.palette.divider}`,
    height: "30px",
    boxShadow: "none",
    borderRadius: "0",
  },
  icon: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2),
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

const options = ['Pulmonology', 'Cardialogy'];

export default function Specialisation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(null);
  return (
    <Autocomplete
      id="specialisation"
      style={{ width: 200 }}
      options={options}
      autoComplete
      includeInputInList
      filterSelectedOptions
      value={value}
      /*getOptionLabel={(option) => option.name}*/
      renderInput={(params) => (
        <Paper
          component="form"
          className={classes.root}
          ref={params.InputProps.ref}
        >
          <InputBase
            className={classes.input}
            placeholder="Select service..."
            inputProps={{
              "aria-label": "search location",
              ...params.inputProps,
            }}
          />
        </Paper>
      )}
      /*renderOption={(option) => {
        return (
          <Typography variant="body2" color="textSecondary">
            {option.name}
          </Typography>
        );
      }}*/
    />
  );
}
