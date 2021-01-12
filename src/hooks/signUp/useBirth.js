import { useState } from "react";

const useBirth = () => {
  const [year, setYear] = useState();
  const [month, setMonth] = useState();
  const [date, setDate] = useState();
  const [dateRange, setDateRange] = useState();

  const onChangeHandler = (e, isLeapYear) => {
    const { value, name } = e.target;
    switch (name) {
      case "year":
        setYear(value);
      case "month":
        isLeapYear && setMonth(value);
      case "date":
        setDate(value);
    }
  };
  return [
    { year: year, month: month, date: date, dateRange: dateRange },
    onChangeHandler,
  ];
};

export default useBirth;
