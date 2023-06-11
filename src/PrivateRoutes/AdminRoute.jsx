import { Navigate, useLocation } from "react-router";
import useAdmin from "../hooks/useAdmin";
import Spinner from "../components/GeneralComponents/Loader/Spinner";
import { useAuthProvider } from "../context/AuthProvider";

const AdminRoute = ({ children }) => {
  const { signedInUser, isLoading } = useAuthProvider();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (isLoading || isAdminLoading) {
    return <Spinner></Spinner>;
  }

  if (signedInUser && isAdmin) {
    return children;
  }

  return <Navigate to="/sign-in" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
