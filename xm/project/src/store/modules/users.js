/** 用户数据模块 */
import {register} from '../../api/userApi'
const state=()=>{
    return {
        registOk:false,   //注册结果
    }
}
// return{
//     loginUser:'',  //记录当前登录用户
//     token:'',  //记录用户登录令牌

// }
const mutations={
    REG_OK(state,result){
        state.registOk = result;
    }
}
const actions={
    registerActions(contex,userForm){
        //用户注册
        register(userForm).then(response=>{
            if(response.code===200){
                contex.commit('REG_OK',true)
            }else {
                contex.commit('REG_OK',false)
             }
        })
    }
}
const getters={}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
 }