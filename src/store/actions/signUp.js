import * as actionTypes from "../actions/actionTypes";

export const setIdPw = (name, inputValue) => {
  switch (name) {
    case "email":
      return {
        type: actionTypes.SET_ID,
        email: inputValue,
      };
    case "password":
      return {
        type: actionTypes.SET_PW,
        password: inputValue,
      };
    default:
      break;
  }
};

export const setGender = (gender) => {
  return {
    type: actionTypes.SET_GENDER,
    gender: gender,
  };
};

export const setInterest = (interest) => {
  return {
    type: actionTypes.SET_INTEREST,
    interest: interest,
  };
};

export const setSelfIntro = (text) => {
  return {
    type: actionTypes.SET_SELF_INTRO,
    text: text,
  };
};

export const setBirth = (year, month, date) => {
  const birthInfo = `${year}/${month}/${date}`;
  return {
    type: actionTypes.SET_BIRTH,
    birthInfo: birthInfo,
  };
};
