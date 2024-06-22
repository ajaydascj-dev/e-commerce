import { Box, Grid } from "@mui/material";
import FormRow from "./controls/FormRow";
import Select from "./controls/Select";
import RadioGroup from "./controls/RadioGroup";
import Button from "./controls/Button";
import { useForm, useFieldArray, useWatch } from "react-hook-form";

const radioItems = [
  { id: "featured", title: "Featured" },
  { id: "notfeatured", title: "Not-Featured" },
];

const ProductsForm = () => {
  const { register, handleSubmit, control } = useForm({
    defaultValues : {
      specifications : [{
key : '',
value:''

      }]
    }
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "specifications",
  });
  console.log(fields)
  return (
    <form>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <FormRow type="file" name="image" LabelText="" />
          <FormRow type="text" name="name" LabelText="Name" />
          <FormRow type="number" name="price" LabelText="Pirce in  INR" />
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ display: "flex", gap: "5px" }}>
            <Select
              options={[
                { id: 1, category: "TOY" },
                { id: 2, category: "CAR" },
              ]}
              name="category"
              LabelText="Category"
            />
            <Button styles={{ width: "10px" }} text="Add" />
          </Box>
          <RadioGroup name="featured" labelText="Featured" items={radioItems} />
          <FormRow
            type="number"
            name="saleprice"
            LabelText="Sale price in  INR"
          />
        </Grid>
      </Grid>
      {/*Specifications */}

      {fields.map((field, index) => {

        return (
        <Grid container spacing={1} key={field.id}>
          <Grid item xs={6}>
            <FormRow labelText="key" placeholder="value" {...register(`specifications.${index}.key`)} />
          </Grid>

          <Grid item xs={6}>
            <Box sx={{ display: "flex", gap: "5px" }}>
          <FormRow  {...register(`specifications.${index}.value`)} labelText="value"/>
          <Button onClick={()  => {remove(index)}} text="" size="small" style={{ width: "10px" }}/>
          </Box>
        </Grid> 
     
        </Grid>)
      })}
      {/*
        */}
       <Button onClick={() => append({ key: "" ,value : ""})} text="ADD Specifications"/>
      <FormRow
        type="text"
        name="description"
        LabelText="Description"
        multiline={true}
      />
    </form>
  );
};

export default ProductsForm;
