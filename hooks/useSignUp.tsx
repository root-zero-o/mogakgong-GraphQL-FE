import apis from "../api/main";
import { User } from "../typings";
import { useMutation } from "react-query";

const useSignUp = ({ data }: { data: User }) => {
  const userData = {
    email: data.email,
    nickname: data.nickname,
    password: data.password,
    confirmPassword: data.confirmPassword,
    myHour: [Number(data.myHour), 0, 0],
    myText: data.myText,
  };

  const addUser = async (userData: User) => {
    const addUserDB = await apis.signUpUser(userData);
    return addUserDB;
  };

  return useMutation(addUser, {
    onSuccess: () => {
      alert("회원가입이 완료되었습니다.");
    },
    onError: () => {
      alert("오류로 인해 회원가입에 실패했습니다. 로그인 페이지로 돌아갑니다.");
    },
  });
};

export default useSignUp;
