import React from "react";
import styles from "./BirthInfo.module.css";
import useBirth from "../../../../hooks/signUp/useBirth";

const BirthInfo = () => {
  const [birthInfo, setBirthInfo] = useBirth();

  return (
    <>
      <div className={styles.Wrapper}>
        <div className={styles.SelectBox}>
          <select
            required
            id="year"
            className={styles.Option}
            name="year"
            onChange={setBirthInfo}
          >
            <option value={null}>--선택--</option>
            {Array(2019 - 1910)
              .fill()
              .map((el, idx) => {
                const year = 1910 + idx;
                return (
                  <option
                    className={styles.Option}
                    key={`${year}년`}
                    value={year}
                  >
                    {year}
                  </option>
                );
              })}
          </select>
          <label className={styles.Label} htmlFor="year">
            년
          </label>
        </div>

        <div className={styles.SelectBox}>
          <select
            required
            className={styles.Option}
            id="month"
            name="month"
            onChange={setBirthInfo}
          >
            <option value="">--선택--</option>
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

        <div className={styles.SelectBox}>
          <select
            required
            id="date"
            className={styles.Option}
            name="date"
            onChange={setBirthInfo}
          >
            <option value="">--선택--</option>
            {Array(birthInfo.dateRange || 31)
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
      </div>
    </>
  );
};

export default BirthInfo;
