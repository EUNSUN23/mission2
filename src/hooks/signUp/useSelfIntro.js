import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSelfIntro } from "../../store/actions/signUp";

const useSelfIntro = (initText) => {
  const [contents, setContents] = useState(initText);
  const [length, setLength] = useState(0);
  const dispatch = useDispatch();

  const onTextareaHandler = (e) => {
    const { value } = e.target;

    if (value.length >= 0 && value.length < 300) {
      setContents(value);
      setLength(value.length);
      dispatch(setSelfIntro(value));
    } else {
      setContents(value.substring(0, 299));
      setLength(value.length);
      dispatch(setSelfIntro(value));
    }
  };

  return [{ contents: contents, length: length }, onTextareaHandler];
};

export default useSelfIntro;
