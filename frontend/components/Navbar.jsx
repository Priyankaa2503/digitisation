import React, { useState } from "react";

const Navbar = ({ active }) => {
  const [isOpened, setIsOpened] = useState(false);
  const company_name = "Enpointe";
  return (
    <div className="p-3 w-full flex items-center justify-between">
      <div className="text-2xl tracking-wider font-semibold">{active}</div>
      <div
        className="p-2 bg-[#2a2d3e] flex gap-2 items-center rounded-lg text-xs text-[#AAABB2] border border-white border-opacity-5 cursor-pointer"
        onClick={() => {
          setIsOpened(!isOpened);
        }}
      >
        <div className="rounded-full w-5 h-5 flex items-center justify-center bg-white bg-opacity-15">
          {company_name[0]}
        </div>
        <div>{company_name}</div>
        <div
          style={{
            transform: isOpened ? "rotate(180deg)" : "rotate(0deg)",
          }}
          className="ms-2 transition-all duration-300 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-down"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
