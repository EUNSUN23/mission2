import React, { useState, useEffect, memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import pageData from "../../../data/contentData.json";
import { history } from "../../../index";
import Tab from "./Tab";
import styles from "./NavigationTabs.module.css";

const NavigationTabs = memo((props) => {
  const { routeTrigger, isMainClicked } = props;
  const [isClicked, setIsClicked] = useState(false);
  const [path, setPath] = useState();
  const [mainPage, setMainPage] = useState("");
  const currentPath = useSelector((state) => {
    return state.router.location.pathname;
  });

  const mainTabKey = Object.keys(pageData);

  const subTabKey = mainPage && pageData[mainPage][1];
  const dispatch = useDispatch();

  useEffect(() => {
    routeTrigger(path);
  }, [path, routeTrigger, currentPath, isMainClicked]);

  const onMainTabHandler = useCallback(
    (page, path) => {
      setMainPage(page);
      setPath(path);
      setIsClicked(true);
    },
    [mainPage, path]
  );

  const onSubTabHandler = useCallback(
    (path) => {
      setPath(path);
      setIsClicked(true);
    },
    [path]
  );

  console.log(mainTabKey);

  const mainTabs = mainTabKey.map((mainKey) => {
    console.log(mainKey);
    return (
      <Tab
        key={mainKey}
        url={pageData[mainKey][0][0]}
        currentPath={currentPath}
        onClickHandler={() => {
          onMainTabHandler(mainKey, pageData[mainKey][0][0]);
        }}
        isClicked={isClicked}
      >
        {mainKey}
      </Tab>
    );
  });

  console.log(isMainClicked);

  let subTabs = [];

  if (isMainClicked && mainPage) {
    for (let key in subTabKey) {
      console.log(subTabKey[key][0]);
      subTabs.push(
        <Tab
          key={`${mainPage}-${key}`}
          url={subTabKey[key][0]}
          currentPath={currentPath}
          onClickHandler={() => {
            onSubTabHandler(`/${mainPage}${subTabKey[key][0]}`);
          }}
          isClicked={isClicked}
        >
          {`${mainPage}-${key}`}
        </Tab>
      );
    }
  }

  return (
    <section className="NavigationTabs">
      <ul className={styles.MainTabs}>{mainTabs}</ul>
      <ul className={styles.SubTabs}>{subTabs}</ul>
    </section>
  );
});

export default NavigationTabs;
