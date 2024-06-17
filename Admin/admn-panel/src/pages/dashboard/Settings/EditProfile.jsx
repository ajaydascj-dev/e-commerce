import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../../../assets/wrappers/Login";
import { FormRow, useForm, Button } from "../../../components";
import { toast } from "react-toastify";
import { updateUser } from "../../../features/users/userSlice";

function EditProfile() {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const intialState = {
    username: user?.username,
    email: user?.email,
    address : user?.address,
    password : ''
  };
  const { values, handleChange } = useForm(intialState);

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, username , address ,password } = values;
    if (!email || !username) {
      toast.error("Email and Username must be there");
      return;
    }
    if(password) {
      dispatch(updateUser({email , username , address ,password}));
      
      return
    }
    dispatch(updateUser({email , username , address }))
  };
  return (
    <Wrapper>
      <form className="form" onSubmit={onSubmit}>
        <h3>Update</h3>
        <FormRow
          type="text"
          name="username"
          LabelText="Username"
          handleChange={handleChange}
          value={values.username}
        />
        <FormRow
          type="text"
          name="email"
          LabelText="Email"
          handleChange={handleChange}
          value={values.email}
        />
          <FormRow
          type="text"
          name="address"
          LabelText="Address"
          handleChange={handleChange}
          value={values.address}
        />
        <FormRow
          type="password"
          name="password"
          LabelText="Change Password"
          handleChange={handleChange}
          value={values.password}
        />
        <Button text="Update" type="submit" />
      </form>
    </Wrapper>
  );
}

export default EditProfile;
