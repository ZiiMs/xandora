import { type PropsWithChildren, type ReactNode } from "react";
import { CartProvider } from "../context/cartContext";
import Footer from "./footer";
import Navbar from "./navbar";

const Layout: React.FC<{ children: PropsWithChildren<ReactNode> }> = ({
  children,
}) => {
  return (
    <CartProvider>
      <div className="flex h-screen min-h-screen w-full flex-col">
        <Navbar />
        <div className="container mx-auto flex flex-row">
          <div className="flex h-full w-full flex-row">{children}</div>
        </div>
        <Footer />
      </div>
    </CartProvider>
  );
};
export default Layout;
