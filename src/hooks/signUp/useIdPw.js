import { useState } from "react";

const useIdPw = (initValue) => {
  const [email, setEmail] = useState(initValue);
  const [password, setPassword] = useState(initValue);

  console.log(inputValue);

  const onIdPwInputHandler = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };
  return [{ email: email, password: password }, onIdPwInputHandler];
};

export default useIdPw;

// const [id, setId] = useState()
// textInput: {
//     id: {
//       name: ["id", "아이디"],
//       value: "",
//       type: "text",
//       title:
//         "영문(소문자), 숫자, 특수문자 각각 1개 이상을 포함한 10자리 이상의 아이디",
//       isPassed: false,
//       border: "",
//       isChecked: false,
//       isrequired: false,
//     },
//     pw: {
//       name: ["pw", "비밀번호"],
//       value: "",
//       type: "password",
//       title:
//         "영문(소문자), 숫자 각각 1개 이상, 특수문자 2개 이상을 포함한 12자리 이상의 비밀번호",
//       isPassed: false,
//       border: "",
//       isrequired: false,
//     },
//     pwCheck: {
//       name: ["pwCheck", "비밀번호 재입력"],
//       value: "",
//       type: "password",
//       title: "",
//       isPassed: false,
//       pwCheck: false,
//       border: "",
//       isrequired: false,
//     },
//     isRequired: "",
//   }

// onIdPwHandler = (value, inputIdentifier) => {
//     const upDatedTextInfo = { ...this.state.textInput };
//     const upDatedInput = { ...upDatedTextInfo[inputIdentifier] };
//     upDatedInput.value = value;
//     console.log(upDatedInput.value);
//     if (upDatedInput.value !== "") {
//       upDatedInput.isrequired = true;
//     } else {
//       upDatedInput.isrequired = false;
//     }

// if (inputValue) {
//   input.isRequire = true;
// *isRequire함수}
// isRequire(upDatedInput, upDatedInput.value);
// console.log(upDatedInput);

// export function borderPaint(
//   upDatedTextInfo,
//   upDatedInput,
//   inputIdentifier,
//   value
// ) {
//   const pattern = {
//     pw: /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&].*[!@#$%^&])[a-z0-9!@#$%^&]{12,}$/,
//     id: /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[.a-zA-Z0-9!@#$%^&]{10,}$/,
//   };

//   if (value) {
//     if (inputIdentifier === "id" || inputIdentifier === "pw") {
//       if (pattern[inputIdentifier].test(value)) {
//         upDatedInput.isPassed = true;
//       }
//     } else {
//       if (upDatedTextInfo.pw.value === upDatedInput.value) {
//         upDatedInput.pwCheck = true;
//         upDatedInput.isPassed = true;
//       } else {
//         upDatedInput.pwCheck = false;
//         upDatedInput.isPassed = false;
//       }
//     }

//     if (upDatedInput.isPassed === false || upDatedInput.isrequired === false) {
//       console.log(upDatedInput.isrequired);
//       upDatedInput.border = "red";
//     } else {
//       upDatedInput.border = "skyblue";
//     }

//     upDatedTextInfo[inputIdentifier] = upDatedInput;
//   }
// }
//     borderPaint(
//       upDatedTextInfo,
//       upDatedInput,
//       inputIdentifier,
//       upDatedInput.value
//     );
//     upDatedTextInfo[inputIdentifier] = upDatedInput;
//     this.setState({ textInput: upDatedTextInfo });
//   };
