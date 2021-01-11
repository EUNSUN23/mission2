import React, { memo } from "react";
import styles from "./SelfIntroduction.module.css";

const selfIntroduction = memo((props) => {
  const onChange = (value) => {
    props.onChange(value);
  };

  const rows = "6";
  const cols = "50";

  return (
    <>
      <div className={styles.SelfIntroWrapper}>
        <textarea
          className={styles.Textarea}
          id="selfIntroduction"
          name="slefIntroduction"
          rows={rows}
          cols={cols}
          value={props.value}
          onChange={(e) => {
            onChange(e.target.value);
          }}
        />
        <div className={styles.LetterCounter}>
          <span>{props.charLength}</span>/{rows * cols}
        </div>
      </div>
    </>
  );
});

export default selfIntroduction;
