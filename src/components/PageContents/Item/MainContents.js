import { Route } from "react-router-dom";
import pageData from "../../../data/contentData.json";
import SubContents from "./SubContents";
import { history } from "../../../index";

const MainContents = ({ currentPath }) => {
  if (currentPath.includes("page")) {
    const pageKey = currentPath.slice(7, 12);
    const contents = pageData[pageKey];
    const mainContents = contents[0][1];

    let subRoute = null;

    if (currentPath.includes("sub")) {
      const subKey = currentPath.slice(13);
      const subContents = contents[1][subKey][1];
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
          <strong>{mainContents || null}</strong>
          text text text text text text text text text text text text text text
          text text text text text text text text text text text text text text
          text text text text text text text text text text text text text text
          text text text text text text text text text text text text text
        </div>
        {subRoute || null}
      </>
    );
  } else {
    return null;
  }
};

export default MainContents;
