import MainLayout from "@/components/MainLayout";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";
import { Dashboard, Document, Profile, Settings } from "@/components/sections";

export default function Home() {
  const [active, setActive] = useState("Dashboard");

  const getActiveState = () => {
    if (active === "Dashboard") return <Dashboard />;
    if (active === "Document") return <Document />;
    if (active === "Profile") return <Profile />;
    if (active === "Settings") return <Settings />;
  };

  return (
    <div className="h-screen font-pops w-screen bg-[#212332] flex justify-center items-center overflow-hidden">
      <Sidebar active={active} setActive={setActive} />
      <MainLayout>{getActiveState()}</MainLayout>
    </div>
  );
}
