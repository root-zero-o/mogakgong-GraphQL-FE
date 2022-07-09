import { useRouter } from "next/router";
import { useMutation } from "react-query";
import apis from "../api/main";
import { SocialUser } from "../typings";

const updateUser = async (updateData: SocialUser) => {
  return await apis.updateSocialUser(updateData);
};

const useUpdateUser = () => {
  const router = useRouter();
  return useMutation(updateUser, {
    onSuccess: () => {
      alert("소셜 아이디로 로그인이 완료되었습니다.");
      router.push("/main");
    },
    onError: () => {
      alert(
        "소셜 아이디로 로그인이 실패하셨습니다. 로그인 페이지로 이동합니다."
      );
      router.push("login");
    },
  });
};

export default useUpdateUser;
