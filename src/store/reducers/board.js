const board = {
  data: [
    {
      no: 1,
      date: Date().toString(),
      title: "if you intend to live then you die",
      author: "lee SunSin",
    },
    {
      no: 2,
      date: Date().toString(),
      title: "Founder for two countries",
      author: "So SiNo",
    },
    {
      no: 3,
      date: Date().toString(),
      title: "lamentations 3:24~25",
      author: "Eun Sun",
    },
  ],
};

const deleteBoard = (state, key) => {
  const board = { ...state };
  const deletedBoard = board.data.filter((data) => {
    return data.no !== key;
  });
  board.data = deletedBoard;
  console.log(deletedBoard);
  return { ...state, ...board };
};

const addBoard = (state, board) => {
  const addedBoard = [...state.data, board];
  return { ...state, ...addedBoard };
};

const reducer = (state = board, action) => {
  switch (action.type) {
    case "DELETE":
      return deleteBoard(state, action.key);
    case "ADD":
      return addBoard(state, action.board);
    default:
      return state;
  }
};

export default reducer;
