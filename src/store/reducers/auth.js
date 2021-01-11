import * as actionTypes from "../actions/actionTypes";

const auth = {
  userId: null,
  idToken: null,
};

const reducer = (state = auth, action) => {
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS:
      state.userId = action.userId;
      state.idToken = action.idToken;
      return state;
    case actionTypes.AUTH_FAIL:
      state.isAuth = false;
      return state;
    case actionTypes.AUTH_START:
      state.isAuth = false;
      return state;
    case actionTypes.AUTH_LOGOUT:
      state.isAuth = false;
      return state;
    default:
      return state;
  }
};

export default reducer;
