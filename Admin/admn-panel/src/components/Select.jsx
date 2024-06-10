import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from "@mui/material";
import SelectInput from "@mui/material/Select/SelectInput";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

const Select = ({ options, name, value, handleChange, LabelText }) => {
  const classes = useStyles();
  return (
    <FormControl variant="outlined" className={classes.root}>
      <InputLabel>{LabelText}</InputLabel>
      <MuiSelect
        label={LabelText}
        name={name}
        value={value}
        onChange={handleChange}
      >
        <MenuItem value=""></MenuItem>
        {options.map((item) => {
          const { id, caegory } = item;
          return (
            <MenuItem key={id} value={item.id}>
              {caegory}
            </MenuItem>
          );
        })}
      </MuiSelect>
    </FormControl>
  );
};

export default Select;
