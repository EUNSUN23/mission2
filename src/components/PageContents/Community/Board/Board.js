import React, { useState } from "react";
import BoardItem from "./BoardItem";
import { useSelector, useDispatch } from "react-redux";
import { deleteBoard } from "../../../../store/actions/board";
import styles from "./Board.module.css";
import useInput from "../../../../hooks/community/useInput";
import useAddData from "../../../../hooks/community/useAddData";

const Board = () => {
  const [text, setText] = useInput("");
  const [author, setAuthor] = useState("");
  const setNewData = useAddData();

  const boardData = useSelector((state) => {
    return state.board.data;
  });

  const dispatch = useDispatch();

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
      <form>
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
      </form>
      <div className={styles.board}>
        <span>no</span>
        <span>date</span>
        <span>title</span>
        <span>author</span>
        <span>edit</span>
        {boardItems}
      </div>
    </>
  );
};

export default Board;
