import React, { Component } from "react";
import TextInput from "./Input/TextInput/TextInput";
import Gender from "./SignUpInfo/Gender/Gender";
import BirthInfo from "./SignUpInfo/BirthInfo/BirthInfo";
import Interest from "./SignUpInfo/Interest/Interest";
import SelfIntroduction from "./SignUpInfo/SelfIntroduction/SelfIntroduction";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import { checkRequires, isformValid } from "../../utils/InputHandler";
import styles from "./SignUp.module.css";
import axios from "axios";

const SignUpForm = () => {
  const onCanceledHandler = (e) => {
    e.preventDefault();
    console.log("CANCEL SUBMIT");
  };

  const onSubmittedHandler = (e) => {
    e.preventDefault();
    console.log("SUBMIT SIGNUP");
  };

  return (
    <>
      <form className={styles.SignUpForm}>
        <h2>{`<회원 가입>`}</h2>
        <h4>-아이디, 비밀번호-</h4>
        <TextInput />
        <h4>-성별-</h4>
        <Gender />
        <h4>-생년월일-</h4>
        <BirthInfo />
        <h4>-취미-</h4>
        <Interest />
        <h4>-자기소개-</h4>
        <SelfIntroduction />
        <button onClick={(e) => onCanceledHandler(e)}>가입취소</button>
        <button onClick={(e) => onSubmittedHandler(e)} type="submit">
          가입
        </button>
      </form>
    </>
  );
};
export default SignUpForm;
