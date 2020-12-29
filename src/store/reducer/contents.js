const page = {
  url: "/",
  contents: "Welcome",
};

const contents = (state = page, action) => {
  //route 주소(page1,page2..)에 따라 page컴포넌트에 다른 contents를 넘겨주기. 일단은 page만.
  //

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
