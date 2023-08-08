import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Image from "next/image";
import React from "react";
import { api } from "~/utils/api";
import { useCart } from "../context/cartContext";

const CheckoutDrawer: React.FC = () => {
  const cart = useCart();
  const stripe = useStripe();
  const elements = useElements();
  const { mutate: createPurchase, data: client_secret } =
    api.purchase.purchase.useMutation();

  if (!stripe) {
    return;
  }
  const handlePurchase = async () => {
    try {
      if (!client_secret || CardElement !== undefined) return;
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

  if (!cart.showCart) return null;
  return (
    <div className="flex h-full w-max min-w-[20%] flex-row justify-end bg-black-50">
      <div className="w-full ">
        {client_secret ? (
          <div className="flex w-full flex-col">
            <CardElement className="w-full" />

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
        ) : (
          <div className="flex flex-col items-center justify-center p-2">
            {cart.quantity > 0 ? (
              <div className="flex w-full flex-col items-center justify-center gap-4">
                {cart.item.map((item, i) => (
                  <div
                    key={i}
                    className="flex w-full flex-row items-center justify-center"
                  >
                    <Image
                      src={item.image}
                      width={600}
                      height={600}
                      alt={item.label}
                      className="h-40 w-40 rounded"
                    />
                    <div className="flex h-full w-full flex-col justify-between">
                      <span>{item.label}</span>
                      <div className="flex h-full w-full flex-row">
                        <input
                          type="number"
                          className="m-0 h-fit w-10 items-center border-none p-0 text-center  text-sm outline-none  [-moz-appearance:_textfield] focus:border-none focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                          value={item.quantity}
                        />
                      </div>
                    </div>
                  </div>
                ))}

                <button
                  onClick={() => {
                    createPurchase({
                      amount: cart.total,
                    });
                  }}
                >
                  Checkout
                </button>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};
export default CheckoutDrawer;
