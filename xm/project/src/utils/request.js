/** 异步请求模块 */
import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 60000
})

instance.interceptors.request.use(request => {
    return request
})

instance.interceptors.response.use(response => {
    return response.data
})

function request({ url = '', method = 'get', headers = {}, params = {}, data = {},controller }) {
    // 获取取消请求信号对象
    const signal = controller ? controller.signal() : undefined
    return instance({  
        url,
        method,
        headers,
        params,
        data,
        signal
    })
}

export default request
