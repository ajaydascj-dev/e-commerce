import { toast } from "react-toastify";
import { Logo, FormRow, useForm, Button } from "../components";
import Wrapper from "../assets/wrappers/Login";

const Login = () => {
  const intialState = {
    email: "",
    password: "",
  };

  const { values, setValues, handleChange } = useForm(intialState);

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = values;
    if (!email || !password) {
      toast.error("Please fill out all fields");
    }
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

        <Button text="Submit" type="submit" />

        <p>Not a member please register with our shopify site</p>
      </form>
    </Wrapper>
  );
};

export default Login;
