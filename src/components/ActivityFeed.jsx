import React from "react";
import styles from "../styles/ActivityFeed.module.css";

function ActivityFeed() {
  const barHeights = [
    100,
    60,
    50,
    70, // Mon
    100,
    50,
    80,
    60, // Tue
    100,
    60,
    90,
    100, // Wed
    100,
    40,
    70,
    90, // Thu
    100,
    40,
    30,
    50, // Fri
    100,
    70,
    80,
    60, // Sat
    100,
    60,
    70,
    90, // Sun
  ];

  const days = ["M", "T", "W", "T", "F", "S", "S"];

  return (
    <div className={styles.activityFeed}>
      <div className={styles.headerRow}>
        <h3 className={styles.title}>Activity</h3>
        <p className={styles.summary}>3 appointments this week</p>
      </div>

      <div className={styles.chart}>
        {barHeights.map((height, i) => (
          <div
            key={i}
            className={styles.bar}
            style={{ height: `${height}%` }}
          />
        ))}
      </div>

      <div className={styles.daysRow}>
        {days.map((day, index) => (
          <span key={index}>{day}</span>
        ))}
      </div>
    </div>
  );
}

export default ActivityFeed;
