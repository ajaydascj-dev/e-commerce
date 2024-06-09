import { useState , useEffect } from "react" ;
import { Logo , FormRow } from "../components";
import Wrapper from "../assets/wrappers/Login";

const Login = () => {
    const handleChange = (e) => {
        console.log(e.target)
    }
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(e.target)
    }
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo/>
        <h3>Login</h3>

        <FormRow type='text' name='name' LabelText='Email'/>
        <FormRow type='password' name='name' LabelText='Password'/>
      </form>
    </Wrapper>
    
  )
}

export default Login