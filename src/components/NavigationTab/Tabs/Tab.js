import React, { useState, useEffect } from "react";
import styles from "./Tab.module.css";

const Tab = (props) => {
  const { url, onClickHandler, isClicked, currentPath } = props;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log(currentPath, url);
    if (isClicked && currentPath.includes(url)) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [isClicked, url, currentPath]);

  return (
    <li
      onClick={() => {
        onClickHandler();
      }}
      className={open ? styles.Clicked : styles.UnClicked}
    >
      {props.children}
    </li>
  );
};

export default React.memo(Tab);
