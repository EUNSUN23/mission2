import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { push } from "react-router-redux";
import Tab from "../../NavigationTab/Tabs/Tab";
import SubPage from "../SubPage/SubPage";
import styles from "./Page.module.css";

const Page = (props) => {
  const { currentMainPath, contents } = props;
  const [isSubClicked, setIsSubClicked] = useState(false);
  const [subClickCount, setSubClickCount] = useState(0);
  const [subPage, setSubPage] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(subClickCount);
    let mainPath = currentMainPath.slice(1);
    let endPoint = `${mainPath}/${subPage}`;
    if (subClickCount > 1) {
      endPoint = `${subPage}`;
    }
    console.log(endPoint);
    console.log(mainPath);
    isSubClicked && dispatch(push(endPoint));
  }, [subPage, currentMainPath, isSubClicked, subClickCount]);

  const onSubTabHandler = (whichSub) => {
    setIsSubClicked(true);
    setSubPage(whichSub);
    setSubClickCount(subClickCount + 1);
    console.log(isSubClicked);
  };

  const subTabs = Object.keys(contents[1]).map((subKey) => {
    return (
      <Tab
        key={subKey}
        routeTrigger={onSubTabHandler}
        currentMainPath={currentMainPath}
        clickedTab={subPage}
      >
        {subKey}
      </Tab>
    );
  });

  const subPageRoute = isSubClicked && (
    <Route
      render={() => (
        <SubPage part={subPage} contents={props.contents[1][subPage]} />
      )}
    />
  );
  return (
    <>
      <section className={styles.SubTab}>{subTabs}</section>
      <section className={styles.Container}>
        <article className={styles.MainContent}>
          <h2>{contents[0]}</h2>
          <div>
            {props.contents[0]} Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </div>
          <article className={styles.SubContent}>
            {subPageRoute || null}
          </article>
        </article>
      </section>
    </>
  );
};

export default Page;
