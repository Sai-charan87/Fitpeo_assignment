import React from "react";
import styles from "../styles/HeaderUserBox.module.css";

const HeaderUserBox = () => {
  return (
    <div className={styles.userContainer}>
      <img
        src="https://i.pravatar.cc/32"
        alt="User"
        className={styles.avatar}
      />
      <span className={styles.userName}>John</span>
      <button className={styles.addButton}>+</button>
    </div>
  );
};

export default HeaderUserBox;
