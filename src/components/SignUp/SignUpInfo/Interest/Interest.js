import React, { PureComponent } from "react";
import styles from "./Interest.module.css";

const option = [
  //ref로 렌더링막아주기
  ["영화", "movie"],
  ["연애", "love"],
  ["여행", "trip"],
];

class Interest extends PureComponent {
  state = {
    checkedInterest: [],
  };

  componentDidUpdate = () => {
    const checkedInterest = { ...this.state.checkedInterest };
    this.props.onChange(checkedInterest);
  };

  onChangeHandler = (identifier, value, isCheck) => {
    console.log(identifier);
    console.log(value);
    console.log(isCheck);

    if (isCheck) {
      this.setState(
        (prevState) => {
          return { checkedInterest: prevState.checkedInterest.concat(value) };
        },
        () => {
          console.log(this.state.checkedInterest);
        }
      );
    } else {
      this.setState(
        (prevState) => {
          return {
            checkedInterest: prevState.checkedInterest.filter((item) => {
              return item !== value;
            }),
          };
        },
        () => {
          console.log(this.state.checkedInterest);
        }
      );
    }
  };

  render() {
    return (
      <div className={styles.Wrapper}>
        {option.map((el, index) => {
          return (
            <div className={styles.Interest} key={el[1]}>
              <label className={styles.Label} htmlFor={el[1]}>
                <span>{el[0]}</span>
              </label>
              <input
                name="interest"
                type="checkbox"
                value={el[1]}
                onChange={(e) => {
                  this.onChangeHandler(el[1], e.target.value, e.target.checked);
                }}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Interest;
