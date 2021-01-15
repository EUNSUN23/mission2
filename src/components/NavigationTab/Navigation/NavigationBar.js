import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/actions/auth";
import { replace } from "react-router-redux";
import styles from "./NavigationBar.module.css";

const NavigationBar = ({ isAuth }) => {
  const dispatch = useDispatch();

  const onClickAuth = () => {
    isAuth ? dispatch(logout()) : dispatch(replace("/signup"));
  };

  return (
    <div className={styles.NavigationBar}>
      {isAuth ? <span className={styles.MyPage}>My Page</span> : null}
      <span className={styles.SignIn} onClick={onClickAuth}>
        {isAuth ? "로그아웃" : "로그인"}
      </span>
    </div>
  );
};

export default React.memo(NavigationBar);
