import React from "react";
import useNaverToken from "../../hooks/useNaverToken";

const NaverLogin = () => {
  const naver = (window as any).naver;

  const naverLogin = new naver.LoginWithNaverId({
    clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
    callbackUrl: process.env.NEXT_PUBLIC_NAVER_CALLBACK_URL,
    isPopup: false,
    loginButton: {
      color: "green",
      type: 2,
      height: "60",
    },
  });
  naverLogin.init();
  useNaverToken();
};

export default NaverLogin;
