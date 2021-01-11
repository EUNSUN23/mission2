import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavigationBar.module.css";

const NavigationBar = ({ isAuth }) => {
  return (
    <div className={styles.NavigationBar}>
      <NavLink
        className={styles.inActive}
        activeClassName={styles.Active}
        to="/signUp"
      >
        {isAuth ? "로그아웃" : "회원가입"}
      </NavLink>
    </div>
  );
};

export default React.memo(NavigationBar);
