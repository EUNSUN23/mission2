import React, { useState, useEffect, useCallback, memo } from "react";

import styles from "./Tab.module.css";

const Tab = (props) => {
  const { isClicked, currentLocation, url, onClickHandler } = props;

  const setClassName = useCallback(() => {
    if (isClicked && currentLocation.includes(url)) {
      return "Clicked";
    } else {
      return "UnClicked";
    }
  }, [currentLocation, url, isClicked]);

  return (
    <li
      onClick={() => {
        onClickHandler();
      }}
      className={styles[setClassName()]}
    >
      {props.children}
    </li>
  );
};

export default Tab;
