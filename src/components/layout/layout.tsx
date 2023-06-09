import { type PropsWithChildren, type ReactNode } from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const Layout: React.FC<{ children: PropsWithChildren<ReactNode> }> = ({
  children,
}) => {
  return (
    <div className="flex h-screen min-h-screen w-full flex-col">
      <Navbar />
      <div className="flex h-full w-full flex-row">
        <Sidebar />
        <div className="container mx-auto">
          <div className="flex h-full w-full flex-row">{children}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Layout;
