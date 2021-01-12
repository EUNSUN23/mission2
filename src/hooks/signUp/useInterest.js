import { useState } from "react";

const useInterest = (initValue) => {
  const [romance, setRomance] = useState(initValue);
  const [trip, setTrip] = useState(initValue);
  const [movie, setMovie] = useState(initValue);

  const onInterestHandler = (e) => {
    const { checked, name } = e.target;
    switch (name) {
      case "romance":
        setRomance(checked);
      case "trip":
        setTrip(checked);
      case "movie":
        setMovie(checked);
    }
  };

  return [{ romance: romance, trip: trip, movie: movie }, onInterestHandler];
};

export default useInterest;
