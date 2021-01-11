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

class SignUp extends Component {
  state = {
    textInput: {
      id: {
        name: ["id", "아이디"],
        value: "",
        type: "text",
        title:
          "영문(소문자), 숫자, 특수문자 각각 1개 이상을 포함한 10자리 이상의 아이디",
        isPassed: false,
        border: "",
        isChecked: false,
        isrequired: false,
      },
      pw: {
        name: ["pw", "비밀번호"],
        value: "",
        type: "password",
        title:
          "영문(소문자), 숫자 각각 1개 이상, 특수문자 2개 이상을 포함한 12자리 이상의 비밀번호",
        isPassed: false,
        border: "",
        isrequired: false,
      },
      pwCheck: {
        name: ["pwCheck", "비밀번호 재입력"],
        value: "",
        type: "password",
        title: "",
        isPassed: false,
        pwCheck: false,
        border: "",
        isrequired: false,
      },
      isRequired: "",
    },
    gender: {
      value: "",
      isRequired: "",
    },
    birthInfo: {
      year: "",
      month: "",
      date: "",
      check: {
        isLeapYear: false,
        dateRange: 31,
      },
      isRequired: "",
    },
    interest: {
      value: [],
      isRequired: "",
    },
    selfIntroduction: {
      value: [],
      valueLength: 0,
      isRequired: "",
    },
    modal: false,
    modalMessage: [],
  };

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

  onIdPwHandler = (value, inputIdentifier) => {
    const upDatedTextInfo = { ...this.state.textInput };
    const upDatedInput = { ...upDatedTextInfo[inputIdentifier] };
    upDatedInput.value = value;
    console.log(upDatedInput.value);
    if (upDatedInput.value !== "") {
      upDatedInput.isrequired = true;
    } else {
      upDatedInput.isrequired = false;
    }
    isRequire(upDatedInput, upDatedInput.value);
    console.log(upDatedInput);
    borderPaint(
      upDatedTextInfo,
      upDatedInput,
      inputIdentifier,
      upDatedInput.value
    );
    upDatedTextInfo[inputIdentifier] = upDatedInput;
    this.setState({ textInput: upDatedTextInfo });
  };

  onGenderHandler = (optionValue) => {
    const upDatedGenderInfo = { ...this.state.gender };
    upDatedGenderInfo.value = optionValue;
    isRequire(upDatedGenderInfo, optionValue);
    this.setState({ gender: upDatedGenderInfo });
  };

  onInterestHandler = (checkedInterest) => {
    const updatedInterest = { ...this.state.interest };
    const interest = [...this.state.interest.value];
    interest.pop();
    updatedInterest.value = interest.concat(checkedInterest);
    isRequire(updatedInterest, updatedInterest.value);
    this.setState({ interest: updatedInterest });
  };

  onSelfIntroHandler = (optionValue) => {
    const updatedSelfIntroduction = { ...this.state.selfIntroduction };
    updatedSelfIntroduction.value = countAndCutLetter(optionValue, 0, 300);
    updatedSelfIntroduction.valueLength =
      updatedSelfIntroduction.value[0].length;
    this.setState({
      selfIntroduction: updatedSelfIntroduction,
    });
    isRequire(updatedSelfIntroduction, updatedSelfIntroduction.value);
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
          <TextInput
            onChange={this.onIdPwHandler}
            config={this.state.textInput}
            onIdChecker={(event) => {
              this.onIDChecker(this.state.textInput.id.value, event);
            }}
            checkingMs={this.state.idCheckedMs}
            modalClosed={this.onClickModal}
            modalShow={this.state.idCheckModal}
          />
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

export default SignUp;
