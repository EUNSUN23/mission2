import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./MenuBar.module.css";

const MenuBar = () => {
  return (
    <ul className={styles.MenuBar}>
      <li>
        <NavLink to="/items" activeClassName={styles.Active}>
          items
        </NavLink>
      </li>
      <li>
        <NavLink to="/">part</NavLink>
      </li>
      <li>
        <NavLink to="/">part</NavLink>
      </li>
      <li>
        <NavLink to="/">part</NavLink>
      </li>
    </ul>
  );
};

export default React.memo(MenuBar);
