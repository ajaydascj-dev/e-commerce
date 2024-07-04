import {
  FormControl,
  FormControlLabel,
  Checkbox as MuiCheckbox,
} from "@mui/material";

const Checkbox = ({ name, labelText, value, handleChange,register,...others }) => {
  // const convertToDefEventPara = (name, value) => {
  //   target: {
  //     name, value;
  //   }
  // };
  return (
    <FormControl>
      <FormControlLabel
        control={
          <MuiCheckbox
            name={name}
            color="primary"
            {...(register ? register(name) : {})} 
            // checked = {value}
            {...others}
            // onChange={(e) =>
            //   handleChange(convertToDefEventPara(name, e.target.checked))
            // }
          />
        }
        label={labelText}
      />
    </FormControl>
  );
};

export default Checkbox;
