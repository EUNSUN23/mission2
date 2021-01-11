import React, { memo } from "react";
import styles from "./Gender.module.css";

const gender = memo((props) => {
  const onChangeHandler = (value) => {
    props.onChange(value);
  };
  console.log(props.value);
  return (
    <>
      <div className={styles.Wrapper}>
        <div className={styles.Male}>
          <label htmlFor="male" className={styles.Label}>
            <span>남자</span>
          </label>
          <input
            id="male"
            type="radio"
            value="male"
            checked={props.value === "male"}
            onChange={(e) => {
              onChangeHandler(e.target.value);
            }}
          />
        </div>
        <div className={styles.Female}>
          <label htmlFor="female" className={styles.Label}>
            <span>여자</span>
          </label>
          <input
            id="female"
            type="radio"
            value="female"
            checked={props.value === "female"}
            onChange={(e) => {
              onChangeHandler(e.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
});

export default gender;
