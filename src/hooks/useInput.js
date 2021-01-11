import { useState } from "react";

const useInput = (initText) => {
  const [text, setText] = useState(initText);

  console.log(text);

  const onInputChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  return [text, onInputChange];
};

export default useInput;
