// src/components/DashboardMainContent.jsx
import React from "react";
import DashboardOverview from "./DashboardOverview";

import ActivityFeed from "./ActivityFeed";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import styles from "../styles/DashboardMainContent.module.css";

const DashboardMainContent = () => {
  return (
    <main className={styles.container}>
      {/* Left Column: Overview and Activity */}
      <div className={styles.column}>
        <DashboardOverview />
        <ActivityFeed />
      </div>

      {/* Right Column: Calendar and Schedule */}
      <div className={styles.column}>
        <CalendarView />
        <UpcomingSchedule />
      </div>
    </main>
  );
};

export default DashboardMainContent;
