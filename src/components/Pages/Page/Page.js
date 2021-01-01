import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { push } from "react-router-redux";
import Tab from "../../NavigationTab/Tabs/Tab";
import SubPage from "../SubPage/SubPage";
import styles from "./Page.module.css";
import debounce from "lodash/debounce";

const Page = (props) => {
  const [isSubClicked, setIsSubClicked] = useState(false);
  const [subClickCount, setSubClickCount] = useState(0);
  const [subPage, setSubPage] = useState(null);
  const dispatch = useDispatch();

  const routePage = debounce((path) => {
    dispatch(push(path));
  }, 500);

  const onSubTabHandler = (whichSub) => {
    setIsSubClicked(true);
    setSubPage(whichSub);
    setSubClickCount(subClickCount + 1);
    console.log(isSubClicked);
  };

  useEffect(() => {
    console.log(subClickCount);
    let mainPath = props.currentMainPath.slice(1);
    let endPoint = `${mainPath}/${subPage}`;
    if (subClickCount > 1) {
      endPoint = `${subPage}`;
    }

    console.log(endPoint);
    isSubClicked && routePage(endPoint);
  }, [subPage]);

  const subPageRoute = isSubClicked && (
    <Route
      path={`${props.currentMainPath}/${subPage}`}
      render={() => <SubPage contents={props.contents.subPage[subPage]} />}
    />
  );
  return (
    <>
      <section className={styles.SubTab}>
        <Tab routeTrigger={onSubTabHandler} clickedTab={subPage}>
          sub1
        </Tab>
        <Tab routeTrigger={onSubTabHandler} clickedTab={subPage}>
          sub2
        </Tab>
        <Tab routeTrigger={onSubTabHandler} clickedTab={subPage}>
          sub3
        </Tab>
      </section>
      <section className={styles.Container}>
        <article className={styles.MainContent}>
          <h2>{props.contents.page}</h2>
          <div>
            {props.contents.page} Lorem ipsum dolor sit amet, consectetur
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
