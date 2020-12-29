import React from "react";
import styles from "./Header.module.css";
import { connect } from "react-redux";
import { routePage } from "../../store/actions/pagination";
import { push } from "connected-react-router";

const header = (props) => {
  return (
    <>
      <header className={styles.Header} onClick={props.onClickHeader}>
        Welcome to my first app!
      </header>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickHeader: () => {
      dispatch(routePage(""));
      dispatch(push("/"));
    },
  };
};

export default connect(null, mapDispatchToProps)(header);
