import React, { useCallback } from "react";
import { debounce } from "lodash";
import { addUserInfo } from "../store/user";
import Valid from "./ui/Valid";
import { checkValidation } from "../store/user";
import Invalid from "./ui/Invalid";
import useCheckValidation from "../hooks/useCheckValidation";

function cls(...classnames: string[]) {
  return classnames.join(" ");
}

const SignupInput = ({
  type,
  placeholder,
  inputType,
}: {
  type: string;
  placeholder: string;
  inputType: string;
}) => {
  // debounce 사용해서 re-rendering 최소화
  const getValue = debounce((value) => {
    addUserInfo(inputType, value);
    checkValidation(inputType, value);
  }, 500);

  const inputHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      getValue(value);
    },
    [getValue]
  );

  // 유효성 검사하는 custom hook
  const { isValid } = useCheckValidation({ inputType });

  return (
    <div
      className={cls(
        "z-40 flex justify-center items-center w-full rounded-xl shadow-md",
        isValid ? "border-1 border-naver" : "border-1 border-red_deep"
      )}
    >
      <input
        type={type}
        className="textInput "
        placeholder={placeholder}
        onChange={inputHandler}
        required
      />
      {isValid ? <Valid /> : <Invalid />}
    </div>
  );
};

export default SignupInput;
