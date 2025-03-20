// 文件夹模块入口文件

import requestInstance from "./request";

export { requestInstance as request };

/*
对于axios 封装基础实例/拦截器  不需要做类型设置（拦截器中接收数据或者在请求中添加数据可能涉及类型的处理）
//主要在api封装时注重类型配置
*/