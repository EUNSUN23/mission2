import React, { useState, useCallback, useEffect, useRef } from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { push } from "react-router-redux";
import MainContents from "../../PageContents/Item/MainContents";
import styles from "./Page.module.css";
import NavigationTabs from "../../NavigationTab/Tabs/NavigationTabs";
import { history } from "../../../index";

const Page = () => {
  const [isMainClicked, setIsMainClicked] = useState(false);
  const [baseURL, setBaseURL] = useState("");
  const [isBackClicked, setIsBackClicked] = useState(false);
  const [onPopstate, setOnPopState] = useState(false);

  let currentPath = useSelector((state) => {
    return state.router.location.pathname;
  });

  useEffect(() => {
    if (isBackClicked) {
      const prevPath = currentPath.slice(6);
      console.log(prevPath);
      setBaseURL(prevPath);
      console.log(prevPath, "USE EFFECT");
    }
  }, [currentPath]);

  const dispatch = useDispatch();

  const routeTrigger = useCallback(
    (path) => {
      setIsMainClicked(!isMainClicked);
      setBaseURL(path);
      dispatch(push(`${currentPath}${path || ""}`));
    },
    [dispatch]
  );

  let mainRoute = null;

  const backEventHandler = useCallback(() => {
    setIsBackClicked(true);
    setOnPopState(!onPopstate);
  }, []);

  window.onpopstate = function (event) {
    backEventHandler();
  };

  console.log(isMainClicked, isBackClicked);

  if (isMainClicked || isBackClicked) {
    mainRoute = (
      <Route
        path={`/items${baseURL}`}
        render={() => <MainContents currentPath={currentPath} />}
      />
    );
  }

  return (
    <>
      <section className={styles.NavigationTabs}>
        <NavigationTabs
          routeTrigger={routeTrigger}
          isMainClicked={isMainClicked}
          currentPath={currentPath}
        />
      </section>
      <section className={styles.Contents}>{mainRoute}</section>
    </>
  );
};

export default React.memo(Page);
