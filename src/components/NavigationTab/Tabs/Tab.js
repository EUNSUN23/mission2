import React, { useState, useEffect, memo } from "react";
import { history } from "../../../index";
import styles from "./Tab.module.css";

const Tab = memo((props) => {
  const clickedTab = props.clickedTab;

  const [tabClassName, setTabClassName] = useState("UnClicked");
  const currentMainPath = props.currentMainPath;
  console.log("reducer상의 path : " + currentMainPath);
  console.log("history상의 path : " + history.location.pathname);

  useEffect(() => {
    if (clickedTab == props.children) {
      setTabClassName("Clicked");
    } else {
      setTabClassName("UnClicked");
    }
  }, [clickedTab]);

  return (
    <li
      onClick={() => {
        props.routeTrigger(props.children);
      }}
      className={styles[tabClassName]}
    >
      {props.children}
    </li>
  );
});

export default Tab;
