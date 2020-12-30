import React from "react";
import styles from "./SubTab.module.css";

const SubTab = (props) => {
  return (
    <div className={styles.Wrapper}>
      <ul className={styles.SubTab}>
        <li>
          <span
            onClick={() => {
              props.onClickHandler("sub1");
            }}
          >
            sub1
          </span>
        </li>
        <li>
          <span
            onClick={() => {
              props.onClickHandler("sub2");
            }}
          >
            sub2
          </span>
        </li>
        <li>
          <span
            onClick={() => {
              props.onClickHandler("sub3");
            }}
          >
            sub3
          </span>
        </li>
      </ul>
    </div>
  );
};

export default SubTab;
