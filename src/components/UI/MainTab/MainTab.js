import React from "react";

import styles from "./MainTab.module.css";
import { setPage } from "../../../store/actions/pagination";
import { push } from "react-router-redux";
import { useDispatch } from "react-redux";
import { history } from "../../../index";

const MainTab = () => {
  const currentPath = history.location.pathname;
  const dispatch = useDispatch();

  const onNavLink = (page) => {
    dispatch(setPage(page));
    dispatch(push(page));
  };

  return (
    <>
      <div>
        <ul className={styles.MainTab}>
          <li>
            <span
              onClick={() => {
                onNavLink("page1");
              }}
            >
              page1
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                onNavLink("page2");
              }}
            >
              page2
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                onNavLink("page3");
              }}
            >
              page3
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                onNavLink("page4");
              }}
            >
              page4
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MainTab;
