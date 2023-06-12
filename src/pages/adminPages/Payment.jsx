import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import Checkout from "./Checkout";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_SECRETE_KEY);

const Payment = () => {
  const { price } = useParams();
  const { courseId } = useParams();
  const { className } = useParams();
  return (
    <div>
      <h2 className="text-3xl">Pay your course.</h2>
      <Elements stripe={stripePromise}>
        <Checkout
          cart={{ courseId: courseId, className: className }}
          price={parseFloat(price)}
        ></Checkout>
      </Elements>
    </div>
  );
};

export default Payment;
