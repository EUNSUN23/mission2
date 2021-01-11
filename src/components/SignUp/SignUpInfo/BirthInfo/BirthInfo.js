import React, { memo } from "react";
import SelectBox from "../../Input/SelectBox/SelectBox";
import styles from "./BirthInfo.module.css";

const birthInfo = memo((props) => {
  const onChange = (value, type) => {
    console.log(value, type);
    props.onChangeBirth(value, type);
  };

  let selectBox = [];

  for (let key in props.config) {
    selectBox.push(
      <SelectBox
        className={styles.SelectBox}
        key={`for ${key}`}
        type={key}
        onChange={(value, type) => onChange(value, type)}
        value={props.config[key]}
        yearRange={[1910, 2019]}
        dateRange={props.config.check.dateRange}
        isLeapYear={props.config.isLeapYear}
      />
    );
  }
  return (
    <>
      <div className={styles.Wrapper}>{selectBox}</div>
    </>
  );
});

export default birthInfo;
