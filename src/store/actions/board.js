export const addBoard = (data) => {
  return {
    type: "ADD",
    data: data,
  };
};

export const deleteBoard = (key) => {
  return {
    type: "DELETE",
    brdKey: key,
  };
};
