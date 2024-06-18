

import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function TableMenu({props}) {

   const {isAdmin , _id } = props
   const handleRoles = (id) => {
     console.log(id)
   }
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" color={isAdmin ? "success" : "error"} size="small" {...bindTrigger(popupState)} endIcon={<ArrowDropDownIcon />}>
           {isAdmin ? "Admin" : "User"}
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={() => {handleRoles(_id)}}>{isAdmin ? "Set as User" : "Set as Admin"}</MenuItem>
            
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}

