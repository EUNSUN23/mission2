import * as actionTypes from "./actionTypes";
import { debounce } from "lodash";
import { firebaseAuth } from "../../firebase";

export const authStart = () => {
  //authenticate 시작하면 loading 메세지 띄우는 action creator.
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (user) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    // idToken: token,
    // userId: userId,
    user: user,
  };
};

export const authFail = () => {
  return {
    type: actionTypes.AUTH_FAIL,
  };
};

export const authCheck = () => {
  return {
    type: actionTypes.AUTH_CHECK,
  };
};

export const logout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const emailVerifying = () => {
  return {
    type: actionTypes.AUTH_EMAIL_VERIFYING,
  };
};

export const checkAuthTimeout = (expirationTime) => {
  //1시간 지나서 토큰이 expire되면 로그아웃되었다는 ui창 띄우기
  return debounce((dispatch) => {
    dispatch(logout());
  }, expirationTime * 1000);
};

export const auth = (email, password) => {
  /*isSignup : 회원가입 vs 로그인*/
  return (dispatch) => {
    firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        // Signed in
        // ...
        dispatch(authSuccess(user));
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
    //... authenticate user
    // dispatch(authStart());
    // const authData = {
    //   email: email,
    //   password: password,
    //   returnSecureToken: true,
    // };
    // let url =
    //   "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAsK7GUA9nWSoGbqgRDJegJeosrHp4yiII";

    // // if (!isSignup) {
    // //   /*로그인*/
    // //   url =
    // //     "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBepqx1s3T66CIUQd4MOChfSUqKx1S0r6A";
    // // }
    // axios
    //   .post(url, authData)
    //   .then((response) => {
    //     const expirationDate = new Date(
    //       new Date().getTime() + response.data.expiresIn * 1000
    //     );
    //     localStorage.setItem("token", response.data.idToken);
    //     localStorage.setItem("expirationDate", expirationDate);
    //     localStorage.setItem("userId", response.data.localId);
    //     dispatch(authSuccess(response.data.idToken, response.data.localId));
    //     dispatch(checkAuthTimeout(response.data.expiresIn));
    //   })
    //   .catch((err) => {
    //     // dispatch(authFail(err.response.data.error));
    //     console.log(err.response.data.error);
    //   });
  };
};

// export const setAuthRedirectPath = (path) => {
//   return {
//     type: actionTypes.SET_AUTH_REDIRECT_PATH,
//     path: path,
//   };
// };

// export const authCheckState = () => {
//   return (dispatch) => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       dispatch(logout());
//     } else {
//       const expirationDate = new Date(localStorage.getItem("expirationDate"));
//       if (expirationDate > new Date()) {
//         const userId = localStorage.getItem("userId");
//         dispatch(authSuccess(token, userId));
//         dispatch(
//           checkAuthTimeout(
//             (expirationDate.getTime() - new Date().getTime()) / 1000
//           )
//         );
//       } else {
//         dispatch(logout());
//       }
//     }
//   };
// };
