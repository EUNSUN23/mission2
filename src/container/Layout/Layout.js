import React, { Component } from "react";
import MainTab from "../../components/UI/MainTab/MainTab";
import Header from "../../components/Header/Header";

class Layout extends Component {
  state = {};

  render() {
    return (
      <>
        <Header />
        <MainTab />

        {this.props.children}
      </>
    );
  }
}

export default Layout;
