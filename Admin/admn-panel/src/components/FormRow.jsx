import { TextField, Button, Stack, makeStyles } from "@mui/material";

import React from "react";
const useStyle = makeStyles(theme => ({
    root : {
        '& MuiFormControl-root' : {
            width : '100%' 
        }
    } 
}))

const FormRow = ({type , name , value , handleChange , LabelText }) => {
    const classes = useStyle()
  return <div className="form-row">
          <TextField label={LabelText} type={type} className={classes.root}/>
  </div>;
};

export default FormRow;
