/**用户api接口封装*/

import axios from '../utils/request'
//用户注册
export const register=(userForm,controller)=>axios({
    url:'/users/register',
    methods:'post',
    data:userForm,
    controller
})