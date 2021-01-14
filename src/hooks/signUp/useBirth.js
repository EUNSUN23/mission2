import { useState, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { birthOptionChange, checkLeapYear } from "../../utils/signUp";
import { setBirth } from "../../store/actions/signUp";

const UseBirth = () => {
  const [year, setYear] = useState();
  const [month, setMonth] = useState();
  const [date, setDate] = useState();
  const [dateRange, setDateRange] = useState();
  const [isLeapYear, setIsLeapYear] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setDateRange(birthOptionChange(isLeapYear, month));
  }, [year, month]);

  if (year && month && date) {
    dispatch(setBirth(year, month, date));
  }

  const onChangeHandler = useCallback(
    (e) => {
      const { value, name } = e.target;
      switch (name) {
        case "year":
          console.log(month);
          setIsLeapYear(checkLeapYear(value));
          setYear(value);
          break;
        case "month":
          year && setIsLeapYear(checkLeapYear(year));
          setMonth(value);
          break;
        case "date":
          year && setIsLeapYear(checkLeapYear(year));
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
