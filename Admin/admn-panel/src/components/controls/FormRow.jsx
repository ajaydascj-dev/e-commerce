import { TextField, Button, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

const FormRow = ({ type, name, value, handleChange, LabelText, register,...other}) => {

  const classes = useStyles();
  return (
    <div className="form-row">
      <TextField
        label={LabelText}
        type={type}
        className={classes.root}
        value={value}
        name={name}
        {...(register ? register(name) : {})} 
        onChange={handleChange}
        
        {...other}
      />
    </div>
  );
};

export default FormRow;




