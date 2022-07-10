import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import AddButton from "../components/AddButton";

const todoList = () => {
  return (
    <div className="wrapper bg-green_deep h-full space-y-3">
      <h1 className="text-white pt-10">
        나의 할 일<br /> 관리하기
      </h1>
      <div className="space-y-3 px-10 py-3">
        <h2>목표 달성도 70%</h2>
        <div className="w-full h-10 bg-white rounded-full shadow-md px-2 py-1">
          <div className="w-2/3 h-full bg-ivory rounded-full"></div>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full flex hover">
          <div className="w-1/2 bg-ivory h-12 flex items-center justify-center rounded-t-xl">
            <h2>DAY</h2>
          </div>
          <div className="w-1/2 bg-gray h-12 flex items-center justify-center rounded-t-xl">
            <h2>WEEK</h2>
          </div>
        </div>
        <div className="w-full h-full bg-ivory py-8 px-6 space-y-4">
          <h2>3개의 할 일이 남았어요!</h2>
          <div className="space-y-4">
            <div className="w-full bg-white h-16 py-4 px-7 rounded-xl flex justify-between items-center shadow-md">
              <input
                type="checkbox"
                className="w-6 h-6 text-green_deep rounded-full focus:ring-0 focus:ring-offset-0"
              ></input>
              <h3>코어 자바스크립트 뿌수기</h3>
              <BsFillTrashFill className="text-gray hover" />
            </div>
            <div className="w-full bg-white h-16 py-4 px-7 rounded-xl flex justify-between items-center shadow-md">
              <input
                type="checkbox"
                className="w-6 h-6 text-green_deep rounded-full focus:ring-0 focus:ring-offset-0"
              ></input>
              <h3>코어 자바스크립트 뿌수기</h3>
              <BsFillTrashFill className="text-gray hover" />
            </div>
            <div className="w-full bg-white h-16 py-4 px-7 rounded-xl flex justify-between items-center shadow-md">
              <input
                type="checkbox"
                className="w-6 h-6 text-green_deep rounded-full focus:ring-0 focus:ring-offset-0"
              ></input>
              <h3>코어 자바스크립트 뿌수기</h3>
              <BsFillTrashFill className="text-gray hover" />
            </div>
            <div className="w-full bg-white h-16 py-4 px-7 rounded-xl flex justify-between items-center shadow-md">
              <input
                type="checkbox"
                className="w-6 h-6 text-green_deep rounded-full focus:ring-0 focus:ring-offset-0"
              ></input>
              <h3>코어 자바스크립트 뿌수기</h3>
              <BsFillTrashFill className="text-gray hover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default todoList;
