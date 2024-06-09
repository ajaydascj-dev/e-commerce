import main from "../assets/images/main.svg";
import { Logo } from "../components";
import Wrapper from "../assets/wrappers/LandingPage";

import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Shopsy<span>Admin</span>panel
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequuntur quaerat molestias repudiandae adipisci placeat
            doloremque optio ea debitis aperiam cumque.
          </p>
          <Link to="/" className="btn btn-hero">
            Login
          </Link>
        </div>
        <img src={main} alt="shopsy" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
