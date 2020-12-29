import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { push } from "connected-react-router";

const List = (props) => {
  return (
    <li
      className={props.className}
      onClick={props.onClick}
      onMouseOver={props.onMouseOver}
      onMouseOut={props.onMouseOut}
    >
      <NavLink>{props.page}</NavLink>
    </li>
  );
};

export default List;
