import React, { Component } from "react";
import TextInput from "./Input/TextInput/TextInput";
import Gender from "./SignUpInfo/Gender/Gender";
import BirthInfo from "./SignUpInfo/BirthInfo/BirthInfo";
import Interest from "./SignUpInfo/Interest/Interest";
import SelfIntroduction from "./SignUpInfo/SelfIntroduction/SelfIntroduction";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import {
  borderPaint,
  isRequire,
  countAndCutLetter,
  checkLeapYear,
  checkRequires,
  birthOptionChange,
  isformValid,
} from "../../utils/InputHandler";
import styles from "./SignUp.module.css";
import axios from "axios";

class SignUpForm extends Component {
  onClickModal = () => {
    this.setState({ modal: false });
  };

  onBirthHandler = (value, type) => {
    const updatedBirthInfo = { ...this.state.birthInfo };
    updatedBirthInfo[type] = value;
    const updatedCheckInfo = { ...updatedBirthInfo.check };
    const requireArr = [
      updatedBirthInfo.year,
      updatedBirthInfo.month,
      updatedBirthInfo.date,
    ];

    updatedCheckInfo.isLeapYear = checkLeapYear(updatedBirthInfo.year);
    updatedCheckInfo.dateRange = birthOptionChange(
      updatedCheckInfo.isLeapYear,
      updatedBirthInfo.month
    );
    updatedBirthInfo.check = updatedCheckInfo;
    updatedBirthInfo.isRequired = checkRequires(requireArr);

    this.setState({ birthInfo: updatedBirthInfo });
  };

  onIDChecker = (id, event) => {
    event.preventDefault();
    const updatedTextInput = { ...this.state.textInput };
    const updatedId = { ...updatedTextInput.id };

    let message = [];

    if (id) {
      if (["test!@#$1234", "admin!@#1234"].indexOf(updatedId.value) > -1) {
        message.push(`${updatedId.value}는 이미 있는 아이디 입니다.`);
        updatedId.isChecked = false;
      } else {
        if (updatedId.isPassed && updatedId.isrequired) {
          message.push(`사용할 수 있는 아이디 입니다`);
          updatedId.isChecked = true;
        } else {
          updatedId.isChecked = false;
          message.push(`아이디를 조건에 맞게 입력하세요`);
        }
      }
    } else {
      message.push(`아이디를 입력하세요`);
      updatedId.isChecked = false;
    }

    updatedTextInput.id = updatedId;
    this.setState(
      {
        textInput: updatedTextInput,
        modalMessage: message,
        modal: true,
      },
      () => {
        console.log(message);
      }
    );
  };

  onCanceledHandler = (event) => {
    event.preventDefault();
  };

  onSubmittedHandler = (event) => {
    event.preventDefault();
    const upDatedForm = { ...this.state };
    const textInput = { ...upDatedForm.textInput };
    const isIdChecked = textInput.id.isChecked;
    const birth = { ...upDatedForm.birthInfo };
    const idPwArr = [
      upDatedForm.textInput.id.isrequired,
      upDatedForm.textInput.pw.isrequired,
      upDatedForm.textInput.pwCheck.isrequired,
    ];

    textInput.isRequired = checkRequires(idPwArr);

    const inputArr = Object.keys(upDatedForm)
      .filter((item) => {
        return item !== "modalMessage" && item !== "modal";
      })
      .map((item) => {
        return upDatedForm[item].isRequired;
      });

    console.log(inputArr);

    const isPatterns = Object.keys(textInput)
      .filter((item) => {
        return textInput[item].isPassed == false;
      })
      .map((item) => {
        return textInput[item].isPassed;
      });

    const formValidation = isformValid(inputArr, isPatterns, isIdChecked);
    console.log(formValidation);

    if (formValidation.validity) {
      const signUpInfo = {
        idpw: { id: textInput.id.value, password: textInput.pw.value },
        gender: upDatedForm.gender.value,
        birth: `${birth.date}/${birth.month}/${birth.year}`,
        interest: upDatedForm.interest.value,
        selfIntro: upDatedForm.selfIntroduction.value,
      };

      axios
        .post(
          "https://mission1-2e728.firebaseio.com/signUpInfo.json",
          signUpInfo
        )
        .then((req) => {
          console.log(req);
        });
    } else {
      let upDatedErr = formValidation.warnMessage;
      this.setState({ modalMessage: upDatedErr, modal: true });
    }
  };

  render() {
    console.log(this.state.idCheckModal);
    return (
      <>
        <form className={styles.SignUpForm}>
          <Modal
            show={this.state.modal}
            errInfo={this.state.modalMessage}
            modalClosed={this.onClickModal}
            modalType={this.state.modalType}
          />
          <h2>{`<회원 가입>`}</h2>
          <h4>-아이디, 비밀번호-</h4>
          <TextInput />
          <h4>-성별-</h4>
          <Gender
            onChange={this.onGenderHandler}
            value={this.state.gender.value}
          />
          <h4>-생년월일-</h4>
          <BirthInfo
            onChangeBirth={this.onBirthHandler}
            config={this.state.birthInfo}
          />
          <h4>-취미-</h4>
          <Interest onChange={this.onInterestHandler} />
          <h4>-자기소개-</h4>
          <SelfIntroduction
            onChange={this.onSelfIntroHandler}
            charLength={this.state.selfIntroduction.valueLength}
            value={this.state.selfIntroduction.value}
          />
          <Button
            onCancel={this.onCanceledHandler}
            onSubmit={this.onSubmittedHandler}
          />
        </form>
      </>
    );
  }
}

export default SignUpForm;
