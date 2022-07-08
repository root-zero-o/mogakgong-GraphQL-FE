import apis from "../api/main";
import { User } from "../typings";

const useSignUp = ({ data }: { data: User }) => {
  const userData = {
    email: data.email,
    nickname: data.nickname,
    password: data.password,
    confirmPassword: data.confirmPassword,
    myHour: [Number(data.myHour), 0, 0],
    myText: data.myText,
  };
  try {
    apis.signUpUser(userData);
    alert("회원가입이 완료되었습니다.");
  } catch (error) {
    alert("에러로 인해 회원가입에 실패했습니다. 로그인 화면으로 돌아갑니다.");
  }
};

export default useSignUp;
