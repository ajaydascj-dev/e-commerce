import { Link } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Links from "../utils/Links";
import { makeStyles } from "@mui/styles";
import List from "@mui/material/List";

const useStyles = makeStyles((theme) => ({
  Link: {
    textDecoration: "none",
    color: "rgba(0, 0, 0, 0.54)",
  },
}));

const NavLinks = ({ setHead }) => {
  const classes = useStyles();
  return (
    <List>
      {Links.map((link) => {
        return (
          <Link
            to={link.path}
            className={classes.Link}
            key={link.id}
            onClick={() => {
              setHead(link.text);
            }}
          >
            <ListItem key={link.text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {link.icon}
                </ListItemIcon>
                <ListItemText
                  primary={link.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        );
      })}
    </List>
  );
};
export default NavLinks;
