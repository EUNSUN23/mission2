import React from "react";
import { Router, NavLink } from "react-router-dom";
import List from "../../Lists/List";

import styles from "./SubTab.module.css";

const SubTab = (props) => {
  const setClassName = (isShow) => {
    const className = isShow ? "Wrapper" : "WrapperInvisible";
    return className;
  };

  const onSubTabHandler = (event) => {
    console.log(event.target);
  };

  return (
    <div className={styles.Wrapper}>
      <ul className={styles.SubTab}>
        <li>
          <NavLink to={props.curMainPath + "/subPage/sub1"}>sub1</NavLink>
        </li>
        <li>
          <NavLink to={props.curMainPath + "/subPage/sub2"}>sub2</NavLink>
        </li>
        <li>
          <NavLink to={props.curMainPath + "/subPage/sub3"}>sub3</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SubTab;
