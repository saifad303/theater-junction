import { Navigate, useLocation } from "react-router";
import { useAuthProvider } from "../context/AuthProvider";
import Spinner from "../components/GeneralComponents/Loader/Spinner";

const PrivateRoute = ({ children }) => {
  const { signedInUser, isLoading } = useAuthProvider();
  const location = useLocation();

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  if (signedInUser) {
    return children;
  }
  return <Navigate to="/sign-in" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
