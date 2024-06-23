import { AppBar, Card, Divider, Toolbar, Typography } from "@mui/material"
import { Button, FormRow, ProductForm } from "../../components"
import Popup from "../../components/Popup"
AppBar

const Products = () => {
  return (
    <Card sx={{ padding: "" }}>
      
      <AppBar position="static" color="grey">
         <Toolbar variant="dense" sx={{display:"flex" ,justifyContent:"space-between"}}>
         <Typography variant="h6" color="inherit" component="div">
      PRODUCTS
    </Typography>
    <Button text="Add Product" color="" size="small"  style={{width:"150px"}}/>
         </Toolbar>
      </AppBar>
      
      <Popup title="ADD PRODUCT">
         <ProductForm />
      </Popup>
   
    </Card>
  )
}

export default Products