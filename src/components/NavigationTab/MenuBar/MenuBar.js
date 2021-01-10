import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./MenuBar.module.css";

const MenuBar = () => {
  return (
    <div className={styles.MenuBar}>
      <NavLink
        to="/intro"
        className={styles.inActive}
        activeClassName={styles.Active}
      >
        Intro
      </NavLink>

      <NavLink
        to="/overview"
        className={styles.inActive}
        activeClassName={styles.Active}
      >
        OverView
      </NavLink>

      <NavLink
        to="/community"
        className={styles.inActive}
        activeClassName={styles.Active}
      >
        Community
      </NavLink>

      <NavLink
        to="/notice"
        className={styles.inActive}
        activeClassName={styles.Active}
      >
        Notice
      </NavLink>
    </div>
  );
};

export default MenuBar;
