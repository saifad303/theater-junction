import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAuthProvider } from "../context/AuthProvider";

const useFetchTopTeacher = () => {
  // const token = localStorage.getItem('access-token');
  const { apiPrefixLink } = useAuthProvider();
  const {
    refetch: refetchTopInstructor,
    data: topInstructor = [],
    isLoading: isTopInstructorLoading,
  } = useQuery({
    queryKey: ["topInstructor"],
    queryFn: async () => {
      const res = await axios.get(`${apiPrefixLink}topInstructor`);
      console.log("res from axios", res);
      return res.data;
    },
  });

  return [topInstructor, refetchTopInstructor, isTopInstructorLoading];
};

export default useFetchTopTeacher;
