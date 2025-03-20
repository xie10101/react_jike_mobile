//创建路由表
/*
基于浏览器历史记录（Browser History）的路由器实例
*/
 
import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("@/pages/Home"));
const Details = lazy(() => import("@/pages/Details"));
// 设置路由懒加载
const router = createBrowserRouter([
 {
  path: "/",
  element: (<Suspense fallback={"....加载中"}><Home /></Suspense>),
},
 {
    path: "/details",
    element: (<Suspense fallback={"....加载中"}><Details /></Suspense>),
 }
])

export default router; 
// 常使用默认导出