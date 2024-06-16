import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import { useSelector } from "react-redux";
import Wrapper from "../../../assets/wrappers/Login";


const Profile = () => {
    const { user, isLoading } = useSelector((store) => store.user);

  return (
 
    <Wrapper>
  <div className="form" style={{display:"flex", flexDirection:"column",alignItems:"start"}}>
     <Typography>User Name : {user?.username}</Typography>
     <Typography>Email : {user?.email}</Typography>
     <Typography>isAdmin : {user?.isAdmin ? 'True' : 'False'}</Typography>
     <Typography>Created at : {user?.createdAt}</Typography>
     <Typography>Updated at : {user?.updatedAt}</Typography>
     </div>
     </Wrapper>
    
  )
}

export default Profile