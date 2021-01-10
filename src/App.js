import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Welcome from "./components/Pages/Welcome";
import { replace } from "react-router-redux";
import OverView from "./components/Pages/OverView/OverView";
import Community from "./components/Pages/Community/Community";
import Intro from "./components/Pages/Intro/Intro";
import Notice from "./components/Pages/Notice/Notice";

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
            <Route path="/intro" component={Intro} />
            <Route path="/overview" render={() => <OverView />} />
            <Route path="/community" component={Community} />
            <Route path="/notice" component={Notice} />
          </Switch>
        </Layout>
      </div>
    </>
  );
};

export default App;
