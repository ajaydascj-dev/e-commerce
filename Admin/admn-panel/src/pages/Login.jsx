import { toast } from "react-toastify";
import { Logo, FormRow, useForm, Button } from "../components";
import Wrapper from "../assets/wrappers/Login";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/users/userSlice";

const intialState = {
  email: "",
  password: "",
  isAdmin : true 
};

const Login = () => {
  const { values, setValues, handleChange } = useForm(intialState);
  const dispatch = useDispatch()
  const { user, isLoading } = useSelector((store) => store.user);
  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = values;
    if (!email || !password) {
      toast.error("Please fill out all fields");
      return
    }

      dispatch(loginUser({email , password}))
      return
   
  };
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>Login</h3>

        <FormRow
          type="text"
          name="email"
          LabelText="Email"
          handleChange={handleChange}
        />
        <FormRow
          type="password"
          name="password"
          LabelText="Password"
          handleChange={handleChange}
        />

        <Button text="Submit" type="submit" disabled={isLoading}/>

        <p>Not a member please register with our shopify site</p>
      </form>
    </Wrapper>
  );
};

export default Login;
