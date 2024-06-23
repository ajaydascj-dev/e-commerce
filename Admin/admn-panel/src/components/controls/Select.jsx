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
        onChange={handleChange}
        {...(register ? register(name) : {})}
      >
        <MenuItem value=""></MenuItem>
        {options.map((item) => {
          const { id, category } = item;
          return (
            <MenuItem key={id} value={item.id}>
              {category}
            </MenuItem>
          );
        })}
      </MuiSelect>
    </FormControl>
  );
};

export default Select;
