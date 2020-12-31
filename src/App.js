import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import Layout from "./container/Layout/Layout";
import Welcome from "./components/Welcome";
import { history } from "./index";
import Page from "./components/Pages/Page/Page";

const App = () => {
  const currentMainPath = useSelector((state) => {
    return state.reducer.url;
  });
  const contents = useSelector((state) => {
    return state.reducer.contents;
  });

  const route =
    currentMainPath !== "/" ? (
      <Route
        path={currentMainPath}
        render={() => (
          <Page currentMainPath={currentMainPath} contents={contents} />
        )}
      />
    ) : (
      <Route
        exact
        path="/"
        render={() => (
          <Welcome currentMainPath={currentMainPath} contents={contents} />
        )}
      />
    );

  return (
    <>
      <div>
        <Layout currentMainPath={currentMainPath}>{route}</Layout>
      </div>
    </>
  );
};

export default App;
