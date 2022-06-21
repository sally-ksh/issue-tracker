import axios from "axios";

// TODO baseURLpostman mock server API
export const BASE_URL: { [key: string]: string } = {
  development: "https://dad971ea-1523-4f32-b5e3-a9782674d14c.mock.pstmn.io",
  production: "",
};

const instance = axios.create({
  baseURL: BASE_URL[process.env.NODE_ENV] || BASE_URL.development,
  timeout: 1000,
});

instance.interceptors.request.use(
  (config) => {
    // 요청 성공 직전
    config.headers = config.headers ?? {};

    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      config.headers.Authorization = "Bearer " + accessToken;
    }

    return config;
  },
  (error) => {
    // 요청 에러 직전
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    /*
        http status가 200인 경우
        응답 성공 직전 호출됩니다. 
    */
    return response;
  },
  (error) => {
    // 요청 에러 직전
    return Promise.reject(error);
  }
);

export default instance;
