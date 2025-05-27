import React from "react";
import styles from "../styles/HeaderLogo.module.css";

const HeaderLogo = () => {
  return (
    <div className={styles.logoBox}>
      <span className={styles.health}>Health</span>
      <span className={styles.care}>care.</span>
    </div>
  );
};

export default HeaderLogo;
