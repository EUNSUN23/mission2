import React, { useState, useEffect, memo } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Tab.module.css";

const Tab = memo((props) => {
  const location = useLocation();
  console.log(location);
  const [isClicked, setIsClicked] = useState(false);
  const [tabClassName, setTabClassName] = useState("UnClicked");

  const tabClickHandler = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    if (isClicked) {
      setTabClassName("Clicked");
    } else {
      setTabClassName("UnClicked");
    }
  }, [isClicked]);
  return (
    <li
      onClick={() => {
        tabClickHandler();
        props.routeTrigger(props.children);
      }}
      className={styles[tabClassName]}
    >
      {props.children}
    </li>
  );
});

export default Tab;
