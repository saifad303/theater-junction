import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAuthProvider } from "../context/AuthProvider";

const useFetchAllPayment = () => {
  const { signedInUser, apiPrefixLink } = useAuthProvider();
  const {
    refetch: refetchPayment,
    data: payments = [],
    isLoading: isPaymentLoading,
  } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axios.get(
        `${apiPrefixLink}payments?email=${signedInUser.email}`
      );
      return res.data;
    },
  });

  return [payments, refetchPayment, isPaymentLoading];
};

export default useFetchAllPayment;
