import { useState, useCallback } from "react";
import { birthOptionChange } from "../../utils/InputHandler";

const UseBirth = () => {
  const [year, setYear] = useState();
  const [month, setMonth] = useState();
  const [date, setDate] = useState();
  const [dateRange, setDateRange] = useState();

  const onChangeHandler = useCallback(
    (e, isLeapYear) => {
      const { value, name } = e.target;
      switch (name) {
        case "year":
          setYear(value);
          break;
        case "month":
          if (isLeapYear) {
            setDateRange(birthOptionChange(isLeapYear, value));
          }
          setMonth(value);
          break;
        case "date":
          setDate(value);
          break;
      }
    },
    [year, month, date, dateRange]
  );
  return [
    { year: year, month: month, date: date, dateRange: dateRange },
    onChangeHandler,
  ];
};

export default UseBirth;
