import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "react";

export default function Home() {
  const [active, setActive] = useState("Dashboard");

  useEffect(() => {
    console.log(active);
  }, [active]);
  return (
    <div className="h-screen w-screen bg-[#212332] flex justify-center items-center overflow-hidden">
      <Sidebar active={active} setActive={setActive} />
    </div>
  );
}
