import React, { memo } from "react";
import { useDispatch } from "react-redux";
import styles from "./Gender.module.css";
import { setGender } from "../../../../store/actions/signUp";

const gender = memo(() => {
  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.Wrapper}>
        <div className={styles.Male}>
          <label htmlFor="male" className={styles.Label}>
            <span>남자</span>
          </label>
          <input
            id="male"
            name="gender"
            type="radio"
            required
            value="male"
            onChange={({ target: { value } }) => dispatch(setGender(value))}
          />
        </div>
        <div className={styles.Female}>
          <label htmlFor="female" className={styles.Label}>
            <span>여자</span>
          </label>
          <input
            id="female"
            name="gender"
            type="radio"
            value="female"
            onChange={({ target: { value } }) => dispatch(setGender(value))}
          />
        </div>
      </div>
    </>
  );
});

export default gender;
