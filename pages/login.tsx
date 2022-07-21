import React from "react";
import { useRouter } from "next/router";
import Seo from "../components/Seo";

const Login = () => {
  const router = useRouter();

  return (
    <div className="wrapper h-full bg-green_mid overflow-hidden">
      <Seo title="로그인" />
      <form className="mx-auto my-14 space-y-7 w-4/5">
        <h1 className="mb-5">로그인</h1>
        <input
          type="text"
          placeholder="이메일아이디"
          className="appearance-none w-full py-4 px-3 text-lg rounded-xl shadow-md z-40 border-2 border-black border-opacity-0 focus:border-black focus:border-opacity-0 focus:ring-0 placeholder:text-sm"
          required
        />
        <input
          type="password"
          placeholder="비밀번호"
          className="appearance-none w-full py-4 px-3 text-lg rounded-xl shadow-md z-40 border-2 border-black border-opacity-0 focus:border-black focus:border-opacity-0 focus:ring-0 placeholder:text-sm"
          required
        />
        <button className="submitBtn bg-ivory">
          <h2>공부 시작!</h2>
        </button>
      </form>
      <div className="circle absolute right-1/2 bottom-[-1/2] translate-x-1/2 -translate-y-[-1/2] bg-green_light w-[400px] h-[400px] pt-3 pb-32">
        <h2>
          모각공이 <br />
          처음이신가요?
        </h2>
        <div className="w-full h-2/3 grid grid-cols-2 px-10 py-2 ">
          <button className="loginBtn bg-white">
            구글
            <br /> 로그인
          </button>
          <button className="loginBtn">
            네이버
            <br /> 로그인
          </button>
          <button className="loginBtn bg-kakao">
            카카오
            <br /> 로그인
          </button>
          <div
            className="loginBtn bg-green_deep"
            onClick={() => router.push("/signUp")}
          >
            회원가입
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
