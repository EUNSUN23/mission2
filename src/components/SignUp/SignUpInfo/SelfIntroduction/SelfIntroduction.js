import React, { memo } from "react";
import styles from "./SelfIntroduction.module.css";

import useSelfIntro from "../../../../hooks/signUp/useSelfIntro";

const selfIntroduction = memo(() => {
  const [text, setText] = useSelfIntro([]);

  return (
    <>
      <div className={styles.SelfIntroWrapper}>
        <textarea
          className={styles.Textarea}
          id="selfIntroduction"
          name="selfIntroduction"
          rows="6"
          cols="50"
          value={text.contents}
          onChange={setText}
        />
        <div className={styles.LetterCounter}>
          <span>{text.length}</span>/{6 * 50}
        </div>
      </div>
    </>
  );
});

export default selfIntroduction;
