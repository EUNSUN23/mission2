import React from "react";
import { Route } from "react-router-dom";
import SubContents from "./SubContents";

const MainContents = (props) => {
  const { contents, currentPath } = props;

  console.log("MAIN RENDER", contents, currentPath);

  const mainData = contents[0][0];
  const subData = contents[1][2];

  let subRoute = null;

  if (currentPath.includes("sub")) {
    subRoute = (
      <Route
        path={currentPath}
        render={() => (
          <SubContents currentPath={currentPath} contents={subData} />
        )}
      />
    );
  }
  return (
    <>
      <h4>MainContents</h4>
      <div>
        <strong>{mainData}</strong>
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text
      </div>
      {subRoute}
    </>
  );
};

export default MainContents;
