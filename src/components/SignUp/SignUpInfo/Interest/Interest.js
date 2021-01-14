import React, { useEffect, useRef } from "react";
import styles from "./Interest.module.css";
import { useDispatch } from "react-redux";
import { setInterest } from "../../../../store/actions/signUp";
import useInterest from "../../../../hooks/signUp/useInterest";

const Interest = () => {
  const [isChecked, setIsChecked] = useInterest(false);
  const dispatch = useDispatch();
  const ref = {
    romance: useRef(false),
    trip: useRef(false),
    movie: useRef(false),
  };

  useEffect(() => {
    const checkedInterest = Object.keys(isChecked).filter((key) => {
      return isChecked[key];
    });

    console.log(checkedInterest);

    let uncheckedItem;
    if (checkedInterest.length === 2) {
      for (const key in isChecked) {
        if (!isChecked[key]) {
          uncheckedItem = key;
          console.log(key);
          ref[uncheckedItem].current = true;
        }
      }
    } else {
      ref.romance.current = false;
      ref.trip.current = false;
      ref.movie.current = false;
    }
    dispatch(setInterest(checkedInterest));
  });

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Interest}>
        <label htmlFor="romance">
          <span>연애</span>
        </label>
        <input
          name="romance"
          id="romance"
          type="checkbox"
          value="romance"
          disabled={ref.romance.current}
          onChange={setIsChecked}
        />
      </div>
      <div className={styles.Interest}>
        <label htmlFor="trip">
          <span>여행</span>
        </label>
        <input
          name="trip"
          id="trip"
          type="checkbox"
          value="trip"
          disabled={ref.trip.current}
          onChange={setIsChecked}
        />
      </div>
      <div className={styles.Interest}>
        <label htmlFor="movie">
          <span>영화</span>
        </label>
        <input
          name="movie"
          id="movie"
          type="checkbox"
          value="movie"
          disabled={ref.movie.current}
          onChange={setIsChecked}
        />
      </div>
    </div>
  );
};

export default Interest;
