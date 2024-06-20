import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import { useSelector } from "react-redux";
import Wrapper from "../../../assets/wrappers/Login";


const Profile = () => {
    const { user, isLoading } = useSelector((store) => store.user);

  return (
 
    <Wrapper>
  <div  className="form" style={{display:"flex", flexDirection:"column",alignItems:"start"}}>
     <Typography variant="body2" color="text.secondary">User Name : {user?.username}</Typography>
     <Typography variant="body2" color="text.secondary">Email : {user?.email}</Typography>
     <Typography variant="body2" color="text.secondary">Address : {user?.address}</Typography>
     <Typography variant="body2" color="text.secondary">isAdmin : {user?.isAdmin ? 'True' : 'False'}</Typography>
     <Typography variant="body2" color="text.secondary">Created at : {user?.createdAt}</Typography>
     <Typography variant="body2" color="text.secondary">Updated at : {user?.updatedAt}</Typography>
     </div>
     </Wrapper>
    
  )
}

export default Profile