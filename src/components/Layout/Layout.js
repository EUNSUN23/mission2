import React, { memo } from "react";

import MenuBar from "../NavigationTab/MenuBar/MenuBar";

import Header from "../Header/Header";

const Layout = memo((props) => {
  return (
    <>
      <Header />
      <MenuBar />
      {props.children}
    </>
  );
});

export default Layout;
