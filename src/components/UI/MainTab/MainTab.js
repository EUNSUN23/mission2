import React, { useState, memo, useRef, useEffect, useCallback } from "react";
import debounce from "lodash/debounce";
import styles from "./MainTab.module.css";
import { setPage } from "../../../store/actions/pagination";
import { push } from "react-router-redux";
import { useDispatch } from "react-redux";
import Tab from "../Tabs/Tab";

const MainTab = memo((props) => {
  const dispatch = useDispatch();
  let currentMainPath = useRef(props.currentMainPath);
  console.log(currentMainPath);
  const [isMainClicked, setIsMainClicked] = useState(false);

  const onNavLink = useCallback((page) => {
    dispatch(setPage(page));
    setIsMainClicked(true);
  });

  useEffect(() => {
    const routePage = debounce((path) => {
      console.log(path);
      dispatch(push(path));
    }, 500);

    isMainClicked && routePage(props.currentMainPath);
  });

  return (
    <>
      <div>
        <ul className={styles.MainTab}>
          <Tab routeTrigger={onNavLink}>page1</Tab>

          <Tab routeTrigger={onNavLink}>page2</Tab>

          <Tab routeTrigger={onNavLink}>page3</Tab>

          <Tab routeTrigger={onNavLink}>page4</Tab>
        </ul>
      </div>
    </>
  );
});

export default MainTab;
