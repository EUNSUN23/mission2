import React, { memo } from "react";
import MenuBar from "../NavigationTab/MenuBar/MenuBar";
import styles from "./Layout.module.css";
import Header from "../Header/Header";
import NavigationBar from "../NavigationTab/Navigation/NavigationBar";

const Layout = memo((props) => {
  return (
    <>
      <div className={styles.Layout}>
        <NavigationBar isAuth={props.isAuth} />
        <Header />
        <MenuBar />
        {props.children}
      </div>
    </>
  );
});

export default Layout;
