import { useSelector } from "react-redux";
import Wrapper from "../../../assets/wrappers/Login";
import { FormRow, useForm, Button } from "../../../components";
import { toast } from "react-toastify";

function EditProfile() {
  const { user } = useSelector((store) => store.user);
  const intialState = {
    username: user?.username,
    email: user?.email,
  };
  const { values, handleChange } = useForm(intialState);
  const onSubmit = (e) => {
    e.preventDefault();
    const { email, username } = values;
    if (!email || !username) {
      toast.error("Email and Username must be there");
      return;
    }
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
          type="password"
          name="password"
          LabelText="Change Password"
          handleChange={handleChange}
        />
        <Button text="Update" type="submit" />
      </form>
    </Wrapper>
  );
}

export default EditProfile;
