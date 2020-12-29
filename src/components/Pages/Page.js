import React, { useState, useEffect, useCallback } from "react";
import { Route, Switch } from "react-router-dom";
import SubTab from "../UI/SubTab/SubTab";
import SubPage from "../Pages/SubPage";
import axios from "../../axios-page";

const Page = (props) => {
  const [mainContent, setMainContent] = useState("");
  const [subContent, setSubContent] = useState({});
  const currentPath = props.history.location.pathname;

  useEffect(() => {
    const getContents = async (url) => {
      const response = await axios.get(url + ".json");
      const newMainContent = response.data.page;
      const newSubContent = response.data.subPage;
      setMainContent(newMainContent);
      setSubContent(newSubContent);
    };

    getContents(currentPath);
  }, [currentPath]);

  return (
    <>
      <SubTab
        show={true}
        curMainPath={props.history.location.pathname}
      ></SubTab>
      <article>
        <div className="mainContent">
          <strong>{mainContent}</strong>
        </div>
        <div className="contents">
          <Switch>
            <Route
              path={currentPath + "/subTab/sub1"}
              render={() => <SubPage content={subContent.sub1} />}
            />
            <Route
              path={currentPath + "/subTab/sub2"}
              render={() => <SubPage content={subContent.sub2} />}
            />
            <Route
              path={currentPath + "/subTab/sub3"}
              render={() => <SubPage content={subContent.sub3} />}
            />
          </Switch>
        </div>
      </article>
    </>
  );
};

export default Page;
