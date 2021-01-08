import React from "react";

const welcome = (props) => {
  console.log("render");
  return (
    <>
      <h1>Welcome!</h1>
    </>
  );
};

export default React.memo(welcome);
