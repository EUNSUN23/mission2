import React, { useEffect, useState, memo, useRef } from "react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { push } from "react-router-redux";
import SubTab from "../../UI/SubTab/SubTab";
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
      <SubTab show={true} onClickHandler={onSubTabHandler}></SubTab>
      <section>
        <article className={styles.MainContent}>
          <h2>{props.contents.page}</h2>
          <div>{props.contents.page} content</div>
          <article className={styles.SubContent}>
            {subPageRoute || null}
          </article>
        </article>
      </section>
    </>
  );
};

export default Page;
