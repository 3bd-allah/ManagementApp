import App from "./App";
import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";
const RootLayout = () => {
  return (
    // <div className="flex h-screen w-full bg-white">
    //   <div className="w-72 flex flex-col mt-8 ">
    //     <Sidebar />
    //   </div>

    //   <main className="flex-1 h-full pt-8 px-12 overflow-y-auto">
    //     <Outlet />
    //   </main>
    // </div>
    <App />
  );
};

export default RootLayout;
