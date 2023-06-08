import { type PropsWithChildren, type ReactNode } from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const Layout: React.FC<{ children: PropsWithChildren<ReactNode> }> = ({
  children,
}) => {
  return (
    <main className="min-h-screen min-w-screen bg-white">
      <div className="w-full h-full ">
        <Navbar/>
        <Sidebar/>
        {children}
        <Footer/>
              </div>
    </main>
  );
};

export default Layout;
