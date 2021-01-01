import React, { memo } from "react";
import MainTab from "../NavigationTab/MainTab/MainTab";
import Header from "../Header/Header";

const Layout = memo((props) => {
  return (
    <>
      <Header currentMainPath={props.currentMainPath} />
      <MainTab currentMainPath={props.currentMainPath} />

      {props.children}
    </>
  );
});

export default Layout;
