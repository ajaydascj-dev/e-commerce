import { AppBar, Card, Divider, Toolbar, Typography } from "@mui/material"
import { Button, FormRow, ProductForm } from "../../components"
import Popup from "../../components/Popup"
import { useDispatch } from "react-redux"
import { togglePopupModal } from "../../features/Popup/PopupSlice"
AppBar

const Products = () => {
const dispatch = useDispatch();
  const openForm = () => {
       dispatch(togglePopupModal())
  }
  return (
    <Card sx={{ padding: "" }}>
      
      <AppBar position="static" color="grey">
         <Toolbar variant="dense" sx={{display:"flex" ,justifyContent:"space-between"}}>
         <Typography variant="h6" color="inherit" component="div">
      PRODUCTS
    </Typography>
    <Button text="Add Product" color="" size="small"  style={{width:"150px"}} onClick={openForm}/>
         </Toolbar>
      </AppBar>
      
      <Popup title="ADD PRODUCT">
         <ProductForm />
      </Popup>
   
    </Card>
  )
}

export default Products