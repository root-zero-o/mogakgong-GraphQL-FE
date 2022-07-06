import React from "react";
import { useRouter } from "next/router";

const main = () => {
  const router = useRouter();

  return (
    <div className="wrapper h-full bg-ivory overflow-hidden relative">
      <div className="flex flex-col mt-8 text-25">
        <h3>안녕하세요 영근님!</h3>
        <h3>오늘도 열공해볼까요?</h3>
      </div>

      <div
        className="circle shadow-2xl absolute left-[15px] top-[20%] w-[170px] h-[170px] bg-green_light text-4xl"
        onClick={() => router.push("/studyList")}
      >
        <h1>나의</h1>
        <h1>스터디</h1>
      </div>

      <div
        className="circle shadow-2xl absolute right-[-40px] top-[30%] w-[220px] h-[220px] bg-green_mid text-4xl"
        onClick={() => router.push("/timeCheck")}
      >
        <h1>공부시간</h1>
        <h1>측정</h1>
      </div>

      <div
        className="circle shadow-2xl absolute left-[-40px] bottom-[10%] w-[280px] h-[280px] bg-green_deep text-4xl"
        onClick={() => router.push("/todoList")}
      >
        <h1>나의 할일</h1>
        <h1>관리하기</h1>
      </div>

      <div
        className="circle shadow-2xl absolute right-[-10px] bottom-[-20px] w-[180px] h-[180px] bg-green_mid text-4xl"
        onClick={() => router.push("/myPage")}
      >
        <h1>마이</h1>
        <h1>페이지</h1>
      </div>
    </div>
  );
};

export default main;
