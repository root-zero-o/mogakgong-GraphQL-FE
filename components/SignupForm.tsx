import React, { useCallback, useState } from "react";
import SignupInput from "./SignUpInput";
import { useReactiveVar } from "@apollo/client";
import { userValidVar } from "../store/user";

// 여기서는 서버랑 통신만 하기

const SignupForm = () => {
  const validation = useReactiveVar(userValidVar);

  return (
    <form className="space-y-5 z-40 w-4/5 mx-auto">
      <h1>회원가입</h1>
      <label
        htmlFor="imgInput"
        className="z-40 circle shadow-md w-[150px] h-[150px] bg-gray hover"
      >
        클릭 후<br />
        프로필 사진 선택
      </label>
      <div className="z-40 flex flex-col justify-center items-center w-full">
        <input id="imgInput" type="file" className="hidden" />
      </div>
      <SignupInput type="email" placeholder="이메일 아이디" inputType="email" />
      <SignupInput
        type="text"
        placeholder="닉네임(1~4자)"
        inputType="nickname"
      />
      <SignupInput
        type="password"
        placeholder="비밀번호(영문,숫자 포함 8~16자)"
        inputType="password"
      />
      <SignupInput
        type="password"
        placeholder="비밀번호 확인"
        inputType="passwordCheck"
      />
      <SignupInput
        type="number"
        placeholder="목표 공부 시간(최대 999시간)"
        inputType="time"
      />
      <SignupInput
        type="text"
        placeholder="각오 한 마디(최대 20자)"
        inputType="text"
      />

      {validation.form ? (
        <button className="submitBtn z-40 bg-green_light hover ">
          가입하기
        </button>
      ) : (
        <button className="submitBtn z-40 bg-gray hover:cursor-not-allowed">
          가입 조건을 충족해주세요.
        </button>
      )}
    </form>
  );
};

export default SignupForm;
