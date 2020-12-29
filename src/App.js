import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./container/Layout/Layout";
import Welcome from "./components/Welcome";
import { history } from "./index";

const App = () => {
  console.log("APP RENDER", history.location.pathname);

  const currentPath = history.location.pathname;

  const Page = React.lazy(() => {
    return import("./components/Pages/Page");
  });

  const route =
    currentPath !== "/" ? (
      <Route path={currentPath} render={() => <Page history={history} />} />
    ) : (
      <Route exact path="/" render={() => <Welcome history={history} />} />
    );

  return (
    <>
      <div>
        <Layout>
          <Suspense fallback={<p>Loading...</p>}>{route}</Suspense>
        </Layout>
      </div>
    </>
  );
};

//새로운 페이지 dispatch로 푸시할 때 어느 tab눌렀느냐에 따라서 page주소 바꿔주기. 주소에 따라서
//라우팅되는 페이지 내용도 바꿔주기.

export default App;
