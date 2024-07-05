import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from "@mui/material";

import { makeStyles } from "@mui/styles";

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

  return (
    <FormControl variant="outlined" className={classes.root}>
      <InputLabel>{LabelText}</InputLabel>
      <MuiSelect
        label={LabelText}
        name={name}
        value={value}
        {...(register ? register(name) : {})}
        onChange={handleChange}
      >
        {options?.map((item) => {
          return (
            <MenuItem key={item._id} value={item._id}>
              {item.name}
            </MenuItem>
          );
        })}
      </MuiSelect>
    </FormControl>
  );
};

export default Select;
