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
  const userData = useSelector((state) => {
    return state.auth;
  });

  useEffect(() => {
    dispatch(replace("/"));
  }, []);

  return (
    <>
      <div>
        {/* <Layout userData={userData}>
          <Switch>
            <Route exact path="/" render={() => <Welcome />} />
            <Route path="/intro" component={Intro} />
            <Route path="/overview" render={() => <OverView />} />
            <Route
              path="/community"
              render={() => <Community userData={userData} />}
            />
            <Route path="/notice" component={Notice} />
            <Route
              path="/signUp"
              render={() => <SignUp userData={userData} />}
            />
          </Switch>
        </Layout> */}
        <VerifyEmail />
      </div>
    </>
  );
};

export default App;
