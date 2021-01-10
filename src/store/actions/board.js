export const addBoard = (key) => {
  return {
    type: "ADD",
    brdKey: key,
  };
};

export const deleteBoard = (key) => {
  return {
    type: "DELETE",
    brdKey: key,
  };
};
