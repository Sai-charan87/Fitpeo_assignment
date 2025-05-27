import React from "react";
import styles from "../styles/HeaderSearch.module.css";
import { Bell, Search } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

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
        <FontAwesomeIcon icon={faBell} style={{ color: "#3734a9" }} />
      </button>
    </div>
  );
};

export default HeaderSearch;
