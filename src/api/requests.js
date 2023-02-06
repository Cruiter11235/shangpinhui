//对axios进行二次封装

import axios  from "axios";

let requests = axios.create({
    //配置对象

    //基础路径
    "baseURL":"/api",
    "timeout":5000,
});

//请求拦截器
requests.interceptors.request.use(
    (config)=>{
        //config 对象有一个配置项很重要，那就是header请求头
        return config;
    }
);

requests.interceptors.response.use(
    (res)=>{
        return res.data;
    },
    (err)=>{
        //响应失败的回调函数
        return Promise.reject(new Error('fail'));
    }
)

export default requests;