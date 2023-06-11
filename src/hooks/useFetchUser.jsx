import { useQuery } from "@tanstack/react-query";
import { useAuthProvider } from "../context/AuthProvider";
import axios from "axios";
const useFetchUser = () => {
  const { signedInUser, apiPrefixLink } = useAuthProvider();
  // const token = localStorage.getItem('access-token');
  const {
    refetch: userRefetch,
    data: user,
    isLoading: isFetchUserLoading,
  } = useQuery({
    queryKey: ["user", signedInUser?.email],
    queryFn: async () => {
      const res = await axios.get(
        `${apiPrefixLink}user?email=${signedInUser?.email}`
      );
      console.log("res from axios", res);
      return res.data;
    },
  });

  return [user, userRefetch, isFetchUserLoading];
};
export default useFetchUser;
