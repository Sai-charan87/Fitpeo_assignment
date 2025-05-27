import React from "react";
import styles from "../styles/Sidebar.module.css";
import {
  LayoutDashboard,
  History,
  CalendarDays,
  ClipboardList,
  BarChart,
  FlaskConical,
  MessageCircle,
  LifeBuoy,
  Settings,
} from "lucide-react";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.topSection}>
        <h3 className={styles.sectionTitle}>General</h3>
        <nav className={styles.nav}>
          <a href="#" title="Dashboard">
            <LayoutDashboard className={styles.icon} />
            <span>Dashboard</span>
          </a>
          <a href="#" title="History">
            <History className={styles.icon} />
            <span>History</span>
          </a>
          <a href="#" title="Calendar">
            <CalendarDays className={styles.icon} />
            <span>Calendar</span>
          </a>
          <a href="#" title="Appointments">
            <ClipboardList className={styles.icon} />
            <span>Appointments</span>
          </a>
          <a href="#" title="Statistics">
            <BarChart className={styles.icon} />
            <span>Statistics</span>
          </a>
          <a href="#" title="Tests">
            <FlaskConical className={styles.icon} />
            <span>Tests</span>
          </a>
        </nav>

        <h3 className={styles.sectionTitle}>Tools</h3>
        <nav className={styles.nav}>
          <a href="#" title="Chat">
            <MessageCircle className={styles.icon} />
            <span>Chat</span>
          </a>
          <a href="#" title="Support">
            <LifeBuoy className={styles.icon} />
            <span>Support</span>
          </a>
        </nav>
      </div>

      <div className={styles.bottomSection}>
        <a href="#" className={styles.bottomLink} title="Settings">
          <Settings className={styles.icon} />
          <span>Setting</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
