import React from "react";
import styles from "./Interest.module.css";
import { useDispatch } from "react-redux";
import { setInterest } from "../../../../store/actions/signUp";

const Interest = () => {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkedInterest = Object.keys(isChecked).filter((key) => {
      return isChecked[key];
    });
    dispatch(setInterest(checkedInterest));
  }, [interest]);

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
          onChange={setIsChecked}
        />
      </div>
    </div>
  );
};

export default React.memo(Interest);
