import { Button as MuiButton } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));
const Button = ({ size, text, color, variant, handleSubmit, ...other }) => {
  const classes = useStyles();
  return (
    <MuiButton
      variant={variant || "contained"}
      size={size || "large"}
      onClick={handleSubmit}
      color={color || "primary"}
      {...other}
      className={classes.root}
    >
      {text}
    </MuiButton>
  );
};

export default Button;
