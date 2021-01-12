import React, { memo, useEffect, useState } from "react";
import Modal from "../../Modal/Modal";
import useIdPw from "../../../../hooks/signUp/useIdPw";
import styles from "./TextInput.module.css";
import { useDispatch } from "react-redux";
import { setIdPw } from "../../../../store/actions/signUp";
import { debounce } from "lodash";

const TextInput = memo((props) => {
  const [inputValue, setInputValue] = useIdPw("");
  //비밀번호 : 8자리~12자리 특수기호 적어도1개+영문대소문자+숫자

  const dispatch = useDispatch();

  useEffect(() => {
    debounce(() => {
      dispatch(setIdPw(inputValue));
    }, 500);
  }, [inputValue]);

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Input}>
        <label htmlFor="id" className={styles.Label}>
          <span>아이디</span>:{" "}
        </label>
        <input
          id="id"
          type="email"
          name="email"
          value={inputValue.email}
          pattern="[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+"
          size="30"
          required
          onChange={setInputValue}
        />
      </div>
      <div className={styles.Input}>
        <label htmlFor="id" className={styles.Label}>
          <span>비밀번호</span>:{" "}
        </label>
        <input
          id="pw"
          type="password"
          name="password"
          value={inputValue.password}
          pattern="(?=.*[a-z])(?=.*[0-9])(?=.*[,~!@#$%^&*])[.a-zA-Z0-9,~!@#$%^&]{7,13}"
          size="30"
          required
          onChange={setInputValue}
        />
      </div>
      <button
        onClick={() => {
          idPwCheck();
        }}
      >
        ID 중복체크
      </button>
    </div>
  );
});

export default TextInput;
