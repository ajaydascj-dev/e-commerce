import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../features/users/userSlice";
import { useNavigate } from "react-router-dom";
import { Box, LinearProgress } from "@mui/material";
import Logo from "./Logo";

const GoogleCallBack = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.user);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const userDataString = params.get("user");
        if (userDataString) {
          const userData = JSON.parse(decodeURIComponent(userDataString));
          // Dispatch action to set user data in Redux
          // console.log(userData)
          dispatch(setUser(userData));
        } else {
          console.error("User data not found in URL parameters");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();

  }, []);
  useEffect(() => {
    if (user) {
      console.log("user is there");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }, [user]);
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "40%" }}>
        <Logo />
        <h4>Logging in....</h4>
        <LinearProgress />
      </Box>
    </Box>
  );
};

export default GoogleCallBack;
