import logo from "../assets/images/logo.ico";

const Logo = ({ handleDrawer }) => {
  return (
    <button
      className="logo"
      type="button"
      onClick={() => {
        handleDrawer && handleDrawer(false);
      }}
    >
      <img src={logo} alt="logo" />
      <h2>HOPSY</h2>
    </button>
  );
};

export default Logo;
