import { Navigate, useLocation } from "react-router";
import Spinner from "../components/GeneralComponents/Loader/Spinner";
import { useAuthProvider } from "../context/AuthProvider";
import useInstructor from "../hooks/useInstructor";

const InstructorRoute = ({ children }) => {
  const { signedInUser, isLoading } = useAuthProvider();
  const [isInstructor, isInstructorLoading] = useInstructor();
  const location = useLocation();

  if (isLoading || isInstructorLoading) {
    return <Spinner></Spinner>;
  }

  if (signedInUser && isInstructor) {
    return children;
  }
  return <Navigate to="/sign-in" state={{ from: location }} replace></Navigate>;
};

export default InstructorRoute;
