import React from "react";

const studyList = () => {
  // 임시배열
  const temp: number[] = [1, 2, 3, 4, 5];

  return (
    <div className="wrapper h-full bg-ivory overflow-scroll">
      <h1 className="mt-10">나의 스터디</h1>
      <div className="h-[62vh] bg-green_light overflow-scroll mt-6 rounded-3xl">
        <h2 className="mt-10">총 {temp.length}개의 스터디에 참여중이에요!</h2>

        {/* 스터디 추가되는 div */}
        <div className="flex flex-col items-center justify-center">
          {/* 여기서부터가 하나하나의 study */}
          {temp.map(() => {
            return (
              <div className="flex flex-row items-center w-[90%] h-[100px] bg-white mt-4 shadow-[0_10px_20px_-15px_rgba(0,0,0,1)_inset] rounded-3xl ">
                <div className="circle w-[70px] h-[70px] bg-gray  ml-6"></div>
                <div className="flex flex-col items-start ml-4">
                  <h2>코딩 뿌수자</h2>
                  <span className="text-13 opacity-70">
                    5 명 참여중, 70% 달성
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default studyList;
