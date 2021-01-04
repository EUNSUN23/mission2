import React, { useState, memo, useEffect, useCallback } from "react";
import styles from "./MainTab.module.css";
import { setPage, setRoute } from "../../../store/actions/pagination";
import { history } from "../../../index";
import { useDispatch, useSelector } from "react-redux";
import Tab from "../Tabs/Tab";
import pageData from "../../../data/contentData";

const MainTab = (props) => {
  const [isMainClicked, setIsMainClicked] = useState(false);
  const [clickedTab, setClickedTab] = useState("");
  const currentMainPath = props.currentMainPath;
  const dispatch = useDispatch();

  const currentContent = useSelector((state) => {
    return state.reducer.contents;
  });

  const currentURL = useSelector((state) => {
    return state.reducer.url;
  });

  console.log("render", currentContent, currentURL);

  useEffect(() => {
    console.log(currentContent);
    console.log(currentURL);
    isMainClicked && history.push(currentURL);
  });

  const onNavLink = useCallback(
    (page) => {
      dispatch(setPage(page));

      dispatch(setRoute(page));

      setIsMainClicked(true);
      setClickedTab(page);
      console.log(currentContent);
      console.log(currentURL);
    },
    [currentMainPath]
  );

  const mainTabs = Object.keys(pageData)
    .filter((key) => {
      return key !== "home";
    })
    .map((pageKey) => {
      return (
        <Tab
          key={pageKey}
          routeTrigger={onNavLink}
          currentMainPath={currentMainPath}
          clickedTab={clickedTab}
        >
          {pageKey}
        </Tab>
      );
    });
  return (
    <>
      <div>
        <ul className={styles.MainTab}>{mainTabs}</ul>
      </div>
    </>
  );
};

export default MainTab;
