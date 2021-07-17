import React, { useEffect } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import { useDispatch, useSelector } from "react-redux";
import { loadSpecializations } from "../../../state/common/slice";
import { useStyles } from "./styles";


export default function Specialisation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(null);
  const { specializations } = useSelector((state) => state.common);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadSpecializations());
  }, []);
  return (
    <Autocomplete
      id="specialisation"
      style={{ width: 200 }}
      options={specializations || []}
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
