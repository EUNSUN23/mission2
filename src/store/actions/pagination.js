import axios from "../../axios-page";

export const pushPage = (pageName, pageData) => {
  return {
    type: "ROUTE_PAGE",
    path: "/" + pageName,
    contents: pageData,
  };
};

export const setPage = (page) => {
  if (page === "") {
    return (dispatch) => {
      dispatch(pushPage(page, "Welcome"));
    };
  } else {
    return (dispatch) => {
      axios
        .get("/" + page + ".json")
        .then((response) => {
          dispatch(pushPage(page, response.data));
        })
        .catch((error) => {
          console.log(error);
        });
    };
  }
};
