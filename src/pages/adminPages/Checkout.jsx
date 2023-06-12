import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthProvider } from "../../context/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Checkout = ({ cart, price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const navigate = useNavigate();

  const { signedInUser, apiPrefixLink } = useAuthProvider();

  useEffect(() => {
    if (price > 0) {
      axios
        .post(`${apiPrefixLink}create-payment-intent`, { price })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    console.log(card);

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: signedInUser?.email || "unknown",
            name: signedInUser?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirmError = ", confirmError);
    }

    console.log("payment intent", paymentIntent);
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      // save payment information to the server
      const payment = {
        studentEmail: signedInUser?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        courseId: cart.courseId,
        courseName: cart.className,
      };
      axios.post(`${apiPrefixLink}payments`, payment).then((res) => {
        console.log(res.data);
        console.log("success");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Payment Successfully completed.",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/admin/enrolled-classes");
      });
    }
  };

  return (
    <>
      <form
        className="w-[40%] m-8 mx-auto mt-[200px] border-2 border-[#CF1164] p-10 rounded-lg"
        onSubmit={handleSubmit}
      >
        <h3 className=" mb-5 font-medium text-xl">
          Insert your card information
        </h3>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {processing && (
          <p className="text-[#CF1164]">Your payment is processing...</p>
        )}
        <button
          className=" mt-10 px-5 py-3 text-white duration-150 bg-[#54C6C4] font-medium text-lg rounded-lg  active:shadow-lg"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
      {transactionId && <p className="text-green-500">Transaction completed</p>}
    </>
  );
};

export default Checkout;
