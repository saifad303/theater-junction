import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAuthProvider } from "../context/AuthProvider";

const useStudent = () => {
  const { signedInUser, apiPrefixLink } = useAuthProvider();
  const { data: isStudent, isLoading: isStudentLoading } = useQuery({
    queryKey: ["isStudent", signedInUser?.email],
    queryFn: async () => {
      const res = await axios.get(
        `${apiPrefixLink}users/student/${signedInUser?.email}`,
        {
          headers: {
            authorization: `${localStorage.getItem("access-token")}`,
          },
        }
      );
      return res.data.student;
    },
  });
  return [isStudent, isStudentLoading];
};
export default useStudent;
