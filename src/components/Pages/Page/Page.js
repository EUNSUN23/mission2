import React, { useState, useCallback, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { push } from "react-router-redux";
import MainContents from "../../PageContents/Item/MainContents";
import SubContents from "../../PageContents/Item/SubContents";
import styles from "./Page.module.css";
import NavigationTabs from "../../NavigationTab/NavigationTabs";
import { history } from "../../../index";

const Page = () => {
  const [isMainClicked, setIsMainClicked] = useState(false);
  const [baseURL, setBaseURL] = useState("");
  const currentPath = history.location.pathname;
  console.log(currentPath);

  const contents = useSelector((state) => {
    return state.reducer.contents;
  });

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

  mainRoute = isMainClicked && (
    <Route
      path={`/items${baseURL}`}
      render={() => (
        <MainContents currentPath={currentPath} contents={contents} />
      )}
    />
  );

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
