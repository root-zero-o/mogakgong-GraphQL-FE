import React from "react";
import Seo from "../components/Seo";
import { User } from "../typings";
import { RegCheck } from "../lib/RegCheck";

const signUp = () => {
  return (
    <div className="wrapper bg-green_mid py-8">
      <Seo title="회원가입" />
      <div className="circle z-0 absolute w-96 h-96 right-[-80px] top-[-40px] bg-green_light" />
      <div className="circle z-0 absolute w-96 h-96 left-[-100px] bottom-4 bg-ivory" />
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
          <input
            type="email"
            className="invalid:border-2 textInput"
            placeholder="이메일 아이디"
          />
        </div>
        <div className="z-40 flex flex-col justify-center items-center w-full ">
          <input
            type="text"
            className="textInput"
            placeholder="닉네임(1~4글자)"
          />
        </div>
        <div className="z-40 flex flex-col justify-center items-center w-full">
          <input type="password" className="textInput" placeholder="비밀번호" />
        </div>
        <div className="z-40 flex flex-col justify-center items-center w-full">
          <input
            type="password"
            className="textInput"
            placeholder="비밀번호 확인"
          />
        </div>
        <div className="z-40 flex flex-col justify-center items-center w-full">
          <input
            type="number"
            className="textInput"
            placeholder="목표 공부시간"
          />
        </div>
        <div className="z-40 flex flex-col justify-center items-center w-full">
          <input
            type="text"
            className="textInput"
            placeholder="각오 한 마디(최대 20자)"
          />
        </div>
      </form>
    </div>
  );
};

export default signUp;
