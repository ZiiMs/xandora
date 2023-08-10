import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

const PurchaseForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  if (!stripe) {
    return;
  }

  const handlePurchase = async () => {
    try {
      if (!elements) return;
      const { error } = await stripe?.confirmPayment({
        elements,
        confirmParams: {
          return_url: "http://localhost:3000",
        },
      });

      if (error) {
        console.error("Payment error:", error);
      } else {
        console.log("succeeded");
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex w-full flex-col">
      <PaymentElement
        id="payment-element"
        options={{
          layout: "tabs",
        }}
      />
      <button
        onClick={() => {
          handlePurchase()
            .then(() => console.log("Success"))
            .catch((e) => console.warn(e));
        }}
      >
        Purchase
      </button>
    </div>
  );
};

export default PurchaseForm;
