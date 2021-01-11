import React from "react";

const textarea = (props) => {
  return (
    <div>
      <label htmlFor={props.label}>{props.title}</label>
      <textarea name={props.name} rows="15" cols="20" />
    </div>
  );
};

export default textarea;
