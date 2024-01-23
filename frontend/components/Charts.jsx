import React from "react";

const Fullometer = ({ occupied, total, color }) => {
  const percentage = (occupied / total) * 100;
  return (
    <div
      className="w-full h-1 mt-4 rounded-full relative overflow-hidden"
      style={{
        backgroundColor: `${color}30`,
      }}
    >
      <div
        className="h-full absolute top-0 left-0 rounded-full"
        style={{
          width: `${percentage}%`,
          backgroundImage: `linear-gradient(to right, ${color} 40%, #ffffff99)`,
        }}
      />
    </div>
  );
};

export { Fullometer };
