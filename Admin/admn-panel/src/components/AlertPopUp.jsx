import { useDispatch, useSelector } from "react-redux";
import { toggleAlertModal } from "../features/AlertModal/AlertModalSlice";
import { Button , Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";




export default function AlertPopUp({alertHead , alertDesc,agreeTxt,disAgreeText ,handleAgree,values}) {

    const dispatch = useDispatch();
   
   const handleSubmit = () => {
    dispatch(handleAgree({values}))
    dispatch(toggleAlertModal())
   }
    const  {isAlertModalOpen}  = useSelector((store) => store.alert);
   
    return (
      <>
        <Dialog
          open={isAlertModalOpen}
          onClose={(e) => dispatch(toggleAlertModal())}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {alertHead}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {alertDesc}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" color="warning" onClick={(e) =>dispatch(toggleAlertModal())}>{disAgreeText}</Button>
            <Button variant="contained" color="error" onClick={(e)=>handleSubmit()} autoFocus>
              {agreeTxt}
            </Button>
            
          </DialogActions>
        </Dialog>
      </>
    );
  }

