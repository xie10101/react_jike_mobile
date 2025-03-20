
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router/index.tsx'

/*
 创建react元素
 获取某个标签组件-作为跟组件 
 createRoot --创建根组件
 对跟组件容器进行渲染
 */

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
)
