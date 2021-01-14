import { useEffect, useState, useRef } from "react";
import { addBoard } from "../../store/actions/board";
import { useDispatch, useSelector } from "react-redux";

const useIsValid = () => {
  const number = useSelector((state) => {
    return state.board.data.length;
  });
  const dispatch = useDispatch();

  const validation = (e, value, author) => {
    e.preventDefault();
    if (value && author) {
      dispatch(
        addBoard({
          no: number + 1,
          date: Date().toString(),
          title: value,
          author: author,
        })
      );
    }
  };

  return validation;
};

export default useIsValid;
