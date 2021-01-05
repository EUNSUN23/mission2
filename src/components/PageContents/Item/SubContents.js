import React from "react";

const SubContents = (props) => {
  const contents = props.contents;
  return (
    <>
      <h5>SubContents</h5>
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

export default SubContents;
