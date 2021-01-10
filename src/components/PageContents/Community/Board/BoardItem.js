import React from "react";

const BoardItem = ({ number, date, author, title, onDeleteBtn }) => {
  return (
    <>
      <span>{number}</span>
      <span>{date}</span>
      <span>{title}</span>
      <span>{author}</span>
      <span>
        <button>수정</button>
        <button
          onClick={(e) => {
            e.preventDefault();
            onDeleteBtn(number);
          }}
        >
          삭제
        </button>
      </span>
    </>
  );
};

export default BoardItem;
