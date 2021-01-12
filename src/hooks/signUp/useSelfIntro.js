import { useState } from "react";

const useSelfIntro = (initText) => {
  const [contents, setContents] = useState(initText);
  const [length, setLength] = useState(0);

  const onTextareaHandler = (e) => {
    const { value } = e.target;

    if (value.length >= 0 && value.length < 300) {
      setContents([value]);
      setLength(value.length);
    } else {
      setContents([value.substring(0, 300)]);
      setLength(value.length);
    }
  };

  return [{ contents: contents, length: length }, onTextareaHandler];
};

export default useSelfIntro;
