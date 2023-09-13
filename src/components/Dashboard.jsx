import React from "react";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="mt-8 py-2">
      <Outlet />
    </div>
  );
};

export default Dashboard;
