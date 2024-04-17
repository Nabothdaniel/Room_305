import React from "react";
import SideBar from "../components/SideBar";
import MainContent from "../components/MainContent";

const Dashboard = () => {
  return (
    <div className="block md:flex h-screen max-w-[1740px] mx-auto px-8">
      <SideBar />
      <MainContent />
    </div>
  );
};

export default Dashboard;
