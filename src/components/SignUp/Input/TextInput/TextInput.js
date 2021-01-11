import React, { memo } from "react";
import Modal from "../../Modal/Modal";

import styles from "./TextInput.module.css";

const TextInput = memo((props) => {
  const inputElement = [];

  const idCheckHandler = (event) => {
    props.onIdChecker(event);
  };

  Object.keys(props.config).map((inputKey, idx) => {
    let borderCss = "#b6b6b6";
    if (props.config[inputKey].type) {
      if (props.config[inputKey].border) {
        borderCss = props.config[inputKey].border;
      }
      inputElement.push({
        id: inputKey,
        el: props.config[inputKey],
        name: props.config[inputKey].name[1],
        border: borderCss,
      });
    }
  });

  return (
    <div className={styles.Wrapper}>
      {inputElement.map((inputEl, i) => {
        return (
          <div key={inputEl.id} className={styles.Input}>
            <label htmlFor={inputEl.id} className={styles.Label}>
              <span>{inputEl.name}</span>:{" "}
            </label>
            <input
              style={{ border: `1px solid ${inputEl.border}` }}
              id={inputEl.id}
              type={inputEl.el.type}
              value={inputEl.el.value}
              title={inputEl.el.title}
              onChange={(e) => {
                console.log(inputEl.isPattern);
                props.onChange(e.target.value, inputEl.id);
              }}
            />
          </div>
        );
      })}
      <button
        onClick={(event) => {
          idCheckHandler(event);
        }}
        disabled={props.isChecked}
      >
        ID 중복체크
      </button>
    </div>
  );
});

export default TextInput;
