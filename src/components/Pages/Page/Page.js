import React, { useState, useCallback, useEffect, useRef } from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { push } from "react-router-redux";
import MainContents from "../../PageContents/Item/MainContents";
import styles from "./Page.module.css";
import NavigationTabs from "../../NavigationTab/NavigationTabs";
import { history } from "../../../index";
import { setRoute, setContents } from "../../../store/actions/pagination";

const Page = () => {
  const [isMainClicked, setIsMainClicked] = useState(false);
  const [baseURL, setBaseURL] = useState("");
  const [isBackClicked, setIsBackClicked] = useState(false);
  const [onPopstate, setOnPopState] = useState(false);

  let currentPath = history.location.pathname;
  console.log(currentPath);

  useEffect(() => {
    if (isBackClicked) {
      const prevPath = currentPath.slice(6);
      setBaseURL(prevPath);
      console.log(prevPath, "USE EFFECT");
    }
  }, [currentPath, onPopstate]);

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

  const backEventHandler = () => {
    setIsBackClicked(true);
    setOnPopState(!onPopstate);
  };

  window.onpopstate = function (event) {
    backEventHandler();
  };

  console.log("back: ", isBackClicked, baseURL);

  if (isMainClicked || isBackClicked) {
    mainRoute = (
      <Route
        path={`/items${baseURL}`}
        render={() => <MainContents currentPath={currentPath} />}
      />
    );
  }

  console.log("MAIN ROUTE: ", mainRoute);

  return (
    <>
      <section className={styles.NavigationTabs}>
        <NavigationTabs
          routeTrigger={routeTrigger}
          isMainClicked={isMainClicked}
        />
      </section>
      <section className={styles.Contents}>{mainRoute}</section>
    </>
  );
};

export default React.memo(Page);
