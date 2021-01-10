import React, { useState, useCallback, useEffect, useRef } from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { push } from "react-router-redux";
import MainContents from "../../PageContents/OverView/MainContents";
import styles from "./OverView.module.css";
import NavigationTabs from "../../NavigationTab/Tabs/NavigationTabs";

const OverView = () => {
  const [isMainClicked, setIsMainClicked] = useState(false);
  const [baseURL, setBaseURL] = useState("");
  const [isBackClicked, setIsBackClicked] = useState(false);
  const [onPopstate, setOnPopState] = useState(false);

  const currentPath = useSelector((state) => {
    return state.router.location.pathname;
  });

  useEffect(() => {
    if (isBackClicked) {
      console.log(currentPath);
      const prevPath = currentPath.slice(9);
      console.log(prevPath);
      setBaseURL(prevPath);
      console.log(prevPath, "USE EFFECT");
    }
  }, [currentPath, isBackClicked]);

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
        path={`/overview${baseURL}`}
        render={() => <MainContents currentPath={currentPath} />}
      />
    );
  }
  return (
    <>
      <section className={styles.OverView}>
        <h2>OverView</h2>
        <NavigationTabs
          className={styles.NavigationTabs}
          routeTrigger={routeTrigger}
          isMainClicked={isMainClicked}
          currentPath={currentPath}
        />

        <section className={styles.Contents}>{mainRoute}</section>
      </section>
    </>
  );
};

export default React.memo(OverView);
