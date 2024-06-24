import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from "@mui/material";

import { makeStyles } from "@mui/styles";
import { useState } from "react";
import FormRow from "./FormRow";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

const Select = ({
  options,
  name,
  value,
  handleChange,
  LabelText,
  register,
}) => {
  const classes = useStyles();
  const [edit ,setEdit ] = useState(true)
  return (
    <FormControl variant="outlined" className={classes.root}>
      <InputLabel>{LabelText}</InputLabel>
      <MuiSelect
        label={LabelText}
        name={name}
        value={value}
        onChange={handleChange}
        {...(register ? register(name) : {})}
      >
      
        {options.map((item) => {
          const { _id, name } = item;
          return (
            
            <MenuItem key={_id} value={_id} onDoubleClick={() => {setEdit(false)}}>
              {name} 
            </MenuItem> 
          );
        })}
      </MuiSelect>
    </FormControl>
  );
};

export default Select;
