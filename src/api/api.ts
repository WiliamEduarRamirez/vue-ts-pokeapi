import axios, { AxiosResponse } from "axios";

const sleep = (timer: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timer);
  });
};

axios.interceptors.response.use(async (response) => {
  await sleep(500);
  return response;
});

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const request = {
  getParams: <T>(url: string, params: URLSearchParams): Promise<T> =>
    axios.get<T>(url, { params }).then(responseBody),
  get: <T>(url: string): Promise<T> => axios.get<T>(url).then(responseBody),
};

export default request;
