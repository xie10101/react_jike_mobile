import { useEffect } from "react";
import { getUserInfo } from "@/apis/user";
// 主页设置
const Home = () => {
    useEffect(() => {
        async function test (){
             const res= await getUserInfo()
             console.log(res)
       } 
       test()
    },[])
    return (
        <>
        <div>
            <h1>主页</h1>
        </div>
        </>
      );
}
 
export default Home;
