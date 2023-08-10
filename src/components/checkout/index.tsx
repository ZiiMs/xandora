import Image from "next/image";
import React from "react";
import { useCart } from "../context/cartContext";
import { useRouter } from "next/router";

// const stripePromise = loadStripe(env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
const CheckoutDrawer: React.FC = () => {
  const cart = useCart();
  const router = useRouter();

  if (!cart.showCart) return null;
  return (
    <div className="flex h-full w-max min-w-[20%] flex-row justify-end bg-black-50">
      <div className="w-full ">
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
                  cart.showCart = false;
                  void router.push("/payment");
                }}
              >
                Checkout
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default CheckoutDrawer;
