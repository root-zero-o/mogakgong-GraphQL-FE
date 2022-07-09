import { useRouter } from "next/router";
import { useMutation } from "react-query";
import apis from "../api/main";

// const useNaverToken = () => {
// const router = useRouter();
// const hash = router.asPath.split("=")[1];
// const accessToken = hash?.split("&")[0];
// console.log(accessToken);

// const postToken = async (accessToken: string) => {
//   const postTokenDB = await apis.postAccessToken({
//     token: accessToken,
//   });
// };

//   return useMutation(postToken, {
//     onSuccess: (res) => {
//       // 여기서 유저정보 받기
//     },
//     onError: (err) => {},
//   });
// };

// export default useNaverToken;
