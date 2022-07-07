import { useEffect, useState } from "react";
import calculateTimer from "../lib/CalculateTimer";
import Controls from "../lib/Control";

const timeCheck = () => {
  const [time, setTime] = useState<number>(0);
  const [timeArray, setTimeArray] = useState<Array<number | string>>([]);

  useEffect(() => {
    setTimeArray(calculateTimer(time));
  }, [time]);

  return (
    <div className="wrapper h-full bg-green_mid overflow-scroll relative">
      <div className="flex flex-col items-center justify-center">
        <div className="mt-12 ">
          <h1>공부시간 측정</h1>
          <h2 className="mt-10 text-color text-white ">이번주 나의 공부시간</h2>
        </div>
        <div className="flex flex-col items-center justify-center w-[260px] h-[129px] bg-white rounded-3xl mt-5">
          <div className="h-[100%] flex flex-col items-center justify-center">
            <h1>시간from서버</h1>
          </div>
          <h2 className="text-20 text-red_deep -mt-10">목표시간 초과 달성</h2>
        </div>
        <h2 className="mt-10 text-color text-white">오늘의 공부시간 측정</h2>
        <div className="flex flex-col items-center justify-center w-[320px] h-[180px] bg-white rounded-3xl mt-5">
          <div className="h-[40%] flex flex-col items-center justify-start mt-6">
            <h1>
              {timeArray[0]}:{timeArray[1]}:{timeArray[2]}
            </h1>
          </div>
          <div className="h-[40%] flex flex-col items-center justify-center "></div>
          <p></p>
          <Controls setTimeInSeconds={setTime} />
        </div>
      </div>
    </div>
  );
};

export default timeCheck;
