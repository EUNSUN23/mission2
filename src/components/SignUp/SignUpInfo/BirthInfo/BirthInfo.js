import React, { memo } from "react";
import SelectBox from "../../Input/SelectBox/SelectBox";
import styles from "./BirthInfo.module.css";
import useBirth from "../../../../hooks/signUp/useBirth";
import { checkLeapYear, setDateRange } from "../../../../utils/InputHandler";

const birthInfo = memo((props) => {
  const [birthInfo, setBirthInfo] = useBirth();
  const [isLeapYear, setIsLeapYear] = useState(false);
  const [dateOption, setDateOption] = useState();

  export function birthOptionChange(isLeapYear, checkedMonth, type) {
    let dateRange = null;
    console.log(type);
    console.log(isLeapYear);
    console.log(checkedMonth);
    if (type === "year" || type === "month" || checkedMonth !== null) {
      if (checkedMonth === "2") {
        if (isLeapYear) {
          dateRange = 28;
        } else {
          dateRange = 29;
        }
      } else if (["4", "6", "9", "11"].indexOf(checkedMonth) > -1) {
        dateRange = 30;
      } else {
        dateRange = 31;
      }
      console.log(dateRange);
      return dateRange;
    }
  }

  useEffect(() => {
    birthInfo.year && setIsLeapYear(checkLeapYear(birthInfo.year));
  }, [birthInfo]);
  // onBirthHandler = (value, type) => {
  //   const updatedBirthInfo = { ...this.state.birthInfo };
  //   updatedBirthInfo[type] = value;
  //   const updatedCheckInfo = { ...updatedBirthInfo.check };
  //   const requireArr = [
  //     updatedBirthInfo.year,
  //     updatedBirthInfo.month,
  //     updatedBirthInfo.date,
  //   ];

  //   updatedCheckInfo.isLeapYear = checkLeapYear(updatedBirthInfo.year);
  //   updatedCheckInfo.dateRange = birthOptionChange(
  //     updatedCheckInfo.isLeapYear,
  //     updatedBirthInfo.month
  //   );
  //   updatedBirthInfo.check = updatedCheckInfo;
  //   updatedBirthInfo.isRequired = checkRequires(requireArr);

  //   this.setState({ birthInfo: updatedBirthInfo });
  // };

  const onChange = (value, type) => {
    console.log(value, type);
    props.onChangeBirth(value, type);
  };

  // check: {
  //   isLeapYear: false,
  //   dateRange: 31,
  // },
  // isRequired: "",

  // let selectBox = [];

  // for (let key in props.config) {
  //   selectBox.push(
  //     <SelectBox
  //       className={styles.SelectBox}
  //       key={`for ${key}`}
  //       type={key}
  //       onChange={(value, type) => onChange(value, type)}
  //       value={props.config[key]}
  //       yearRange={[1910, 2019]}
  //       dateRange={props.config.check.dateRange}
  //       isLeapYear={props.config.isLeapYear}
  //     />
  //   );
  // }

  const onYearChangeHandler = (value, type) => {
    props.onChange(value, type);
  };

  const onMonthChangeHandler = (value, type) => {
    props.onChange(value, type);
  };

  const onDateChangeHandler = (value, type) => {
    props.onChange(value, type);
  };

  return (
    <>
      <div className={styles.Wrapper}>
        <div className={styles.SelectBox}>
          <select
            required
            id="year"
            className={styles.Option}
            name="year"
            onChange={(e) => {
              console.log("year change");
              onYearChangeHandler(e.target.value, props.type);
            }}
            value={props.value}
          >
            {Array(2019 - 1910)
              .fill()
              .map((el, idx) => {
                const year = 2019 + idx;
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

        <div className={styles.SelectBox}>
          <select
            required
            id="date"
            className={styles.Option}
            name="date"
            onChange={(e) => {
              console.log("date change");
              onDateChangeHandler(e.target.value, props.type);
            }}
            value={props.value}
          >
            {Array(setDateRange(isLeapYear, birthInfo.month))
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
});

export default birthInfo;
