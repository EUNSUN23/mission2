import React, { useState, memo, useRef, useEffect } from "react";
import debounce from "lodash/debounce";
import styles from "./MainTab.module.css";
import { setPage } from "../../../store/actions/pagination";
import { push } from "react-router-redux";
import { useDispatch } from "react-redux";
import { history } from "../../../index";

const MainTab = (props) => {
  const dispatch = useDispatch();
  let currentMainPath = useRef(props.currentMainPath);
  console.log(currentMainPath);
  const [isMainClicked, setIsMainClicked] = useState(false);

  const onNavLink = (page) => {
    dispatch(setPage(page));
    setIsMainClicked(true);
  };

  useEffect(() => {
    const routePage = debounce((path) => {
      console.log(path);
      dispatch(push(path));
    }, 500);

    isMainClicked && routePage(props.currentMainPath);
  });

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
