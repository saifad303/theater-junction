import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAuthProvider } from "../context/AuthProvider";

const useFetchClasses = () => {
  const { signedInUser, apiPrefixLink } = useAuthProvider();
  const {
    refetch: refetchClassData,
    data: classes = [],
    isLoading: isClassLoading,
  } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axios.get(
        `${apiPrefixLink}classes/${signedInUser.email}`
      );
      return res.data;
    },
  });

  return [classes, refetchClassData, isClassLoading];
};

export default useFetchClasses;
