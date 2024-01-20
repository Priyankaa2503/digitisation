import React, { useState } from "react";
import Icon from "./Icon";

const NavBarLink = ({ isOpened, id, title, icon_name }) => {
  return (
    <div className="w-full text-[#AAABB2] text-xs cursor-pointer hover:text-white font-light flex gap-2 h-6 items-center">
      <div className="h-5 w-5 flex justify-center items-center">
        <Icon src={icon_name} alt={icon_name} className="w-4 h-4" />
      </div>
      {isOpened && (
        <div className="animate-fade animate-once" key={id}>
          {title}
        </div>
      )}
    </div>
  );
};

const Sidebar = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [randomId, setRandomId] = useState(0);

  const getRandomId = () => {
    setRandomId(Math.random());
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full flex ${
        isOpened ? "w-56 py-3 px-6" : "w-12 p-3"
      } flex-col justify-between animate-fade-right animate-once items-center transition-all duration-200 bg-[#2a2d3e] shadow-lg`}
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
            className="flex tracking-wider h-full items-center justify-center font-semibold animate-fade animate-once flex-col"
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
        />
        <NavBarLink
          isOpened={isOpened}
          id={randomId + 3}
          title="DOCUMENTS"
          icon_name="Document"
        />
        <NavBarLink
          isOpened={isOpened}
          id={randomId + 3}
          title="PROFILE"
          icon_name="Profile"
        />
        <NavBarLink
          isOpened={isOpened}
          id={randomId + 3}
          title="SETTINGS"
          icon_name="Settings"
        />
      </div>

      <div className="w-full text-[#AAABB2] text-xs cursor-pointer hover:text-white font-light flex gap-2 h-6 items-center">
        <div className="h-5 w-5 flex justify-center items-center">
          <Icon src="LogOut" alt="Log Out" className="w-4 h-4" />
        </div>
        {isOpened && (
          <div className="animate-fade animate-once" key={randomId + 1}>
            LOG OUT
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
