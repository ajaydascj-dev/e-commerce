import { Box, Grid, Typography } from "@mui/material";
import FormRow from "./controls/FormRow";
import Select from "./controls/Select";
import RadioGroup from "./controls/RadioGroup";
import Button from "./controls/Button";
import { useForm, useFieldArray } from "react-hook-form";

import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SmallPopup from "./SmallPopup";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../features/category/categorySlice";
import { addProduct } from "../features/Products/productSlice";
import { togglePopupModal } from "../features/Popup/PopupSlice";
import Checkbox from "./controls/Checkbox";
import { getSignatureForUpload, uploadFile } from "../utils/cloudinaryUploads";

const radioItems = [
  { id: true, title: "Featured" },
  { id: false, title: "Not-Featured" },
];

const ProductsForm = () => {
  const { user } = useSelector((store) => store.user);
  const { category } = useSelector((store) => store.category);
  const dispatch = useDispatch();
  const { register, handleSubmit,control,formState: { errors } } = useForm({
    defaultValues: {
      specifications: [
        {
          key: "",
          value: "",
        },
      ],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "specifications",
  });
   console.log(errors)

   const [categoryID, setCategoryID] = useState('');

   const handleCategoryChange = (event) => {
     console.log(event.target.value)
     setCategoryID(event.target.value);
   };
  const onSubmit = async (data) => {
   
    const { image, ...product } = data;
    console.log(product);

    // try {
    //   const { timestamp: imgTimestamp, signature: imgSignature } =
    //     await getSignatureForUpload("products");
    //     const imageUrl = await uploadFile(
    //     image[0],
    //     "image",
    //     imgTimestamp,
    //     imgSignature
    //   );
    //   product.image = imageUrl;
    //   dispatch(addProduct(product));
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const closeForm = () => {
    dispatch(togglePopupModal());
  };
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={1}>
        <Grid item xs={user.isSuperAdmin ? 6 : 12}>
          <FormRow
            type="file"
            name="image"
            register={register}
           
            inputProps={{ accept: "image/png, image/gif, image/jpeg" }}
          />

          <FormRow
            type="text"
            name="name"
            LabelText="Name"
            register={register}
            errorReq ={{required : "Product name is required"}}
            error={Boolean(errors.name)}
            helperText={errors.name?.message}
          />
          <FormRow
            type="number"
            name="price"
            LabelText="Pirce in  INR"
            register={register}
            errorReq ={{required : "Price is required"}}
            error={Boolean(errors.price)}
            helperText={errors.price?.message}
          />
        </Grid>
        <Grid item xs={user.isSuperAdmin ? 6 : 12}>
          <Box sx={{ display: "flex", gap: "5px" }}>
            <Select
              options={category}
              name="categoryID"
              LabelText="Category"
              register={register}
              value={categoryID}
              handleChange={handleCategoryChange}
            
            />

            <SmallPopup>
              <AddCircleIcon />
            </SmallPopup>
          </Box>
          {user.isSuperAdmin && (
            <>
              <RadioGroup
                name="featured"
                LabelText="Featured"
                items={radioItems}
                register={register}
              />
              <FormRow
                type="number"
                name="saleprice"
                LabelText="Sale price in  INR"
                register={register}
              />{" "}
            </>
          )}
        </Grid>
      </Grid>
      {/*Specifications */}
      <Box sx={{ display: "flex", alignItems: "center", width: "20%" }}>
        <Typography>Specifications</Typography>{" "}
        <Button
          onClick={() => append({ key: "", value: "" })}
          style={{
            background: "transparent",
            border: "none",
            boxShadow: "none",
          }}
        >
          {" "}
          <PlaylistAddIcon sx={{ color: "#1976a2" }} />
        </Button>
      </Box>
      {fields.map((field, index) => {
        return (
          <Grid container spacing={1} key={field.id}>
            <Grid item xs={6}>
              <FormRow
                LabelText="Key"
                placeholder="key"
                register={register}
                name={`specifications[${index}].key`}
              />
            </Grid>

            <Grid item xs={6}>
              <Box sx={{ display: "flex", gap: "5px" }}>
                <FormRow
                  register={register}
                  name={`specifications[${index}].value`}
                  LabelText="Value"
                  placeholder="value"
                />
                <Button
                  onClick={() => {
                    remove(index);
                  }}
                  size="small"
                  style={{ width: "15px", height: "55px" }}
                >
                  {" "}
                  <DeleteIcon />
                </Button>
              </Box>
            </Grid>
          </Grid>
        );
      })}

      <FormRow
        type="text"
        name="description"
        LabelText="Description"
        multiline={true}
        register={register}
      />
      {user.isSuperAdmin && (
        <Checkbox labelText="Verified" name="verified" register={register} />
      )}

      <Box sx={{ display: "flex", gap: "10px" }}>
        <Button
          text="cancel"
          variant="outlined"
          color="success"
          onClick={closeForm}
        />
        <Button type="submit" text="submit" />
      </Box>
    </form>
  );
};

export default ProductsForm;
