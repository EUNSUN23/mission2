import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import SubContents from "./SubContents";

import { history } from "../../../index";
const MainContents = (props) => {
  let { contents, currentPath, isBackClicked } = props;
  const [isBack, setIsBack] = useState(false);
  const dispatch = useDispatch();

  isBackClicked && console.log("BackClicked", currentPath, contents);

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
