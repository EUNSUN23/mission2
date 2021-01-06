import React from "react";

const SubContents = (props) => {
  const { contents, currentPath } = props;

  const subContents = contents.filter((sub) => {
    return currentPath.includes(sub[0]) && sub;
  });

  // [
  //   ["I AM PAGE1","/page1"],
  //    [
  //      ["sub1","page1-sub1","/page1/sub1"],
  //      ["sub2","page1-sub2","/page1/sub2"],
  //      ["sub3","page1-sub3","/page1/sub3"]
  // ]]
  return (
    <>
      <h5>SubContents</h5>
      <div>
        <strong>{subContents[1]}</strong>
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text
      </div>
    </>
  );
};

export default SubContents;
