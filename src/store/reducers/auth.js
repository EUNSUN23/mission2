import * as actionTypes from "../actions/actionTypes";
import { firebaseAuth } from "../../firebase";

const auth = {
  isAuth: false,
  userData: null,
};

const authCheck = (state) => {
  firebaseAuth.onAuthStateChanged(function (user) {
    state.isAuth = user ? true : false;
  });
};

const logout = (state) => {
  firebaseAuth.signOut().then(() => (state.isAuth = false));
};

const reducer = (state = auth, action) => {
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS:
      // state.userId = action.userId;
      // state.idToken = action.idToken;
      state.isAuth = true;
      return state;
    case actionTypes.AUTH_FAIL:
      state.isAuth = false;
      return state;
    case actionTypes.AUTH_START:
      state.isAuth = false;
      return state;
    case actionTypes.AUTH_LOGOUT:
      logout(state);
      return state;
    case actionTypes.AUTH_CHECK:
      authCheck(state);
      return state;
    default:
      return state;
  }
};

export default reducer;
