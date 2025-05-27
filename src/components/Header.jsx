import React from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderSearch from "./HeaderSearch";
import HeaderUserBox from "./HeaderUserBox";
import styles from "../styles/Header.module.css";

const Header = ({ onToggleSidebar }) => {
  return (
    <header className={styles.header}>
      <HeaderLogo />
      <HeaderSearch />
      <HeaderUserBox />
    </header>
  );
};

export default Header;
