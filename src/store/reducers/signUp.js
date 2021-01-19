import * as actionTypes from "../../store/actions/actionTypes";

const signUp = {
  form: {
    IdPw: {
      email: "",
      password: "",
    },
    gender: "",
    birthInfo: "",
    interest: [],
    selfIntroduction: "",
  },
  modal: false,
  modalMessage: [],
};

const setIdPw = (state, name, idPw) => {
  const initIdPwState = { ...state };
  initIdPwState.form.IdPw[name] = idPw;
  return { ...state, ...initIdPwState };
};

const setInterest = (state, interest) => {
  const initInterestState = { ...state };
  initInterestState.form.interest = interest;
  return { ...state, ...initInterestState };
};

const setGender = (state, gender) => {
  const initGenderState = { ...state };
  initGenderState.form.gender = gender;
  return { ...state, ...initGenderState };
};

const setSelfIntro = (state, selfIntroduction) => {
  const initSelfIntroState = { ...state };
  initSelfIntroState.form.selfIntroduction = selfIntroduction;
  return { ...state, ...initSelfIntroState };
};

const setBirth = (state, birthInfo) => {
  const initBirthState = { ...state };
  initBirthState.form.birthInfo = birthInfo;
  return { ...state, ...initBirthState };
};

const reducer = (state = signUp, action) => {
  switch (action.type) {
    case actionTypes.SET_ID:
      return setIdPw(state, "email", action.email);
    case actionTypes.SET_PW:
      return setIdPw(state, "password", action.password);
    case actionTypes.SET_GENDER:
      return setGender(state, action.gender);
    case actionTypes.SET_INTEREST:
      return setInterest(state, action.interest);
    case actionTypes.SET_SELF_INTRO:
      return setSelfIntro(state, action.text);
    case actionTypes.SET_BIRTH:
      return setBirth(state, action.birthInfo);
    default:
      return state;
  }
};

export default reducer;
