import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return <h1 data-testid="heading" className={styles.title}>Ticket Tracker</h1>;
};

export default Header;
