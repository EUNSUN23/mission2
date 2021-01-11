const auth = {
  isAuth: false,
};

const reducer = (state = auth, action) => {
  switch (action.type) {
    case "AUTH_SUCCESS":
      state.isAuth = true;
      return state;
    case "AUTH_FAIL":
      state.isAuth = false;
      return state;
    default:
      return state;
  }
};

export default reducer;
