import React from "react";
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
import { authSuccess, authFail } from "./store/actions/auth";

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const isEmailVerifying = useSelector((state) => state.auth.isVerifying);

  console.log("APP_RENDER");

  const urlParams = new URLSearchParams(window.location.search);
  const mode = urlParams.get("mode");

  if (mode === "verifyEmail") {
    dispatch(authSuccess());
    dispatch(replace("/"));
  }

  const routes = isEmailVerifying ? (
    <Route path="/verifyEmail" component={VerifyEmail} />
  ) : (
    <Switch>
      <Layout isAuth={isAuth}>
        <Route exact path="/" render={() => <Welcome />} />
        <Route path="/intro" component={Intro} />
        <Route path="/overview" render={() => <OverView />} />
        <Route path="/community" render={() => <Community isAuth={isAuth} />} />
        <Route path="/notice" component={Notice} />
        <Route path="/signup" render={() => <SignUp isAuth={isAuth} />} />
      </Layout>
    </Switch>
  );

  return (
    <>
      <div>{routes}</div>
    </>
  );
};

export default App;
