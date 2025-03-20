// 设置接口请求需要的类型

export type requestType = {
  mobile: string;
  code: string;
};
export type ResType<T> = {
  message: string;
  data: T;
};

export type tokenType = {
  token: string;
  refresh_token: string;
};
