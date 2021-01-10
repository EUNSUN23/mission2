import React, { memo } from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = memo((props) => {
  return (
    <>
      <header>
        <NavLink to="/" className={styles.Header}>
          Welcome to my first app!
        </NavLink>
      </header>
    </>
  );
});

export default Header;
