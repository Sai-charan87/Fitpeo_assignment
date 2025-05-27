import React from "react";
import DashboardOverview from "./DashboardOverview";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";
import styles from "../styles/DashboardMainContent.module.css";

const DashboardMainContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <div className={styles.gridItem}>
          <DashboardOverview />
        </div>

        <div className={styles.gridItem}>
          <CalendarView />
        </div>
        <div className={styles.gridItem}>
          <ActivityFeed />
        </div>
        <div className={styles.gridItem}>
          <UpcomingSchedule />
        </div>
      </div>
    </div>
  );
};

export default DashboardMainContent;
