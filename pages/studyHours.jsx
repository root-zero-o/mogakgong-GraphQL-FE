import BackButton from "../components/BackButton";

const studyHours = () => {
  return (
    <div className="wrapper flex flex-col items-center h-full bg-green_light overflow-scroll">
      <BackButton />
      <h1 className="mt-12 text-white">코딩 뿌수자 의</h1>
      <h1 className="text-white">공부시간</h1>
      <div className="flex flex-col items-center justify-center w-[320px] h-[200px] bg-white rounded-3xl mt-5 shadow-lg">
        <span className="text-15 opacity-50">일주일 목표 공부시간</span>
        <h1 className="">n시간</h1>
        <div className="w-[80%] h-[1px] bg-black opacity-50 m-4"></div>
        <span className="text-15 opacity-50">일주일 총 공부시간</span>
        <h1 className="">n시간</h1>
        <h3 className="text-red_deep">목표까지 n시간</h3>
      </div>
      <h2 className="mt-6">스터디원 이번 주 공부시간</h2>
      <div className="flex flex-col items-center justify-center w-[320px] bg-white rounded-3xl mt-5 shadow-lg">
        <div className="flex flex-row items-center justify-around w-[100%] p-2">
          <div className="circle w-[50px] h-[50px] bg-green_mid ">
            <h2>1</h2>
          </div>
          <h2>영근</h2>
          <h2>n시간</h2>
        </div>
        <div className="flex flex-row items-center justify-around w-[100%] p-2">
          <div className="circle w-[50px] h-[50px] bg-green_mid ">
            <h2>1</h2>
          </div>
          <h2>영근</h2>
          <h2>n시간</h2>
        </div>
        <div className="flex flex-row items-center justify-around w-[100%] p-2">
          <div className="circle w-[50px] h-[50px] bg-green_mid ">
            <h2>1</h2>
          </div>
          <h2>영근</h2>
          <h2>n시간</h2>
        </div>
        <div className="flex flex-row items-center justify-around w-[100%] p-2">
          <div className="circle w-[50px] h-[50px] bg-green_mid ">
            <h2>1</h2>
          </div>
          <h2>영근</h2>
          <h2>n시간</h2>
        </div>
        <div className="flex flex-row items-center justify-around w-[100%] p-2">
          <div className="circle w-[50px] h-[50px] bg-green_mid ">
            <h2>1</h2>
          </div>
          <h2>영근</h2>
          <h2>n시간</h2>
        </div>
      </div>
    </div>
  );
};

export default studyHours;
