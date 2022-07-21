import { useReactiveVar } from "@apollo/client";
import { useEffect, useState } from "react";
import { userValidVar } from "../store/user";

const useCheckValidation = ({ inputType }: { inputType: string }) => {
  const validation = useReactiveVar(userValidVar);

  const [isValid, setIsValid] = useState(false);
  useEffect(() => {
    if (inputType === "email" && validation.email === true) {
      setIsValid(true);
    } else if (inputType === "nickname" && validation.nickname === true) {
      setIsValid(true);
    } else if (inputType === "password" && validation.password === true) {
      setIsValid(true);
    } else if (
      inputType === "passwordCheck" &&
      validation.passwordCheck === true
    ) {
      setIsValid(true);
    } else if (inputType === "time" && validation.time === true) {
      setIsValid(true);
    } else if (inputType === "text" && validation.text === true) {
      setIsValid(true);
    }
  }, [validation]);
  return { isValid };
};
export default useCheckValidation;
