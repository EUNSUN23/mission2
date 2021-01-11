export function borderPaint(
  upDatedTextInfo,
  upDatedInput,
  inputIdentifier,
  value
) {
  const pattern = {
    pw: /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&].*[!@#$%^&])[a-z0-9!@#$%^&]{12,}$/,
    id: /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[.a-zA-Z0-9!@#$%^&]{10,}$/,
  };

  if (value) {
    if (inputIdentifier === "id" || inputIdentifier === "pw") {
      if (pattern[inputIdentifier].test(value)) {
        upDatedInput.isPassed = true;
      }
    } else {
      if (upDatedTextInfo.pw.value === upDatedInput.value) {
        upDatedInput.pwCheck = true;
        upDatedInput.isPassed = true;
      } else {
        upDatedInput.pwCheck = false;
        upDatedInput.isPassed = false;
      }
    }

    if (upDatedInput.isPassed === false || upDatedInput.isrequired === false) {
      console.log(upDatedInput.isrequired);
      upDatedInput.border = "red";
    } else {
      upDatedInput.border = "skyblue";
    }

    upDatedTextInfo[inputIdentifier] = upDatedInput;
  }
}

export function isRequire(input, inputValue) {
  if (inputValue) {
    input.isRequire = true;
  }
}

export function countAndCutLetter(value, Min, Max) {
  const isLength = Min <= value.length && value.length < Max;
  let updatedText = [];
  if (isLength) {
    updatedText = [value];
  } else {
    updatedText = [value.substring(0, 300)];
  }
  return updatedText;
}

export function checkLeapYear(year) {
  let leapYear = false;
  if (year % 4 === 0) {
    leapYear = true;
    if (leapYear) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          leapYear = true;
        } else {
          leapYear = false;
        }
      }
    }
  } else {
    leapYear = false;
  }
  return leapYear;
}

export function setDateRange(isLeapYear, checkedMonth) {
  let dateRange = null;
  if (checkedMonth === "2") {
    if (isLeapYear) {
      dateRange = 28;
    } else {
      dateRange = 29;
    }
  } else if (["4", "6", "9", "11"].indexOf(checkedMonth) > -1) {
    dateRange = 30;
  } else {
    dateRange = 31;
  }
  return dateRange;
}

export function checkRequires(valueArr) {
  if (valueArr.indexOf(false) > -1) {
    return false;
  } else {
    return true;
  }
}

export function birthOptionChange(isLeapYear, checkedMonth, type) {
  let dateRange = null;
  console.log(type);
  console.log(isLeapYear);
  console.log(checkedMonth);
  if (type === "year" || type === "month" || checkedMonth !== null) {
    if (checkedMonth === "2") {
      if (isLeapYear) {
        dateRange = 28;
      } else {
        dateRange = 29;
      }
    } else if (["4", "6", "9", "11"].indexOf(checkedMonth) > -1) {
      dateRange = 30;
    } else {
      dateRange = 31;
    }
    console.log(dateRange);
    return dateRange;
  }
}

export function isformValid(isRequires, isPatterns, isIdChecked) {
  let isValid = true;
  let isRequired = true;
  let isPattern = true;
  let message = [];

  // 1. isRequire(각 form요소들 value값 다 있는지 검사),
  // 2. id 중복체크 되었는지 검사
  // 3. id, pw 패턴 통과했는지검사.

  if (isRequires.indexOf(false) > -1) {
    isRequired = false;
    message.push("모든 입력란을 빠짐없이 채워주세요");
  }
  console.log(isPatterns);

  if (isPatterns.indexOf(false) > -1) {
    isPattern = false;
    message.push("아이디나 비밀번호를 다시 확인해 주세요");
  }

  if (isIdChecked === false) {
    message.push("아이디 중복체크가 필요합니다");
  }

  if (isRequired === false || isPattern === false || isIdChecked === false) {
    isValid = false;
  } else {
    isValid = true;
  }

  console.log(isIdChecked, isRequired, isPattern);

  return { validity: isValid, warnMessage: isValid ? null : message };
}
