import { Link } from "react-router-dom";
import img from "../assets/images/unautharized.png";
import Wrapper from "../assets/wrappers/Error";

const UnAutharizedError = () => {
  return (
    <Wrapper>
      <div>
        <img src={img} alt="not-found" style={{ width: "400px" }} />
        <h3>Oops! You Don't have access to this page</h3>
        <p>We can't allow you to see this page</p>
        <Link to="/">Back Home</Link>
      </div>
    </Wrapper>
  );
};

export default UnAutharizedError;
