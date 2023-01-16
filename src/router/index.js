import VueRouter from "vue-router";
import Vue from "vue";

import Home from '@/components/pages/Home';
import Login from '@/components/pages/Login';
import Register from '@/components/pages/Register';
import Search from '@/components/pages/Search';

Vue.use(VueRouter);


export default new VueRouter({
    mode:'hash',
    routes:[
        {
            name:'Home',
            path:'/Home',
            component:Home, 
        },
        {
            name:'Login',
            path:'/Login',
            component:Login,
        },
        {
            name:'Register',
            path:'/Register',
            component:Register,
        },
        {
            name:'Search',
            path:'/Search',
            component:Search,
        }
    ]
})