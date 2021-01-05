import React, { useState, useCallback, useEffect } from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { push } from "react-router-redux";
import MainContents from "../../PageContents/Item/MainContents";
import SubContents from "../../PageContents/Item/SubContents";
import styles from "./Page.module.css";
import NavigationTabs from "../../NavigationTab/NavigationTabs";
import { history } from "../../../index";

const Page = () => {
  const [isMainClicked, setIsMainClicked] = useState(false);
  const [isSubClicked, setIsSubClicked] = useState(false);
  const currentPath = history.location.pathname;
  console.log(currentPath);

  const mainContents = useSelector((state) => {
    return state.reducer.mainContents;
  });

  const subContents = useSelector((state) => {
    return state.reducer.subContents;
  });

  const dispatch = useDispatch();

  const routeTrigger = useCallback(
    (path) => {
      dispatch(push(`${currentPath}${path}`));
    },
    [dispatch]
  );

  const setMainTab = () => {
    setIsMainClicked((prevMainClicked) => !prevMainClicked);
  };

  const setSubTab = () => {
    setIsSubClicked((prevSubClicked) => !prevSubClicked);
  };

  const mainRoute = isMainClicked && (
    <Route
      path={`${currentPath}`}
      render={() => <MainContents contents={mainContents} />}
    />
  );

  const subRoute = isSubClicked && (
    <Route
      path={`${currentPath}`}
      render={() => <SubContents contents={subContents} />}
    />
  );

  return (
    <>
      <section className={styles.NavigationTabs}>
        <NavigationTabs
          routeTrigger={routeTrigger}
          setSubTab={setSubTab}
          setMainTab={setMainTab}
        />
      </section>
      <section className={styles.Contents}>
        <article className={styles.MainContent}>{mainRoute || null}</article>
        <article className={styles.SubContent}>{subRoute || null}</article>
      </section>
    </>
  );
};

export default Page;
