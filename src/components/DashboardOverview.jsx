// src/components/DashboardOverview.jsx
import React from "react";
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import styles from "../styles/DashboardOverview.module.css";

const DashboardOverview = () => {
  return (
    <div className={styles.wrapper}>
      <AnatomySection />
      <HealthStatusCards />
    </div>
  );
};

export default DashboardOverview;
