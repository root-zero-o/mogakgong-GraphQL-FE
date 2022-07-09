import { useRouter } from "next/router";
import { useEffect } from "react";

const useGetToken = () => {
  const router = useRouter();
  const hash = router.asPath.split("=")[1];
  const token = hash?.split("&")[0];
  useEffect(() => {
    localStorage.setItem("token", token);
  }, []);
};

export default useGetToken;
