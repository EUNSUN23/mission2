import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./MainTab.module.css";

const MainTab = () => {
  return (
    <>
      <div>
        <ul className={styles.MainTab}>
          <li>
            <NavLink to="/page1">page1</NavLink>
          </li>
          <li>
            <NavLink to="/page2">page2</NavLink>
          </li>
          <li>
            <NavLink to="/page3">page3</NavLink>
          </li>
          <li>
            <NavLink to="/page4">page4</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MainTab;
