import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAuthProvider } from "../context/AuthProvider";

const useInstructor = () => {
  const { signedInUser, apiPrefixLink } = useAuthProvider();
  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ["isInstructor", signedInUser?.email],
    queryFn: async () => {
      const res = await axios.get(
        `${apiPrefixLink}users/instructor/${signedInUser?.email}`,
        {
          headers: {
            authorization: `${localStorage.getItem("access-token")}`,
          },
        }
      );
      return res.data.instructor;
    },
  });
  return [isInstructor, isInstructorLoading];
};
export default useInstructor;
