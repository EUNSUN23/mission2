import React, { memo, useEffect } from "react";
import styles from "./SelfIntroduction.module.css";
import { debounce } from "lodash";
import { useDispatch } from "react-redux";
import { setSelfIntro } from "../../../../store/actions/signUp";
import useSelfIntro from "../../../../hooks/signUp/useSelfIntro";

const selfIntroduction = memo(() => {
  const [text, setText] = useSelfIntro([]);
  const dispatch = useDispatch();

  useEffect(() => {
    debounce(() => {
      dispatch(setSelfIntro(text));
    }, 500);
  }, [text]);

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
