import { request } from "@/utils";
import { ResType, tokenType, requestType } from "@/types/login";

export function LoginApi(data: requestType) {
  return request.post<ResType<tokenType>>("/authorizations", data);
}
