import logo from '../assets/images/logo.ico'

const Logo = ({handleDrawer}) => {
  return (
    <button className="logo" type='button'  onClick={()=>{handleDrawer && handleDrawer(false)}}>
    <img src={logo} alt="logo" />
    <h1>HOPSY</h1>
    </button>
  )
}

export default Logo