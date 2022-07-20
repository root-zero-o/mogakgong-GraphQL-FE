import React, { useState } from "react";
import useValidationCheck from "../hooks/useValidationCheck";
import { RegCheck } from "../lib/RegCheck";

const SignupInput = ({
  placeholder,
  type,
}: {
  placeholder: string;
  type: string;
}) => {
  const [input, setInput] = useState("");

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    const isValid = useValidationCheck({ placeholder, input });
  };

  return (
    <>
      <div className="z-40 flex flex-col justify-center items-center w-full">
        <input
          type={type}
          className="textInput"
          placeholder={placeholder}
          onChange={inputHandler}
          value={input}
          required
        />
        {type === "email" && !RegCheck.EMAIL_PATTERN.test(input) && (
          <span className="text-red_light mt-1">
            ❌ 이메일 형식으로 입력해주세요.
          </span>
        )}
        {type === "email" && RegCheck.EMAIL_PATTERN.test(input) && (
          <span className="mt-1">✅ 올바른 이메일 형식입니다.</span>
        )}
        {placeholder === "닉네임(1~4글자)" &&
          (input.length < 1 || input.length > 4) && (
            <span className="text-red_light mt-1">
              ❌ 1~4글자의 닉네임을 입력해주세요.
            </span>
          )}
        {placeholder === "닉네임(1~4글자)" &&
          input.length >= 1 &&
          input.length <= 4 && (
            <span className="mt-1">✅ 올바른 닉네임입니다.</span>
          )}
        {placeholder === "비밀번호" &&
          (input.length < 8 || input.length > 16) && (
            <span className="text-red_light mt-1">
              ❌ 8~15자의 비밀번호를 입력해주세요.
            </span>
          )}
        {placeholder === "비밀번호" &&
          input.length >= 8 &&
          input.length <= 16 && (
            <span className="mt-1">✅ 올바른 길이입니다.</span>
          )}

        {placeholder === "비밀번호" &&
          !RegCheck.PASSWORD_PATTERN.test(input) && (
            <span className="text-red_light mt-1">
              ❌ 영문, 숫자를 포함해야 합니다.
            </span>
          )}
        {placeholder === "비밀번호" &&
          RegCheck.PASSWORD_PATTERN.test(input) && (
            <span className="mt-1">✅ 올바른 형식의 비밀번호입니다.</span>
          )}
        {type === "number" && (Number(input) > 999 || Number(input) < 1) && (
          <span className="text-red_light mt-1">
            ❌ 999시간까지 설정 가능합니다.
          </span>
        )}
        {type === "number" && Number(input) >= 1 && Number(input) <= 999 && (
          <span className="mt-1">✅ 올바른 목표 공부시간입니다.</span>
        )}
        {placeholder === "각오 한 마디(최대 20자)" &&
          (input.length < 1 || input.length > 20) && (
            <span className="text-red_light mt-1">
              ❌ 1~20자의 각오를 입력해주세요.
            </span>
          )}
        {placeholder === "각오 한 마디(최대 20자)" &&
          input.length >= 1 &&
          input.length <= 20 && (
            <span className="mt-1">✅ 올바른 길이입니다.</span>
          )}
      </div>
    </>
  );
};

export default SignupInput;
