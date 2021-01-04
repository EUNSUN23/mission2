const pagination = {
  url: "/",
  contents: "",
};

const routeReducer = (state = pagination, action) => {
  switch (action.type) {
    case "SET_PAGE":
      const updatedContents = { contents: action.part };
      return { ...state, ...updatedContents };
    case "SET_ROUTE":
      const updatedURL = { url: action.path };
      return { ...state, ...updatedURL };
    default:
      return state;
  }
};

export default routeReducer;
