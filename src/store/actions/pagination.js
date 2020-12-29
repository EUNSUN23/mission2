import * as actionTypes from "../actions/actionTypes";
import axios from "../../axios-page";

export const pushPage = (pageName, pageData) => {
  return {
    type: "ROUTE_PAGE",
    path: "/" + pageName,
    contents: pageData,
  };
};

// export const getData = async (page) => {
//   const response = await axios.get("/" + page + "/depth1.json");
//   const data = response.data;
//   return data;
// };

export const routePage = (page) => {
  if (page === "") {
    return (dispatch) => {
      dispatch(pushPage(page, "Welcome"));
    };
  } else {
    return (dispatch) => {
      // const pageData = getData(page);
      // dispatch(pushPage(page, pageData));
      axios
        .get("/" + page + "/depth1.json")
        .then((response) => {
          console.log(response.data);
          dispatch(pushPage(page, response.data));
        })
        .catch((error) => {
          console.log(error);
        });
    };
  }
};
