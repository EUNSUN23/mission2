import React from "react";

const checkBox = (props) => {
  return (
    <div>
      <input name={props.name} type="checkbox" value={props.option} />
      <label for={props.option}>{props.value}</label>
    </div>
  );
};

export default checkBox;
