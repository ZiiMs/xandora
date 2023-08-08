import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { api } from "~/utils/api";

import { loadStripe } from "@stripe/stripe-js";
import { env } from "~/env.mjs";
const stripePromise = loadStripe(env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const { mutate: createPurchase, data: client_secret } =
    api.purchase.purchase.useMutation();

  if (!stripe) {
    return;
  }
  const handlePurchase = async () => {
    try {
      if (!client_secret) return;
      const { error, paymentIntent } = await stripe?.confirmCardPayment(
        client_secret,
        {
          // payment_method: {
          //   card: elements?.getElement(CardElement),
          // },
        }
      );

      if (error) {
        console.error("Payment error:", error);
      } else if (paymentIntent.status === "succeeded") {
        console.log("succeeded", paymentIntent);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return <div>Checkout</div>;
};

export default CheckoutForm;
