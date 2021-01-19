import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Welcome from "./components/Pages/Welcome";
import { replace } from "react-router-redux";
import OverView from "./components/Pages/OverView/OverView";
import Community from "./components/Pages/Community/Community";
import Intro from "./components/Pages/Intro/Intro";
import Notice from "./components/Pages/Notice/Notice";
import SignUp from "./components/SignUp/SignUp";
import VerifyEmail from "./components/Pages/VerifyEmail/VerifyEmail";

const App = () => {
  console.log("APP_RENDER");
  const dispatch = useDispatch();
  const emailVerifying = useSelector((state) => {
    return state.auth.isVerifying;
  });
  const isAuth = useSelector((state) => {
    return state.auth.isAuth;
  });

  useEffect(() => {
    dispatch(replace("/"));
  }, [dispatch]);

  const routes = emailVerifying ? (
    <Route path="/verifyEmail" component={VerifyEmail} />
  ) : (
    <Layout isAuth={isAuth}>
      <Switch>
        <Route exact path="/" render={() => <Welcome />} />
        <Route path="/intro" component={Intro} />
        <Route path="/overview" render={() => <OverView />} />
        <Route path="/community" render={() => <Community isAuth={isAuth} />} />
        <Route path="/notice" component={Notice} />
        <Route path="/signUp" render={() => <SignUp isAuth={isAuth} />} />
      </Switch>
    </Layout>
  );

  return (
    <>
      <div>{routes}</div>
    </>
  );
};

export default App;
