import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup as MuiRadioGroup,
} from "@mui/material";

const RadioGroup = ({ name, labelText, value, onChange, items }) => {
  return (
    <FormControl sx={{marginTop:"15px" ,marginBottom:"8px"}}>
      <FormLabel>{labelText}</FormLabel>
      <MuiRadioGroup row name={name} value={value} onChange={onChange}>
        {items.map((item, index) => {
            return (
          <FormControlLabel
          key={index}
            value={item.id}
            control={<Radio />}
            label={item.title}
          />)
           
        })}
      </MuiRadioGroup>
    </FormControl>
  );
};

export default RadioGroup;
