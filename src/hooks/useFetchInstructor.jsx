import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAuthProvider } from "../context/AuthProvider";

const useFetchInstructor = () => {
  // const token = localStorage.getItem('access-token');
  const { apiPrefixLink } = useAuthProvider();
  const {
    refetch: refetchInstructorData,
    data: instructor = [],
    isLoading: isInstructorLoading,
  } = useQuery({
    queryKey: ["instructor"],
    queryFn: async () => {
      const res = await axios.get(`${apiPrefixLink}instructor`);
      console.log("res from axios", res);
      return res.data;
    },
  });

  return [instructor, refetchInstructorData, isInstructorLoading];
};

export default useFetchInstructor;
