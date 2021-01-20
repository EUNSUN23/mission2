import React, { useEffect, useState, memo } from "react";
import BoardItem from "./BoardItem";
import { useSelector, useDispatch } from "react-redux";
import { addBoard, deleteBoard } from "../../../../store/actions/board";
import { firestore } from "../../../../firebase";
import { replace } from "react-router-redux";
import styles from "./Board.module.css";
import useInput from "../../../../hooks/community/useInput";
import usePost from "../../../../hooks/community/usePost";

const Board = memo(({ isAuth }) => {
  const [text, setText] = useInput("");
  const [author, setAuthor] = useState("");
  const [openEdit, setOpenEdit] = useState(null);
  const [post, setPost] = usePost();
  const [boardData, setBoardData] = useState([]);

  const dispatch = useDispatch();

  const getBoardData = async () => {
    try {
      const snapshot = await firestore.collection("board").get();
      const data = snapshot.docs.map((doc) => doc.data());
      console.log(data);
      setBoardData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (isAuth !== null && openEdit !== null) {
      console.log(isAuth);
      !isAuth ? dispatch(replace("/signup")) : getBoardData();
    } else {
      getBoardData();
    }
  }, [openEdit, post]);

  const onEditBtnHandler = () => {
    isAuth ? setOpenEdit(true) : setOpenEdit(false);
  };

  const onDeleteHandler = async (identifier) => {
    console.log("delete");
    try {
      firestore.collection("board").doc(identifier).delete();
    } catch (err) {
      console.log(err);
    } finally {
      const deletedBoard = boardData.filter((obj) => {
        return obj.identifier !== identifier;
      });
      return setBoardData(deletedBoard);
    }
  };

  const boardItems = boardData
    ? boardData.map((obj, idx) => {
        return (
          <BoardItem
            key={`board-${idx + 1}`}
            number={idx + 1}
            title={obj.title}
            date={obj.date}
            author={obj.author}
            onDeleteBtn={onDeleteHandler(obj.identifier)}
          />
        );
      })
    : null;

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
            <label htmlFor="text">내용 :</label>
            <textarea id="text" value={text} onChange={setText}></textarea>
            <button type="submit" onClick={(e) => setPost(e, text)}>
              추가
            </button>
          </>
        ) : null}
      </form>
    </>
  );
});

export default Board;
