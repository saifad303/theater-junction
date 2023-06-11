import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAuthProvider } from "../context/AuthProvider";

const useFetchAllClassesForHome = () => {
  const { apiPrefixLink } = useAuthProvider();
  const {
    refetch: refetchSixClass,
    data: topSixClasses = [],
    isLoading: isSixClassLoading,
  } = useQuery({
    queryKey: ["topSixClass"],
    queryFn: async () => {
      const res = await axios.get(`${apiPrefixLink}topSixClasses`);
      return res.data;
    },
  });

  return [topSixClasses, refetchSixClass, isSixClassLoading];
};

export default useFetchAllClassesForHome;
