import React, { useEffect, useState } from "react";
import Seo from "../components/Seo";
import { RegCheck } from "../lib/RegCheck";
import BackButton from "../components/BackButton";
import Valid from "../components/ui/valid";
import Invalid from "../components/ui/Invalid";

function cls(...classnames: string[]) {
  return classnames.join(" ");
}

const signUp = () => {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [time, setTime] = useState("");
  const [text, setText] = useState("");

  const [emailIsValid, setEmailIsValid] = useState(false);
  const [nicknameIsValid, setNicknameIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [passwordCheckIsValid, setPasswordCheckIsValid] = useState(false);
  const [timeIsValid, setTimeIsValid] = useState(false);
  const [textIsValid, setTextIsValid] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const emailInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (RegCheck.EMAIL_PATTERN.test(e.target.value)) {
      setEmailIsValid(true);
    }
  };
  const nicknameInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
    if (e.target.value.length >= 1 && e.target.value.length < 5) {
      setNicknameIsValid(true);
    }
  };
  const passwordInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (
      e.target.value.length >= 8 &&
      e.target.value.length <= 16 &&
      RegCheck.PASSWORD_PATTERN.test(e.target.value)
    ) {
      setPasswordIsValid(true);
    }
  };
  const passwordCheckInputHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordCheck(e.target.value);
    if (password === e.target.value) {
      setPasswordCheckIsValid(true);
    }
  };

  const timeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
    if (Number(e.target.value) >= 1 && Number(e.target.value) <= 999) {
      setTimeIsValid(true);
    }
  };

  const textInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    if (e.target.value.length >= 1 && e.target.value.length <= 20) {
      setTextIsValid(true);
    }
  };

  useEffect(() => {
    if (
      emailIsValid === true &&
      nicknameIsValid === true &&
      passwordIsValid === true &&
      passwordCheckIsValid === true &&
      timeIsValid === true &&
      textIsValid === true
    ) {
      setFormIsValid(true);
    }
  }, [
    emailIsValid,
    nicknameIsValid,
    passwordIsValid,
    passwordCheckIsValid,
    timeIsValid,
    textIsValid,
  ]);

  return (
    <div className="wrapper bg-green_mid py-8">
      <BackButton />
      <Seo title="회원가입" />
      <div className="circle z-0 absolute w-96 h-96 right-[-80px] top-[-40px] bg-green_light" />
      <div className="circle z-0 absolute w-96 h-96 left-[-100px] bottom-4 bg-ivory" />
      <form className="space-y-5 z-40 w-4/5 mx-auto">
        <h1>회원가입</h1>
        <label
          htmlFor="imgInput"
          className="z-40 circle shadow-md w-[150px] h-[150px] bg-gray hover"
        >
          클릭 후<br />
          프로필 사진 선택
        </label>
        <div className="z-40 flex flex-col justify-center items-center w-full">
          <input id="imgInput" type="file" className="hidden" />
        </div>
        <div
          className={cls(
            "z-40 flex justify-center items-center w-full rounded-xl shadow-md",
            emailIsValid ? "border-1 border-naver" : "border-1 border-red_deep"
          )}
        >
          <input
            type="email"
            className="textInput "
            placeholder="이메일 아이디"
            onChange={emailInputHandler}
            required
          />
          {emailIsValid ? <Valid /> : <Invalid />}
        </div>
        <div
          className={cls(
            "z-40 flex justify-center items-center w-full rounded-xl shadow-md",
            nicknameIsValid
              ? "border-1 border-naver"
              : "border-1 border-red_deep"
          )}
        >
          <input
            type="text"
            className="textInput"
            placeholder="닉네임(1~4글자)"
            onChange={nicknameInputHandler}
            required
          />
          {nicknameIsValid ? <Valid /> : <Invalid />}
        </div>
        <div
          className={cls(
            "z-40 flex justify-center items-center w-full rounded-xl shadow-md",
            passwordIsValid
              ? "border-1 border-naver"
              : "border-1 border-red_deep"
          )}
        >
          <input
            type="password"
            className="textInput"
            placeholder="비밀번호(영문, 숫자 포함 8~16자)"
            onChange={passwordInputHandler}
            required
          />
          {passwordIsValid ? <Valid /> : <Invalid />}
        </div>
        <div
          className={cls(
            "z-40 flex justify-center items-center w-full rounded-xl shadow-md",
            passwordCheckIsValid
              ? "border-1 border-naver"
              : "border-1 border-red_deep"
          )}
        >
          <input
            type="password"
            className="textInput"
            placeholder="비밀번호 확인"
            onChange={passwordCheckInputHandler}
            required
          />
          {passwordCheckIsValid ? <Valid /> : <Invalid />}
        </div>
        <div
          className={cls(
            "z-40 flex justify-center items-center w-full rounded-xl shadow-md",
            timeIsValid ? "border-1 border-naver" : "border-1 border-red_deep"
          )}
        >
          <input
            type="number"
            className="textInput"
            placeholder="목표 공부시간(최대 999시간)"
            onChange={timeInputHandler}
            required
          />
          {timeIsValid ? <Valid /> : <Invalid />}
        </div>
        <div
          className={cls(
            "z-40 flex justify-center items-center w-full rounded-xl shadow-md",
            textIsValid ? "border-1 border-naver" : "border-1 border-red_deep"
          )}
        >
          <input
            type="text"
            className="textInput"
            placeholder="각오 한 마디(20자 이하)"
            onChange={textInputHandler}
            required
          />
          {textIsValid ? <Valid /> : <Invalid />}
        </div>
        {formIsValid ? (
          <button className="submitBtn z-40 bg-green_light hover ">
            가입하기
          </button>
        ) : (
          <button className="submitBtn z-40 bg-gray hover:cursor-not-allowed">
            가입 조건을 충족해주세요.
          </button>
        )}
      </form>
    </div>
  );
};

export default signUp;
