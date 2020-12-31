import { useState, useEffect } from "react";

export default () => {
  const [isClicked, setIsClicked] = useState(false);
  const [tabClassName, setTabClassName] = useState("UnClicked");

  const tabClickCheck = (bool) => {
    setIsClicked(bool);
  };

  useEffect(() => {
    if (isClicked) {
      setTabClassName("Clicked");
    } else {
      setTabClassName("UnClicked");
    }
  }, [isClicked]);

  return [tabClassName, tabClickCheck];
};
