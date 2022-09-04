import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [isLoading, setisLoading] = useState(true);
  const [dashboardData, setdashboardData] = useState(null);
  useEffect(() => {
    async function fetchDashBoardData() {
      const response = await fetch("http://localhost:4000/dashboard");
      const data = await response.json();
      setdashboardData(data);
      setisLoading(false);
    }
    fetchDashBoardData();
  }, []);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <h2>Dashboard</h2>
      <h2>Posts - {dashboardData.posts}</h2>
      <h2>Likes - {dashboardData.likes}</h2>
      <h2>Followers - {dashboardData.followers}</h2>
      <h2>Following - {dashboardData.following}</h2>
    </div>
  );
};

export default Dashboard;
