import { LENGTH } from "../lib/Enum";

const addStudyList = () => {
  return (
    <div className="wrapper h-full bg-ivory overflow-scroll relative">
      <h1 className="mt-10">스터디 만들기</h1>
      <div className="flex flex-col items-center justify-start h-[62vh] bg-green_deep overflow-scroll mt-6 rounded-3xl">
        <div className="circle w-[120px] h-[120px] bg-gray mt-6"></div>
        <div className="flex flex-row justify-evenly items-center w-[100%] mt-4">
          <div className="text-white">
            <h2>이름</h2>
          </div>
          <input
            className="w-[60%] h-[80px] bg-white shadow-[0_10px_20px_-15px_rgba(0,0,0,1)_inset] rounded-3xl text-30"
            maxLength={LENGTH.STUDY_NAME}
          ></input>
        </div>
        <div className="flex flex-row justify-evenly items-center w-[100%] mt-4">
          <div className="text-white">
            <h2>목표</h2>
            <h2>시간</h2>
          </div>
          <input
            className="w-[60%] h-[80px] bg-white shadow-[0_10px_20px_-15px_rgba(0,0,0,1)_inset] rounded-3xl text-30"
            maxLength={LENGTH.STUDY_TIME}
          ></input>
        </div>
        <div className="flex flex-row justify-evenly items-center w-[100%] mt-4">
          <div className="text-white">
            <h2>한줄</h2>
            <h2>소개</h2>
          </div>
          <textarea
            className="w-[60%] h-[130px] bg-white shadow-[0_10px_20px_-15px_rgba(0,0,0,1)_inset] rounded-3xl text-20 p-4"
            maxLength={LENGTH.STUDY_INTRO}
          ></textarea>
        </div>
        <button className="w-[80%] h-[50px] bg-ivory shadow-[0_10px_60px_-15px_rgba(0,0,0,0.5)] rounded-xl mt-4">
          스터디 만들기!
        </button>
      </div>
    </div>
  );
};

export default addStudyList;
