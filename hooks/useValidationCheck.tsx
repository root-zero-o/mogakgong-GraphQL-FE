import { useState } from "react";
import { RegCheck } from "../lib/RegCheck";

const useValidationCheck = ({
  placeholder,
  input,
}: {
  placeholder: string;
  input: string | number;
}) => {
  const [isValid, setIsValid] = useState(false);
  if (
    placeholder === "이메일 아이디" &&
    typeof input === "string" &&
    RegCheck.EMAIL_PATTERN.test(input)
  ) {
    setIsValid(true);
  } else if (
    placeholder === "닉네임(1~4글자)" &&
    typeof input === "string" &&
    input.length >= 1 &&
    input.length <= 4
  ) {
    setIsValid(true);
  } else if (
    placeholder === "비밀번호" &&
    typeof input === "string" &&
    input.length >= 8 &&
    input.length <= 16 &&
    RegCheck.PASSWORD_PATTERN.test(input)
  ) {
    setIsValid(true);
  } else if (
    placeholder === "목표 공부시간" &&
    Number(input) >= 1 &&
    Number(input) <= 999
  ) {
    setIsValid(true);
  } else if (
    placeholder === "각오 한 마디(최대 20자)" &&
    typeof input === "string" &&
    input.length >= 1 &&
    input.length <= 20
  ) {
    setIsValid(true);
  } else {
    setIsValid(false);
  }
  return isValid;
};

export default useValidationCheck;
