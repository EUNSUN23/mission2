import React, { memo } from "react";
import styles from "./SelectBox.module.css";

const selectBox = memo((props) => {
  let selectBox = null;

  const yearRange = props.yearRange[1] - props.yearRange[0];

  const onYearChangeHandler = (value, type) => {
    props.onChange(value, type);
  };

  const onMonthChangeHandler = (value, type) => {
    props.onChange(value, type);
  };

  const onDateChangeHandler = (value, type) => {
    props.onChange(value, type);
  };

  switch (props.type) {
    case "year":
      selectBox = (
        <div className={styles.SelectBox}>
          <select
            id="year"
            className={styles.Option}
            name="year"
            onChange={(e) => {
              console.log("year change");
              onYearChangeHandler(e.target.value, props.type);
            }}
            value={props.value}
          >
            {Array(yearRange)
              .fill()
              .map((el, idx) => {
                const yearNum = props.yearRange[0] + idx;
                return (
                  <option
                    className={styles.Option}
                    key={`${yearNum}년`}
                    value={yearNum}
                  >
                    {yearNum}
                  </option>
                );
              })}
          </select>
          <label className={styles.Label} htmlFor="year">
            년
          </label>
        </div>
      );
      break;
    case "month":
      selectBox = (
        <div className={styles.SelectBox}>
          <select
            className={styles.Option}
            id="month"
            name="month"
            onChange={(e) => {
              console.log("month change");
              onMonthChangeHandler(e.target.value, props.type);
            }}
            value={props.value}
          >
            {Array(12)
              .fill()
              .map((el, idx) => {
                const month = idx + 1;
                return (
                  <option key={`${month}월`} value={month}>
                    {month}
                  </option>
                );
              })}
          </select>
          <label className={styles.Label} htmlFor="month">
            월
          </label>
        </div>
      );
      break;
    case "date":
      selectBox = (
        <div className={styles.SelectBox}>
          <select
            id="date"
            className={styles.Option}
            name="date"
            onChange={(e) => {
              console.log("date change");
              onDateChangeHandler(e.target.value, props.type);
            }}
            value={props.value}
          >
            {Array(props.dateRange)
              .fill()
              .map((el, idx) => {
                const date = idx + 1;
                return (
                  <option key={`${date}일`} value={date}>
                    {date}
                  </option>
                );
              })}
          </select>
          <label className={styles.Label} htmlFor="date">
            일
          </label>
        </div>
      );
      break;
  }
  return <>{selectBox}</>;
});

export default selectBox;
