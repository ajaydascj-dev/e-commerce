import { Dialog, DialogContent, DialogTitle, Divider } from "@mui/material";
import { useSelector } from "react-redux";

const Popup = (props) => {
  const { title, children} = props;
  const {isPopupOpen} = useSelector((store) => store.popup);
  
  return (
    <Dialog open={isPopupOpen} maxWidth="md" >
      <DialogTitle >
        <div>{title}</div>
      </DialogTitle>
      <Divider/>
      <DialogContent>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default Popup;
