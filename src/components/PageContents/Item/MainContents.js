import React from "react";

const MainContents = (props) => {
  const contents = props.contents;
  return (
    <>
      <h4>MainContents</h4>
      <div>
        <strong>{contents}</strong>
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text
      </div>
    </>
  );
};

export default MainContents;
