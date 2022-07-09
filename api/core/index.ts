import axios from "axios";

const api = axios.create({
  baseURL: "",
});

api.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem("token");
    config.headers = { Authorization: `${token}` };
    return config;
  },
  (error) => {
    // 요청 에러가 발생했을 때 수행할 로직
    return Promise.reject(error); // error라는 이유로 거부된 Promise 객체 반환(디버깅)
  }
);

// 4. 응답 인터셉터
api.interceptors.response.use(
  (response) => {
    // 응답에 대한 로직 작성
    const res = response.data;
    return res;
  },
  (error) => {
    // 응답 에러가 발생했을 때 수행할 로직
    return Promise.reject(error);
  }
);

export default api;
