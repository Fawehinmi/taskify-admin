import React from "react";
import { ApMainLayout } from "../layouts/main";
import DashboardPage from "../modules/dashboard/page";
const dashboardPage = () => {
  return (
    <ApMainLayout>
      <DashboardPage />
    </ApMainLayout>
  );
};

export default dashboardPage;
