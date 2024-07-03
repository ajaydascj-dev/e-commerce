import { toast } from "react-toastify";
import { Logo, FormRow, useForm, Button } from "../components";
import Wrapper from "../assets/wrappers/Login";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/users/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// import GoogleIcon from "@mui/icons-material/Google";
import { FcGoogle } from "react-icons/fc";


const intialState = {
  email: "",
  password: "",
  isAdmin: true,
};

const Login = () => {
  const { values, handleChange } = useForm(intialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading } = useSelector((store) => store.user);
  const googleLogin = () => {
    window.open("http://localhost:3000/api/v1/login/google", "_self");
  };
  const onSubmit = (e) => {
    e.preventDefault();

    const { email, password } = values;
    if (!email || !password) {
      toast.error("Please fill out all fields");
      return;
    }

    dispatch(loginUser({ email, password }));
    return;
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const errorDataString = params.get("error");
    if (errorDataString) {
      toast.error(errorDataString);
      params.delete("error");
    }

    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }, [user]);
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

        <Button
          text={isLoading ? "loading..." : "submit"}
          type="submit"
          disabled={isLoading}
        />
        <Button
          text="Login with"
          styles={{ marginTop: "10px", background: "#F2F2F2", gap: "5px" ,color:"black" ,border:"none"}}
          variant="outlined"
          onClick={googleLogin}
        >
          <FcGoogle style={{fontSize: "30px"}}/>
        </Button>
        <p>Not a member please register with our shopify site</p>
      </form>
    </Wrapper>
  );
};

export default Login;
