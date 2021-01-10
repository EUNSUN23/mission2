import React from "react";
import BoardItem from "./BoardItem";
import { useSelector, useDispatch } from "react-redux";
import { addBoard, deleteBoard } from "../../../../store/actions/board";
import styles from "./Board.module.css";

const Board = () => {
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
