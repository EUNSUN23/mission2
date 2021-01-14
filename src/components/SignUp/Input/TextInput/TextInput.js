import React, { memo, useState } from "react";
import useIdPw from "../../../../hooks/signUp/useIdPw";
import styles from "./TextInput.module.css";

const TextInput = memo(() => {
  const [inputValue, setInputValue] = useIdPw("");
  const [checked, setChecked] = useState(false);
  //비밀번호 : 8자리~12자리 특수기호 적어도1개+영문대소문자+숫자

  const onCheckHandler = (e) => {
    e.preventDefault();
    setChecked(true);
  };

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
          pattern="[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+"
          size="20"
          required
          onChange={setInputValue}
        />
        <button
          form="id"
          type="submit"
          onClick={(e) => {
            onCheckHandler(e);
          }}
          disabled={checked}
        >
          ID 중복체크
        </button>
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
          size="20"
          required
          onChange={setInputValue}
        />
      </div>
    </div>
  );
});

export default TextInput;
