import { useQuery } from "@tanstack/react-query";
import { useAuthProvider } from "../context/AuthProvider";
import axios from "axios";

const useAdmin = () => {
  const { signedInUser, apiPrefixLink } = useAuthProvider();
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", signedInUser?.email],
    queryFn: async () => {
      const res = await axios.get(
        `${apiPrefixLink}users/admin/${signedInUser?.email}`,
        {
          headers: {
            authorization: `${localStorage.getItem("access-token")}`,
          },
        }
      );
      return res.data.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};
export default useAdmin;
