import React, { useEffect, useState } from "react";
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
import { firestore, firebaseAuth } from "./firebase";
import { authSuccess, authFail } from "./store/actions/auth";

const App = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => {
    return state.auth;
  });

  console.log("APP_RENDER");

  const urlParams = new URLSearchParams(window.location.search);
  const mode = urlParams.get("mode");

  if (mode === "verifyEmail") {
    dispatch(authSuccess());
    dispatch(replace("/"));
  }

  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <>
      <div>
        <Switch>
          <Layout isAuth={isAuth}>
            <Route exact path="/" render={() => <Welcome />} />
            <Route path="/intro" component={Intro} />
            <Route path="/overview" render={() => <OverView />} />
            <Route
              path="/community"
              render={() => <Community isAuth={isAuth} />}
            />
            <Route path="/notice" component={Notice} />
            <Route path="/signup" render={() => <SignUp isAuth={isAuth} />} />
            <Route path="/verifyEmail" component={VerifyEmail} />
          </Layout>
        </Switch>
      </div>
    </>
  );
};

export default App;
