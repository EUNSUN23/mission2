import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { push } from "react-router-redux";
import SubTab from "../../UI/SubTab/SubTab";
import SubPage from "../SubPage/SubPage";
import styles from "./Page.module.css";

const Page = (props) => {
  const [isSubClicked, setIsSubClicked] = useState(false);
  const [subPage, setSubPage] = useState(null);
  const dispatch = useDispatch();

  const onSubTabHandler = (endPoint) => {
    setIsSubClicked(true);
    setSubPage(endPoint);
  };

  useEffect(() => {
    isSubClicked && dispatch(push(`${props.currentPath}/${subPage}`));
  }, [subPage]);

  const subPageRoute = isSubClicked && (
    <Route
      path={`${props.currentPath}/${subPage}`}
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
