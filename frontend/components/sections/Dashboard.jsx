import React from "react";

const Dashboard = () => {
  return (
    <div className="h-full flex justify-center items-center w-full">
      <div className="w-full h-full flex flex-col gap-2 p-4">
        <div className="grid grid-cols-4 gap-3 h-36 w-full">
          <div className="bg-white bg-opacity-25 h-full w-full rounded-lg shadow-lg p-4"></div>
          <div className="bg-white bg-opacity-25 h-full w-full rounded-lg shadow-lg p-4"></div>
          <div className="bg-white bg-opacity-25 h-full w-full rounded-lg shadow-lg p-4"></div>
          <div className="bg-white bg-opacity-25 h-full w-full rounded-lg shadow-lg p-4"></div>
        </div>
        <div className="h-full flex gap-2 w-full">
          <div className="bg-white bg-opacity-25 h-full w-full rounded-lg shadow-lg p-4"></div>
          <div className="bg-white bg-opacity-25 h-full w-full rounded-lg shadow-lg p-4"></div>
        </div>
      </div>
      <div className="w-96 p-4 h-full">
        <div className="h-full w-full bg-white bg-opacity-25 rounded-lg"></div>
      </div>
    </div>
  );
};

export default Dashboard;
