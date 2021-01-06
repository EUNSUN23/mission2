export const setRoute = (url) => {
  return {
    type: "SET_ROUTE",
    path: url,
  };
};

export const setContents = (data) => {
  return {
    type: "SET_CONTENTS",
    contents: data,
  };
};
