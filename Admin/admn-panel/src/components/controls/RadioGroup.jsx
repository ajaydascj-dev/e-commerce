import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup as MuiRadioGroup,
} from "@mui/material";

const RadioGroup = ({ name, LabelText, value, onChange, items,register }) => {
  return (
    <FormControl sx={{marginTop:"15px" ,marginBottom:"8px"}}  >
      <FormLabel>{LabelText}</FormLabel>
      <MuiRadioGroup row name={name}   defaultValue="false"   onChange={onChange}>
        {items.map((item, index) => {
            return (
          <FormControlLabel
            key={index}
            value={item.id}
            control={<Radio />}
            label={item.title}
            {...(register ? register(name) : {})}
          />)
          
           
        })}
 
      </MuiRadioGroup>
    </FormControl>
  );
};

export default RadioGroup;
