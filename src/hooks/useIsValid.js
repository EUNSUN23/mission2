import { useState } from "react";

const useIsValid = () => {
  const [isValid, setIsValid] = useState(false);

  const validation = (value) => {
    value && setIsValid(true);
  };

  return [isValid, validation];
};

export default useIsValid;
