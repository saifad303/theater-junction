import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFetchUsers = () => {
  // const token = localStorage.getItem('access-token');
  const {
    refetch: refetchUsersData,
    data: users = [],
    isLoading: isUsersLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/users`);
      console.log("res from axios", res);
      return res.data;
    },
  });

  return [users, refetchUsersData, isUsersLoading];
};

export default useFetchUsers;
