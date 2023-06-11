import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAuthProvider } from "../context/AuthProvider";

const useFetchAllClass = () => {
  // const token = localStorage.getItem('access-token');
  const { apiPrefixLink } = useAuthProvider();
  const {
    refetch: refetchAllClass,
    data: allClasses = [],
    isLoading: isFetchUserLoading,
  } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axios.get(`${apiPrefixLink}allClasses`);
      console.log("res from axios", res);
      return res.data;
    },
  });

  return [allClasses, refetchAllClass, isFetchUserLoading];
};

export default useFetchAllClass;
