const page = {
  url: "/",
  contents: "Welcome",
};

const contents = (state = page, action) => {
  switch (action.type) {
    case "ROUTE_PAGE":
      const updatedURL = { url: action.path };
      const updatedContents = { contents: action.contents };
      return { ...state, ...updatedURL, ...updatedContents };

    default:
      return state;
  }
};

export default contents;
