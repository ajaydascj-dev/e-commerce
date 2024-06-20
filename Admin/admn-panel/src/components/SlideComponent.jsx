import * as React from "react";
import Slide from "@mui/material/Slide";
import Card from "@mui/material/Card";
import Profile from "../assets/images/Profile.png";
import { red } from "@mui/material/colors";
import {
  Avatar,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closeSlide, openSlide } from "../features/users/userSlice";
import Button from "./Button";
import formateDate from "../utils/formateDate";
import nameFormater from "../utils/nameFormater";
import dateFormater from "../utils/formateDate";
import AlertModalSlice, {
  toggleAlertModal,
} from "../features/AlertModal/AlertModalSlice";
import AlertPopUp from "./AlertPopUp";

// import Button from "@mui/material/Button";

// const icon = (
//   // <Card sx={{ m: 1, width: 300, position: "absolute", zIndex: "100" }}>
//   //   <CardHeader
//   //     avatar={
//   //       <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//   //         R
//   //       </Avatar>
//   //     }
//   //     title="Shrimp and Chorizo Paella"
//   //     subheader="September 14, 2016"
//   //   />
//   //   <CardMedia
//   //     component="img"
//   //     sx={{ objectFit: "contain", maxWidth: "100%" }}
//   //     height="100"
//   //     image={Profile}
//   //     alt="Profile"
//   //   />
//   //   <CardContent>
//   //     <Typography variant="body2" color="text.secondary">
//   //       This impressive paella is a perfect party dish and a fun meal to cook
//   //       together with your guests. Add 1 cup of frozen peas along with the
//   //       mussels, if you like.
//   //     </Typography>
//   //   </CardContent>
//   //   <CardActions disableSpacing sx={{ display: "flex", gap: "5px" }}>
//   //     <Button variant="outlined" color="success" text="CLose" onClick={() => {closeSlide()}}/>
//   //     <Button color="error" text="Delete" />
//   //   </CardActions>
//   // </Card>
// );

export default function SlideComponent({ props }) {
  console.log(props);
  const { username, createdAt, updatedAt, address, email } = props;
  const dispach = useDispatch();
  const { slideOpened } = useSelector((store) => store.user);

  return (
    <>
      <div
        onClick={() => {
          dispach(openSlide());
        }}
      ></div>
      <Slide direction="right" in={slideOpened} mountOnEnter unmountOnExit>
        <Card sx={{ m: 1, width: 300, position: "absolute", zIndex: "100" }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {nameFormater(username)}
              </Avatar>
            }
            title={username}
            subheader={formateDate(createdAt)}
          />
          <CardMedia
            component="img"
            sx={{ objectFit: "contain", maxWidth: "100%" }}
            height="100"
            image={Profile}
            alt="Profile"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {` Address : ${address}`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {` Email : ${email}`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {` Last  update : ${dateFormater(updatedAt)}`}
            </Typography>
          </CardContent>
          <CardActions disableSpacing sx={{ display: "flex", gap: "5px" }}>
            <Button
              variant="outlined"
              color="success"
              text="CLose"
              onClick={() => {
                dispach(closeSlide());
              }}
            />
            <Button
              color="error"
              text="Delete"
              onClick={() => {
                dispach(toggleAlertModal());
              }}
            />
          </CardActions>
        </Card>
      </Slide>
    </>
  );
}
