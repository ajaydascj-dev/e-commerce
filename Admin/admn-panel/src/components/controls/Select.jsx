import {
  FormControl,
  FormHelperText,
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
  errors
}) => {
  const classes = useStyles();

  return (
    <FormControl variant="outlined" className={classes.root} error={Boolean(errors[name])} >
      <InputLabel>{LabelText}</InputLabel>
      <MuiSelect
     
        label={LabelText}
        name={name}
        value={value}
        inputProps={{
          ...(register ? register(name,{required:"Category is required"}) : {}), // assuming register is used for form libraries like React Hook Form
        }}
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
      <FormHelperText >{errors[name]?.message}</FormHelperText>
    </FormControl>
  );
};

export default Select;
