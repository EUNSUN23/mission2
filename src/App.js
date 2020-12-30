import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import Layout from "./container/Layout/Layout";
import Welcome from "./components/Welcome";
import { history } from "./index";
import Page from "./components/Pages/Page/Page";

const App = () => {
  const currentPath = history.location.pathname;
  const contents = useSelector((state) => {
    return state.reducer.contents;
  });

  const route =
    currentPath !== "/" ? (
      <Route
        path={currentPath}
        render={() => <Page currentPath={currentPath} contents={contents} />}
      />
    ) : (
      <Route
        exact
        path="/"
        render={() => <Welcome currentPath={currentPath} contents={contents} />}
      />
    );

  return (
    <>
      <div>
        <Layout>{route}</Layout>
      </div>
    </>
  );
};

export default App;
