import { TextField, Button, Stack, FormControl, FormHelperText } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

const FormRow = ({ type, name, value, handleChange, LabelText,  error,  helperText,register,errorReq,inputProps,...other}) => {

  const classes = useStyles();
  if (type === "file") {
    // Handling file input separately
    return (
      <div className="form-row">
      <FormControl variant="outlined" className={classes.root} error={error}>
        <TextField
          type="file"
          {...register(name, errorReq)}
          {...inputProps}
        />
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
      </div>
    );
  }
  return (
    <div className="form-row">
      <TextField
     
        label={LabelText}
        type={type}
        className={classes.root}
        value={value}
        name={name}
        inputProps={{
          ...(register ? register(name, errorReq) : {}), // Register with validation rules
        }}
        onChange={handleChange}
        error={error}
        helperText={helperText}
        {...other}
      />
    </div>
  );
};

export default FormRow;




