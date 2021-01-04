import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Welcome from "./components/Pages/Welcome";
import Page from "./components/Pages/Page/Page";
import { replace } from "react-router-redux";
import { setPage, setRoute } from "./store/actions/pagination";

const App = () => {
  console.log("APP_RENDER");
  const dispatch = useDispatch();

  const currentMainPath = useSelector((state) => {
    return state.reducer.url;
  });
  const contents = useSelector((state) => {
    return state.reducer.contents;
  });

  useEffect(() => {
    dispatch(setPage("home"));
    dispatch(replace("/"));
  }, []);

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
