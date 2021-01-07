import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import pageData from "../../../data/contentData.json";
import SubContents from "./SubContents";

const MainContents = ({ currentPath }) => {
  const pageKey = currentPath.slice(7, 12);
  const subKey = currentPath.slice(13);
  const contents = pageData[pageKey];
  const mainContents = contents[0][1];
  const subContents = contents[1][subKey][1];

  let subRoute = null;

  if (currentPath.includes("sub")) {
    subRoute = (
      <Route
        path={currentPath}
        render={() => (
          <SubContents currentPath={currentPath} contents={subContents} />
        )}
      />
    );
  }
  return (
    <>
      <h4>MainContents</h4>
      <div>
        <strong>{mainContents}</strong>
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
