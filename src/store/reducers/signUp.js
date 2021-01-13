import * as actionTypes from "../../store/actions/actionTypes";

const signUp = {
  form: {
    IdPw: {
      id: "",
      pw: "",
    },
    gender: "",
    birthInfo: "",
    interest: [],
    selfIntroduction: "",
  },
  modal: false,
  modalMessage: [],
};

const updateObj = (oldObj, updatedObj) => {
  const updatedState = { ...oldObj, ...updatedObj };
  return updatedState;
};

const updateState = (initState, updatedObj) => {
  const updatedForm = { ...initState, ...updatedObj };
  return updatedForm;
};

const setIdPw = (state, idPw) => {
  const updatedIdPw = { ...state.form.IdPw };
  updatedIdPw[idPw] = action[idPw];
  return updateState(state, updateObj(state.form, updatedIdPw));
};

const setInterest = (state, interest) => {
  const updatedInterest = { interest: interest };
  return updateState(state, updateObj(state.form, updatedInterest));
};

const setGender = (state, gender) => {
  const updatedGender = { gender: gender };
  return updateState(state, updateObj(state.form, updatedGender));
};

const setSelfIntro = (state, text) => {
  const updatedSelfIntro = { selfIntroduction: text };
  return updateState(state, updateObject(state.form, updatedSelfIntro));
};

const setBirth = (state, birthInfo) => {
  const updatedBirth = { birthInfo: birthInfo };
  return updateState(state, updateObject(state.form, updatedBirth));
};

const reducer = (state = signUp, action) => {
  switch (action.type) {
    case actionTypes.SET_ID:
      return setIdPw(state, action.id);
    case actionTypes.SET_PW:
      return setIdPw(state, action.pw);
    case actionTypes.SET_GENDER:
      return setGender(state, action.gender);
    case actionTypes.SET_Interest:
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
