import { Navigate, useLocation } from "react-router";
import Spinner from "../components/GeneralComponents/Loader/Spinner";
import { useAuthProvider } from "../context/AuthProvider";
import useStudent from "../hooks/useStudent";

const StudentRoute = ({ children }) => {
  const { signedInUser, isLoading } = useAuthProvider();
  const [isStudent, isStudentLoading] = useStudent();
  const location = useLocation();

  if (isLoading || isStudentLoading) {
    return <Spinner></Spinner>;
  }

  if (signedInUser && isStudent) {
    return children;
  }
  return <Navigate to="/sign-in" state={{ from: location }} replace></Navigate>;
};

export default StudentRoute;
