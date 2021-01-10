import React, { memo } from "react";
import MenuBar from "../NavigationTab/MenuBar/MenuBar";
import styles from "./Layout.module.css";
import Header from "../Header/Header";

const Layout = memo((props) => {
  return (
    <>
      <div className={styles.Layout}>
        <Header />
        <MenuBar />
        {props.children}
      </div>
    </>
  );
});

export default Layout;
