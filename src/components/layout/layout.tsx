import { type PropsWithChildren, type ReactNode } from "react";
import { CartProvider } from "../context/cartContext";
import Footer from "./footer";
import Navbar from "./navbar";
import CheckoutDrawer from "../checkout";
import { Elements } from "@stripe/react-stripe-js";

import { loadStripe } from "@stripe/stripe-js";
import { env } from "~/env.mjs";
const stripePromise = loadStripe(env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
const Layout: React.FC<{ children: PropsWithChildren<ReactNode> }> = ({
  children,
}) => {
  return (
    <CartProvider>
      <div className="flex h-screen min-h-screen w-full flex-col">
        <Navbar />
        <div className="flex h-full">
          <div className="container mx-auto flex flex-row">
            <div className="flex h-fit w-full flex-row">{children}</div>
          </div>
          <Elements stripe={stripePromise}>
            <CheckoutDrawer />
          </Elements>
        </div>
        <Footer />
      </div>
    </CartProvider>
  );
};
export default Layout;
