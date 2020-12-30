import React from "react";
import styles from "./Header.module.css";
import { useDispatch } from "react-redux";
import { setPage } from "../../store/actions/pagination";
import { push } from "connected-react-router";

const Header = (props) => {
  const dispatch = useDispatch();

  const onClickHeader = () => {
    dispatch(setPage(""));
    dispatch(push("/"));
  };
  return (
    <>
      <header
        className={styles.Header}
        onClick={() => {
          onClickHeader();
        }}
      >
        Welcome to my first app!
      </header>
    </>
  );
};

export default Header;
