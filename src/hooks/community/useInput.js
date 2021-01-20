import { useState } from "react";

const useInput = (initText) => {
  const [text, setText] = useState(initText);

  console.log(text);

  const onInputChange = (e) => {
    e !== null ? setText(e.target.value) : setText("");
  };

  return [text, onInputChange];
};

export default useInput;
