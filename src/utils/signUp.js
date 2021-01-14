export const checkLeapYear = (year) => {
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
};

export const birthOptionChange = (isLeapYear, checkedMonth) => {
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
  console.log(dateRange);
  return dateRange;
};

export const isFormValid = (isRequires, isPatterns, isIdChecked) => {
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
};
