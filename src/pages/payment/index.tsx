import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { api } from "~/utils/api";

import { env } from "~/env.mjs";
import PaymentStatus from "~/components/checkout/paymentStatus";
import { useRouter } from "next/router";
import PurchaseForm from "~/components/checkout/purchaseForm";
import { useEffect } from "react";
import { useCart } from "~/components/context/cartContext";

const stripePromise = loadStripe(env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
const PaymentPage = () => {
  const router = useRouter();
  const cart = useCart();
  const { mutate: createPurchase, data: client_secret } =
    api.purchase.purchase.useMutation();

  useEffect(() => {
    if (cart.total === 0) return;
    createPurchase({ amount: cart.total });
  }, []);
  return (
    <>
      {client_secret ? (
        <Elements
          options={{
            clientSecret: client_secret,
          }}
          stripe={stripePromise}
        >
          <PurchaseForm />
          <PaymentStatus />
        </Elements>
      ) : (
        <div>loading...</div>
      )}
    </>
  );
};

export default PaymentPage;
