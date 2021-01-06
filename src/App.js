import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Welcome from "./components/Pages/Welcome";
import { replace } from "react-router-redux";
import Page from "./components/Pages/Page/Page";

const App = () => {
  console.log("APP_RENDER");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(replace("/"));
  }, []);

  return (
    <>
      <div>
        <Layout>
          <Switch>
            <Route exact path="/" render={() => <Welcome />} />
            <Route path="/items" render={() => <Page />} />
          </Switch>
        </Layout>
      </div>
    </>
  );
};

export default App;
