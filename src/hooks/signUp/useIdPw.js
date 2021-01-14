import { useState } from "react";
import { useDispatch } from "react-redux";
import { setIdPw } from "../../store/actions/signUp";

const useIdPw = (initValue) => {
  const [email, setEmail] = useState(initValue);
  const [password, setPassword] = useState(initValue);

  const dispatch = useDispatch();

  const onIdPwInputHandler = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
      dispatch(setIdPw(name, value));
    } else if (name === "password") {
      setPassword(value);
      dispatch(setIdPw(name, value));
    }
  };
  return [{ email: email, password: password }, onIdPwInputHandler];
};

export default useIdPw;
