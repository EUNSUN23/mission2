import { Route } from "react-router-dom";
import pageData from "../../../data/contentData.json";
import SubContents from "./SubContents";
import { useSelector } from "react-redux";

const MainContents = () => {
  const currentPath = useSelector((state) => {
    return state.router.location.pathname;
  });
  if (currentPath.includes("page")) {
    const pageKey = currentPath.slice(10, 15);
    const contents = pageData[pageKey];
    const mainContents = contents[0][1];

    let subRoute = null;

    if (currentPath.includes("sub")) {
      const subKey = currentPath.slice(16);
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
