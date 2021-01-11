import React, { memo } from "react";
import Backdrop from "../Backdrop/Backdrop";
import styles from "./Modal.module.css";

const modal = memo((props) => {
  let errInfo;
  if (props.show) {
    errInfo = props.errInfo.map((info, idx) => {
      return <li key={`${idx}:${info}`}>{info}</li>;
    });
  }
  return (
    <>
      <Backdrop
        show={props.show}
        clicked={() => {
          props.modalClosed();
        }}
      />
      <div
        className={styles.Modal}
        onClick={() => {
          props.modalClosed();
        }}
        style={{
          opacity: props.show ? "1" : "0",
        }}
      >
        <ul>{errInfo}</ul>
      </div>
    </>
  );
});

export default modal;
