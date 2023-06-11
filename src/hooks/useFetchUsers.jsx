import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAuthProvider } from "../context/AuthProvider";

const useFetchUsers = () => {
  // const token = localStorage.getItem('access-token');
  const { apiPrefixLink } = useAuthProvider();
  const {
    refetch: refetchUsersData,
    data: users = [],
    isLoading: isUsersLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get(`${apiPrefixLink}users`);
      console.log("res from axios", res);
      return res.data;
    },
  });

  return [users, refetchUsersData, isUsersLoading];
};

export default useFetchUsers;
