import { useSelector } from "react-redux";
import UnAutharizedError from "./UnAutharizedError";

const SuperAdminProtection = ({ children }) => {
  const { user } = useSelector((store) => store.user);
  if (!user.isSuperAdmin) {
    return <UnAutharizedError />;
  }
  return children;
};

export default SuperAdminProtection;
