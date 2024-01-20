import React, { useState } from "react";
import Icon from "./Icon";

const NavBarLink = ({
  isOpened,
  id,
  title,
  icon_name,
  isActive,
  setActive,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`w-full ${
        isActive ? "text-white bg-[#2697FF]" : "text-[#AAABB2]"
      } animate-fade-right animate-delay-[0.5s] text-xs 
      ${isHovered && !isActive ? "text-white bg-[#66B6FF]" : ""}
      cursor-pointer flex gap-2 h-10  ${
        isOpened ? "px-3 justify-start" : "px-0 justify-center"
      } transition-all duration-500 rounded-lg items-center`}
      onClick={() => {
        setActive(icon_name);
      }}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <div className="h-5 w-5 flex justify-center items-center">
        <Icon src={icon_name} alt={icon_name} className="w-4 h-4" />
      </div>
      {isOpened && (
        <div className="animate-fade animate-duration-[0.5s]" key={id}>
          {title}
        </div>
      )}
    </div>
  );
};

const Sidebar = ({ active, setActive }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [randomId, setRandomId] = useState(0);
  const getRandomId = () => {
    setRandomId(Math.random());
  };
  return (
    <div
      className={`fixed py-5 top-0 p-2 left-0 h-full flex ${
        isOpened ? "w-56" : "w-12"
      } flex-col justify-between animate-fade-right items-center transition-all duration-200 bg-[#2a2d3e] shadow-lg`}
      onMouseEnter={() => {
        setIsOpened(true);
        getRandomId();
      }}
      onMouseLeave={() => {
        setIsOpened(false);
      }}
    >
      <div className="flex gap-2 h-12 items-center">
        <Icon
          src="Logo"
          alt="logo"
          className="animate-fade-right w-4 h-6 animate-delay-[0.5s]"
        />
        {isOpened && (
          <div
            className="flex tracking-wider h-full items-center justify-center font-semibold animate-fade animate-duration-[0.5s] flex-col"
            key={randomId}
          >
            <div>DIGITAL</div>
            <div className="-mt-4 ms-1 italic text-[#2697FF]">LOCKER</div>
          </div>
        )}
      </div>
      <div className="flex flex-col h-full w-full gap-5 pt-10">
        <NavBarLink
          isOpened={isOpened}
          id={randomId + 2}
          title="DASHBOARD"
          icon_name="Dashboard"
          isActive={active === "Dashboard"}
          setActive={setActive}
        />
        <NavBarLink
          isOpened={isOpened}
          id={randomId + 3}
          title="DOCUMENTS"
          icon_name="Document"
          isActive={active === "Document"}
          setActive={setActive}
        />
        <NavBarLink
          isOpened={isOpened}
          id={randomId + 3}
          title="PROFILE"
          icon_name="Profile"
          isActive={active === "Profile"}
          setActive={setActive}
        />
        <NavBarLink
          isOpened={isOpened}
          id={randomId + 3}
          title="SETTINGS"
          icon_name="Settings"
          isActive={active === "Settings"}
          setActive={setActive}
        />
      </div>
      <div
        className={`w-full text-[#AAABB2] animate-fade-right animate-delay-[0.5s] text-xs cursor-pointer hover:text-white flex gap-2 h-6  ${
          isOpened ? "px-3 justify-start" : "px-0 justify-center"
        } items-center`}
      >
        <div className="h-5 w-5 flex justify-center items-center">
          <Icon src="LogOut" alt="Log Out" className="w-4 h-4" />
        </div>
        {isOpened && (
          <div
            className="animate-fade animate-duration-[0.5s]"
            key={randomId + 1}
          >
            LOG OUT
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
