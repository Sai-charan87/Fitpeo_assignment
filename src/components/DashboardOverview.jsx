import React from "react";
import { ChevronDown } from "lucide-react";
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import styles from "../styles/DashboardOverview.module.css";

const DashboardOverview = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.title}>Dashboard</h2>
        <div className={styles.timeFilter}>
          <span>This Week</span>
          <ChevronDown size={16} />
        </div>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.leftColumn}>
          <AnatomySection />
        </div>
        <div className={styles.rightColumn}>
          <HealthStatusCards />
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
