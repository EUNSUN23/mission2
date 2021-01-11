import React, { memo } from "react";
import styles from "./Button.module.css";

const button = memo((props) => {
  const onCancel = (value) => {
    props.onCancel(value);
  };

  const onSubmit = (event) => {
    props.onSubmit(event);
  };

  return (
    <>
      <div className={styles.Wrapper}>
        <div className={styles.Buttons}>
          <button
            name="Cancel"
            className={styles.Button}
            onClick={() => {
              onCancel();
            }}
          >
            취소
          </button>
          <button
            name="Submit"
            className={styles.Button}
            onClick={(e) => {
              onSubmit(e);
            }}
          >
            가입완료
          </button>
        </div>
      </div>
    </>
  );
});

export default button;
