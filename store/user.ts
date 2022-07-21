import { makeVar } from "@apollo/client";
import { RegCheck } from "../lib/RegCheck";
import { SignupInfo } from "../typings";

const defaultUserInfo = {
  email: "",
  nickname: "",
  password: "",
  passwordCheck: "",
  time: "",
  text: "",
};

const defaultUserValidation = {
  email: false,
  nickname: false,
  password: false,
  passwordCheck: false,
  time: false,
  text: false,
  form: false,
};

export const userInfoVar = makeVar<SignupInfo>(defaultUserInfo);
export const userValidVar = makeVar(defaultUserValidation);

export const addUserInfo = (inputType: string, value: string) => {
  const userInfo = userInfoVar();
  if (inputType === "email") {
    userInfoVar({
      ...userInfo,
      email: value,
    });
  } else if (inputType === "nickname") {
    userInfoVar({
      ...userInfo,
      nickname: value,
    });
  } else if (inputType === "password") {
    userInfoVar({
      ...userInfo,
      password: value,
    });
  } else if (inputType === "passwordCheck") {
    userInfoVar({
      ...userInfo,
      passwordCheck: value,
    });
  } else if (inputType === "time") {
    userInfoVar({
      ...userInfo,
      time: value,
    });
  } else if (inputType === "text") {
    userInfoVar({
      ...userInfo,
      text: value,
    });
  }
};

export const checkValidation = (inputType: string, value: string) => {
  const userValidation = userValidVar();
  const userInfo = userInfoVar();
  if (inputType === "email" && RegCheck.EMAIL_PATTERN.test(value)) {
    userValidVar({
      ...userValidation,
      email: true,
    });
  }
  if (inputType === "nickname" && value.length >= 1 && value.length < 5) {
    userValidVar({
      ...userValidation,
      nickname: true,
    });
  }
  if (
    inputType === "password" &&
    value.length >= 8 &&
    value.length <= 16 &&
    RegCheck.PASSWORD_PATTERN.test(value)
  ) {
    userValidVar({
      ...userValidation,
      password: true,
    });
  }
  if (inputType === "passwordCheck" && value === userInfo.password) {
    userValidVar({
      ...userValidation,
      passwordCheck: true,
    });
  }
  if (inputType === "time" && Number(value) >= 1 && Number(value) <= 999) {
    userValidVar({
      ...userValidation,
      time: true,
    });
  }
  if (inputType === "text" && value.length >= 1 && value.length <= 20) {
    userValidVar({
      ...userValidation,
      text: true,
    });
  }
};

export const checkFormValidation = () => {
  const validation = userValidVar();

  if (
    validation.email === true &&
    validation.nickname === true &&
    validation.password === true &&
    validation.passwordCheck === true &&
    validation.time === true &&
    validation.text === true
  ) {
    userValidVar({
      ...validation,
      form: true,
    });
  }
};

export default userInfoVar;
