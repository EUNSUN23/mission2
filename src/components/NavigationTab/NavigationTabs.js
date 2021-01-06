import React, { useState, useEffect, memo } from "react";
import { useDispatch } from "react-redux";
import pageData from "../../data/contentData.json";
import { setContents, setRoute } from "../../store/actions/pagination";
import { history } from "../../index";
import Tab from "./Tabs/Tab";

const NavigationTabs = memo((props) => {
  const {
    isMainClicked,

    routeTrigger,

    currentPath,
  } = props;

  const [path, setPath] = useState();
  const [mainPage, setMainPage] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    routeTrigger(path);
  }, [path, routeTrigger, currentPath, isMainClicked]);

  const onMainTabHandler = (page, path, contents) => {
    setMainPage(page);
    setPath(path);

    dispatch(setRoute(`${currentPath}${path}`));
    dispatch(setContents(contents));
  };

  const onSubTabHandler = (path) => {
    setPath(path);
    dispatch(setRoute(`${currentPath}${path}`));
  };

  const mainTabs = Object.keys(pageData).map((pageKey) => {
    return (
      <Tab
        key={pageKey}
        url={"/items" + pageData[pageKey][0][1]}
        currentLocation={history.location.pathname}
        onClickHandler={() => {
          onMainTabHandler(pageKey, pageData[pageKey][0][1], pageData[pageKey]);
        }}
      >
        {pageKey}
      </Tab>
    );
  });

  console.log(isMainClicked);

  let subTabs = null;
  if (isMainClicked && mainPage) {
    const subDataArr = pageData[mainPage][1];
    subTabs = subDataArr.map((subData) => {
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
