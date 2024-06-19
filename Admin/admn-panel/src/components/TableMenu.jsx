import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { toggleAlertModal } from "../features/AlertModal/AlertModalSlice";
import { useDispatch } from "react-redux";

export default function TableMenu({ props }) {
  const { cellValues, setAdmin, setId } = props;
  const { row } = cellValues;
  const { isAdmin, _id } = row;

  const dispatch = useDispatch();

  const handleRoles = (id) => {
    dispatch(toggleAlertModal());
    setId(id);
    setAdmin(!isAdmin);
  };
  return (
    <>
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <Button
              variant="contained"
              color={isAdmin ? "success" : "error"}
              size="small"
              {...bindTrigger(popupState)}
              endIcon={<ArrowDropDownIcon />}
            >
              {isAdmin ? "Admin" : "User"}
            </Button>
            <Menu {...bindMenu(popupState)}>
              <MenuItem
                onClick={() => {
                  handleRoles(_id);
                }}
              >
                {isAdmin ? "Set as User" : "Set as Admin"}
              </MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    </>
  );
}
