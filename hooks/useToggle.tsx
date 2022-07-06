import { useState } from "react";

const useToggle = () => {
  const [flag, setFlag] = useState(false);
  const onStartHandler = () => {
    setFlag((value) => !value);
  };
  return { onStartHandler, flag };
};

export default useToggle;
