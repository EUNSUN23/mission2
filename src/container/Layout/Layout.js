import React, { memo } from "react";
import MainTab from "../../components/NavigationTab/MainTab/MainTab";
import Header from "../../components/Header/Header";

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
