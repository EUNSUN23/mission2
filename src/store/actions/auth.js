import * as actionTypes from "./actionTypes";

export const authStart = () => {
  //authenticate 시작하면 loading 메세지 띄우는 action creator.
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const emailVerifying = () => {
  return {
    type: actionTypes.AUTH_EMAIL_VERIFYING,
  };
};
