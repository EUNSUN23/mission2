export const setRoute = (url) => {
  return {
    type: "SET_ROUTE",
    path: url,
  };
};

export const setMainContents = (data) => {
  return {
    type: "SET_MAIN_CONTENTS",
    contents: data,
  };
};

export const setSubContents = (data) => {
  return {
    type: "SET_SUB_CONTENTS",
    contents: data,
  };
};
