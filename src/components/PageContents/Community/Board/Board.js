import React from "react";
import BoardItem from "./BoardItem";
import { useSelector, useDispatch } from "react-redux";
import { addBoard, deleteBoard } from "../../../../store/actions/board";
import styles from "./Board.module.css";
import useInput from "../../../../hooks/useInput";
import useIsValid from "../../../../hooks/useIsValid";

const Board = () => {
  const [text, setText] = useInput("");
  const [submit, setSubmit] = useIsValid("");

  const boardData = useSelector((state) => {
    return state.reducer.data;
  });

  const dispatch = useDispatch();

  const onDeleteHandler = (itemKey) => {
    console.log(itemKey);
    dispatch(deleteBoard(itemKey));
  };

  const boardItems = Object.keys(boardData).map((brd) => {
    return (
      <BoardItem
        key={`board-${brd}`}
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
        <textarea value={text} onChange={setText}></textarea>
        <button
          type="submit"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmit(text);
          }}
        >
          글쓰기
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
