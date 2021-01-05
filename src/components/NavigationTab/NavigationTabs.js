import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import pageData from "../../data/contentData.json";
import {
  setMainContents,
  setSubContents,
  setRoute,
} from "../../store/actions/pagination";
import { history } from "../../index";
import Tab from "./Tabs/Tab";

const NavigationTabs = (props) => {
  const { isMainClicked, isSubClicked, routeTrigger } = props;

  const [path, setPath] = useState();
  const [mainPage, setMainPage] = useState("");
  const dispatch = useDispatch();

  const onMainTabHandler = (page, path, contents) => {
    setMainPage(page);
    setPath(path);
    dispatch(setRoute(path));
    dispatch(setMainContents(contents));
  };

  const onSubTabHandler = (path, contents) => {
    setPath(path);
    dispatch(setRoute(path));
    dispatch(setSubContents(contents));
  };

  useEffect(() => {
    routeTrigger(path);
  }, [path, routeTrigger]);

  const mainTabs = Object.keys(pageData).map((pageKey) => {
    return (
      <Tab
        key={pageKey}
        isClicked={isMainClicked}
        onClickHandler={() =>
          onMainTabHandler(
            pageKey,
            pageData[pageKey][0][1],
            pageData[pageKey][0][0]
          )
        }
        currentLocation={history.location.pathname}
      >
        {pageKey}
      </Tab>
    );
  });

  const subDataArr = isMainClicked && pageData[mainPage][1];

  const subTabs =
    isMainClicked &&
    subDataArr.map((subPage) => {
      return (
        <Tab
          key={`${mainPage}-${subPage}`}
          url={subDataArr[2]}
          isClicked={isSubClicked}
          onClickHandler={() => onSubTabHandler(subDataArr[1], subDataArr[2])}
          currentLocation={history.location.pathname}
        >
          {subPage}
        </Tab>
      );
    });

  return (
    <section className="NavigationTabs">
      {mainTabs}
      {subTabs}
    </section>
  );
};

export default NavigationTabs;
