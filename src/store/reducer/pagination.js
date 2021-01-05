const pagination = {
  url: "/",
  mainContents: "",
  subContents: "",
};

const routeReducer = (state = pagination, action) => {
  switch (action.type) {
    case "SET_MAIN_CONTENTS":
      const updatedMainContents = { mainContents: action.contents };
      return { ...state, ...updatedMainContents };
    case "SET_SUB_CONTENTS":
      const updatedSubContents = { subContents: action.contents };
      return { ...state, ...updatedSubContents };
    case "SET_ROUTE":
      const updatedURL = { url: action.path };
      return { ...state, ...updatedURL };
    default:
      return state;
  }
};

export default routeReducer;
