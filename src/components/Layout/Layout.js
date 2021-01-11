import React, { memo } from "react";
import MenuBar from "../NavigationTab/MenuBar/MenuBar";
import styles from "./Layout.module.css";
import Header from "../Header/Header";
import NavigationBar from "../NavigationTab/Navigation/NavigationBar";
import { useSelector } from "react-redux";

const Layout = memo((props) => {
  const isAuth = useSelector((state) => {
    return state.auth.isAuth;
  });

  return (
    <>
      <div className={styles.Layout}>
        <NavigationBar isAuth={isAuth} />
        <Header />
        <MenuBar />
        {props.children}
      </div>
    </>
  );
});

export default Layout;
