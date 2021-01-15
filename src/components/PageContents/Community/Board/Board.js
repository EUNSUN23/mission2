import React, { useEffect, useState, memo } from "react";
import BoardItem from "./BoardItem";
import { useSelector, useDispatch } from "react-redux";
import { addBoard, deleteBoard } from "../../../../store/actions/board";
import { replace } from "react-router-redux";
import styles from "./Board.module.css";
import useInput from "../../../../hooks/community/useInput";
import usePost from "../../../../hooks/community/usePost";

const Board = memo(({ isAuth }) => {
  const [text, setText] = useInput("");
  const [author, setAuthor] = useState("");
  const [openEdit, setOpenEdit] = useState(null);

  const setNewData = usePost();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuth !== null && openEdit !== null) {
      console.log(isAuth);
      !isAuth && dispatch(replace("/signup"));
    }
  }, [openEdit]);

  const onEditBtnHandler = () => {
    isAuth ? setOpenEdit(true) : setOpenEdit(false);
  };

  const boardData = useSelector((state) => {
    return state.board.data;
  });

  const onDeleteHandler = (itemKey) => {
    console.log(itemKey);
    dispatch(deleteBoard(itemKey));
  };

  const boardItems = Object.keys(boardData).map((brd, idx) => {
    return (
      <BoardItem
        key={`board-${boardData[brd].no}`}
        number={boardData[brd].no}
        title={boardData[brd].title}
        date={boardData[brd].date}
        author={boardData[brd].author}
        onDeleteBtn={onDeleteHandler}
      />
    );
  });

  return (
    <>
      <div className={styles.board}>
        <span>no</span>
        <span>date</span>
        <span>title</span>
        <span>author</span>
        <span>edit</span>
        {boardItems}
      </div>
      <button onClick={onEditBtnHandler} className="addBoard">
        글쓰기
      </button>
      <form>
        {openEdit ? (
          <>
            <label htmlFor="author">작성자: </label>
            <input
              id="author"
              type="text"
              value={author}
              onChange={({ target: { value } }) => setAuthor(value)}
            />
            <label htmlFor="text">내용 :</label>
            <textarea id="text" value={text} onChange={setText}></textarea>
            <button type="submit" onClick={(e) => setNewData(e, author, text)}>
              추가
            </button>
          </>
        ) : null}
      </form>
    </>
  );
});

export default Board;
