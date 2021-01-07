import React, { useState, useEffect, memo, useRef } from "react";
import { useDispatch } from "react-redux";
import { replace } from "react-router-redux";
import pageData from "../../data/contentData.json";
import { setContents, setRoute } from "../../store/actions/pagination";
import { history } from "../../index";
import Tab from "./Tabs/Tab";

const NavigationTabs = memo((props) => {
  const { routeTrigger, currentPath, isMainClicked } = props;

  const [path, setPath] = useState();
  const [mainPage, setMainPage] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    routeTrigger(path);
  }, [path, routeTrigger, currentPath, isMainClicked]);

  const onMainTabHandler = (page, path) => {
    setMainPage(page);
    setPath(path);
    dispatch(setRoute(`${currentPath}${path}`));
  };

  const onSubTabHandler = (path) => {
    setPath(path);
    dispatch(setRoute(`${currentPath}${path}`));
  };

  const mainTabs = Object.keys(pageData).map((pageKey) => {
    return (
      <Tab
        key={pageKey}
        url={"/items" + pageData[pageKey][0][0]}
        currentLocation={history.location.pathname}
        onClickHandler={() => {
          onMainTabHandler(pageKey, pageData[pageKey][0][0]);
        }}
      >
        {pageKey}
      </Tab>
    );
  });

  console.log(isMainClicked);

  let subTabs = null;
  if (isMainClicked && mainPage) {
    const subData = pageData[mainPage][1];
    subTabs = subData.map((sub) => {
      const subPage = subData[0];
      const subKey = subData[2];
      return (
        <Tab
          key={`${mainPage}-${subPage}`}
          url={subDataArr[2]}
          currentLocation={history.location.pathname}
          onClickHandler={() => {
            onSubTabHandler(subKey);
          }}
        >
          {`${mainPage}-${subPage}`}
        </Tab>
      );
    });
  }

  return (
    <section className="NavigationTabs">
      {mainTabs}
      {subTabs}
    </section>
  );
});

export default NavigationTabs;
