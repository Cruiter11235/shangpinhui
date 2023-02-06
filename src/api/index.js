//统一管理api
import requests from "./requests";

//三级联动接口
export const reqCategoryList = ()=>{
    return requests({
        url:'/api/product/getBaseCateGoryList',
        method:'get',
});
}