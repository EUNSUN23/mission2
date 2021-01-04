import contents from "../../data/contentData.json";

export const setRoute = (pageName) => {
  return {
    type: "SET_ROUTE",
    path: "/" + pageName,
  };
};

export const setPage = (part) => {
  return {
    type: "SET_PAGE",
    part: contents[part],
  };
};