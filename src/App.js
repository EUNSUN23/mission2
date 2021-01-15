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
import { firestore, firebaseAuth } from "./firebase";
import { authSuccess, authFail } from "./store/actions/auth";

const App = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => {
    return state.auth;
  });

  const isAuth = useSelector((state) => state.auth.isAuth);

  console.log("APP_RENDER");

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        user.emailVerified ? dispatch(authSuccess()) : dispatch(authFail());
      } else {
        console.log("no users");
      }
    });
  });

  return (
    <>
      <div>
        <Layout isAuth={isAuth}>
          <Switch>
            <Route exact path="/" render={() => <Welcome />} />
            <Route path="/intro" component={Intro} />
            <Route path="/overview" render={() => <OverView />} />
            <Route
              path="/community"
              render={() => <Community isAuth={isAuth} />}
            />
            <Route path="/notice" component={Notice} />
            <Route path="/signup" render={() => <SignUp isAuth={isAuth} />} />
          </Switch>
        </Layout>
      </div>
    </>
  );
};

export default App;
