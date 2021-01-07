import React, { useState, useCallback, useEffect, useRef } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { push, replace } from "react-router-redux";
import MainContents from "../../PageContents/Item/MainContents";
import styles from "./Page.module.css";
import NavigationTabs from "../../NavigationTab/NavigationTabs";
import { history } from "../../../index";
import { setRoute, setContents } from "../../../store/actions/pagination";

const Page = () => {
  const [isMainClicked, setIsMainClicked] = useState(false);
  const [baseURL, setBaseURL] = useState("");
  const [isBackClicked, setIsBackClicked] = useState(false);

  let currentPath = history.location.pathname;
  console.log(currentPath);

  useEffect(() => {
    if (isBackClicked) {
      setBaseURL(currentPath.slice(6));
    }
  }, [currentPath]);

  const dispatch = useDispatch();

  let contents = useSelector((state) => {
    return state.reducer.contents;
  });

  let url = useSelector((state) => {
    return state.reducer.url;
  });

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
  };

  window.onpopstate = function (event) {
    backEventHandler();
  };

  console.log("back: ", isBackClicked, baseURL);

  if (isMainClicked || isBackClicked) {
    mainRoute = (
      <Route
        path={`/items${baseURL}`}
        render={() => (
          <MainContents
            currentPath={currentPath}
            contents={contents}
            isBackClicked={isBackClicked}
          />
        )}
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
