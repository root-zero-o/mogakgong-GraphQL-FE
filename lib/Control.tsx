import React, { useState } from "react";
import useToggle from "../hooks/useToggle";
type Props = {
  setTimeInSeconds: Function;
};

function Controls(props: Props) {
  const { setTimeInSeconds } = props;
  const [intervalId, setIntervalId] = useState<number>(0);
  const { flag, onStartHandler } = useToggle();

  const handlePlayButton = (e: object) => {
    const interval: any = setInterval(() => {
      setTimeInSeconds((prev: number) => prev + 1);
    }, 1000);
    onStartHandler();
    setIntervalId(interval);
  };

  const handleStopButton = () => {
    onStartHandler();
    clearInterval(intervalId);
  };

  return (
    <div>
      {!flag ? (
        <div
          className="circle w-[70px] h-[70px] bg-red_light shadow-md"
          onClick={handlePlayButton}
        >
          <h3 className="text-white">Start</h3>
        </div>
      ) : (
        <div
          className="circle w-[70px] h-[70px] bg-green_deep shadow-md"
          onClick={handleStopButton}
        >
          <h3 className="text-white">Stop</h3>
        </div>
      )}
    </div>
  );
}

export default Controls;
