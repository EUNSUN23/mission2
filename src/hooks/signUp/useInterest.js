import { useState, useCallback, memo, useEffect } from "react";

const useInterest = (initValue) => {
  const [romance, setRomance] = useState(initValue);
  const [trip, setTrip] = useState(initValue);
  const [movie, setMovie] = useState(initValue);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const interest = [romance, trip, movie].filter((item) => {
      return item !== false;
    });
    console.log(interest);
    if (interest.length >= 2) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [romance, movie, trip]);

  const onInterestHandler = useCallback(
    (e) => {
      const { checked, name } = e.target;
      console.log(checked, name);
      switch (name) {
        case "romance":
          console.log(checked);
          disabled && !checked ? setRomance(false) : setRomance(checked);
          break;
        case "trip":
          console.log(checked);
          disabled && !checked ? setTrip(false) : setTrip(checked);
          break;
        case "movie":
          console.log(checked);
          disabled && !checked ? setMovie(false) : setMovie(checked);
          break;
      }
    },
    [romance, trip, movie]
  );

  return [{ romance: romance, trip: trip, movie: movie }, onInterestHandler];
};

export default useInterest;
