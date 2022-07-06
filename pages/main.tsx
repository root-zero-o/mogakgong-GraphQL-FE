import React from "react";

const main = () => {
  return (
    <div className="wrapper h-full bg-ivory overflow-hidden relative">
      <div className="flex flex-col mt-8 text-25">
        <span>안녕하세요 영근님!</span>
        <span>오늘도 열공해볼까요?</span>
      </div>

      <div className="circle shadow-2xl absolute left-[15px] top-[20%] w-[170px] h-[170px] bg-green_light text-4xl">
        <span>나의</span>
        <span>스터디</span>
      </div>
      <div className="circle shadow-2xl absolute right-[-40px] top-[30%] w-[220px] h-[220px] bg-green_mid text-4xl">
        <span>공부시간</span>
        <span>측정</span>
      </div>
      <div className="circle shadow-2xl absolute left-[-40px] bottom-[10%] w-[280px] h-[280px] bg-green_deep text-4xl">
        <span>나의 할일</span>
        <span>관리하기</span>
      </div>
      <div className="circle shadow-2xl absolute right-[-10px] bottom-[-20px] w-[180px] h-[180px] bg-green_mid text-4xl">
        <span>마이</span>
        <span>페이지</span>
      </div>
    </div>
  );
};

export default main;
