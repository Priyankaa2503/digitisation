import React from "react";
import Icon from "../Icon";
import { Fullometer } from "../Charts";

const OverCard = ({ title, occupied, total, files_count, color }) => {
  const getGB = (mb) => {
    const string_mb = mb.toString();
    if (string_mb[3] === "0") {
      if (string_mb[2] === "0") return mb / 1000;
      else return mb / 100;
    } else return (mb / 1000).toFixed(2);
  };
  return (
    <div className="bg-white text-[#B5C9DB] bg-opacity-10 h-full w-full flex items-center flex-col justify-center rounded-lg shadow-lg px-3 py-2">
      <div className="w-full h-fit flex items-center">
        <Icon
          src={`Dash_${title}`}
          alt={title}
          className="w-5 h-5"
          color={color}
        />
      </div>
      <div className="text-lg w-full mt-2 font-semibold">{title}</div>
      <Fullometer
        occupied={parseInt(occupied)}
        total={parseInt(total)}
        color={color}
      />
      <div className="mt-2 flex w-full justify-between items-center text-xs">
        <div className="text-xs text-[#B5C9DB90]">{files_count} files</div>
        <div className="text-xs font-semibold">{`${getGB(occupied)} GB`}</div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="h-full flex justify-center items-center w-full">
      <div className="w-full h-full flex flex-col gap-2 p-4">
        <div className="grid grid-cols-4 gap-3 h-48 w-full">
          <OverCard
            title="Documents"
            occupied="1800"
            total="2000"
            files_count="1235"
            color="#A855F7"
          />
          <OverCard
            title="Google"
            occupied="500"
            total="2000"
            files_count="1235"
            color="#FFA113"
          />
          <OverCard
            title="Clouds"
            occupied="1849"
            total="2000"
            files_count="1235"
            color="#A4CDFF"
          />
          <OverCard
            title="Drop"
            occupied="1200"
            total="2000"
            files_count="1235"
            color="#00C55E"
          />
        </div>
        <div className="h-full flex gap-2 w-full">
          <div className="bg-white bg-opacity-10 h-full w-[55%] rounded-lg shadow-lg p-4"></div>
          <div className="bg-white bg-opacity-10 h-full w-[45%] rounded-lg shadow-lg p-4"></div>
        </div>
      </div>
      <div className="w-96 py-4 h-full">
        <div className="h-full w-full bg-white bg-opacity-10 shadow-lg rounded-lg"></div>
      </div>
    </div>
  );
};

export default Dashboard;
