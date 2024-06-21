import { Grid } from "@mui/material"
import FormRow from "./controls/FormRow"
import Select from "./controls/Select"


const ProductsForm = () => {
  return (
    <form action="">
        <Grid container spacing={1}>
            <Grid item xs={6}>
            <FormRow type="file" name="image" LabelText=""/>
        <FormRow type="text" name="name" LabelText="Name"/>
        <FormRow type="number" name="name" LabelText="Pirce in  INR"/>
        <FormRow type="text" name="description" LabelText="Description"/>
        </Grid>
        <Grid item xs={6}>
         <Select options={[{id:1,category:"TOY"}, {id:2,category:"CAR"}]} name="category" LabelText="Category"/>
        </Grid>
        </Grid>
    </form>
  )
}

export default ProductsForm