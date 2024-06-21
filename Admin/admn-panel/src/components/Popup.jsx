import { Dialog, DialogContent, DialogTitle, Divider } from "@mui/material";

const Popup = (props) => {
  const { title, children, openForm, setOpenForm} = props;
  return (
    <Dialog open={true} maxWidth="md">
      <DialogTitle >
        <div>Title</div>
      </DialogTitle>
      <Divider/>
      <DialogContent>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default Popup;
