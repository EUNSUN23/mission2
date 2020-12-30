import React from "react";

const SubPage = (props) => {
  console.log("subPage render");
  return (
    <>
      <h3>{props.contents}</h3>
      <div>{props.contents} content</div>
    </>
  );
};

export default SubPage;
