import React from "react";
import styles from "../styles/HeaderSearch.module.css";
import { Bell, Search } from "lucide-react";

const HeaderSearch = () => {
  return (
    <div className={styles.searchSection}>
      <div className={styles.searchInputWrapper}>
        <Search className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search..."
          className={styles.searchInput}
          disabled
        />
      </div>
      <button className={styles.bellButton}>
        <Bell size={18} />
      </button>
    </div>
  );
};

export default HeaderSearch;
