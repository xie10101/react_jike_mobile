//登录 -post  获取用户信息 get

import request from "@/utils/request";
// 基础类型
type ResType<T> = {
  message: string;
  data: T;
};

// 定义用户信息具体数据体的类型：
type UserInfo = {
  id: string;
  photo: string;
  name: string;
  mobile: string;
  gender: number;
  birthday: string;
};
//返回结果：

/*
嵌套泛型和类型继承
*/

export const getUserInfo = () => {
  return request.get<ResType<UserInfo>>("/user/profile");
};
