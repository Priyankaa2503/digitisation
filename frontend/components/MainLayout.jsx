import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="ps-16 h-screen w-screen flex justify-center items-center">
      {children}
    </div>
  );
};

export default MainLayout;
