import React from "react";
import Navbar from "./Navbar";

const MainLayout = ({ children, active }) => {
  return (
    <div className="p-5 ps-14 h-screen gap-3 flex-col justify-between w-screen flex items-center">
      <Navbar active={active} />
      {children}
    </div>
  );
};

export default MainLayout;
