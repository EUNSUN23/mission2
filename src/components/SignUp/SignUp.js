import React, { Component } from "react";
import TextInput from "./Input/TextInput/TextInput";
import Gender from "./SignUpInfo/Gender/Gender";
import BirthInfo from "./SignUpInfo/BirthInfo/BirthInfo";
import Interest from "./SignUpInfo/Interest/Interest";
import SelfIntroduction from "./SignUpInfo/SelfIntroduction/SelfIntroduction";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import { checkRequires, isformValid } from "../../utils/signUp";
import styles from "./SignUp.module.css";
import { useDispatch, useSelector } from "react-redux";
import { firebaseAuth } from "../../firebase";
import { firestore } from "../../firebase";
import { replace } from "react-router-redux";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const signupData = useSelector((state) => {
    return state.signUp.form;
  });

  const onCanceledHandler = (e) => {
    e.preventDefault();
    console.log("CANCEL SUBMIT");
  };

  const onSubmittedHandler = async (e) => {
    e.preventDefault();
    try {
      const cred = await firebaseAuth.createUserWithEmailAndPassword(
        signupData.IdPw.email,
        signupData.IdPw.password
      );

      firestore
        .collection("users")
        .doc(cred.user.uid)
        .set(
          {
            bio: {
              email: signupData.IdPw.email,
              selfIntroduction: signupData.selfIntroduction,
            },
          },
          (err) => console.log(err)
        );

      console.log("success");
    } catch (err) {
      console.log(err);
    }

    try {
      const actionCodeSettings = {
        url: "react-mission-caab8.web.app",
        handleCodeInApp: false,
      };
      firebaseAuth.currentUser.sendEmailVerification(actionCodeSettings);
      console.log("email sent");
      dispatch(replace("/"));
    } catch (err) {
      console.log(err);
    }
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
        <button onClick={(e) => onCanceledHandler(e)}>취소</button>
        <button onClick={(e) => onSubmittedHandler(e)} type="submit">
          가입하기
        </button>
      </form>
    </>
  );
};
export default SignUpForm;
