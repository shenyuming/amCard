import axios from 'axios'
import URLS from '@/utils/api'
import router from '@/router/index'
import { showLoading, hideLoading } from './loading'
// ajax请求统一增加请求头
axios.interceptors.request.use(config => {
    config.headers.common = {
        'Content-Type': "application/json; charset=utf-8",
        //   'Access-Control-Allow-Origin':'*',
        //   'Access-Control-Allow-Headers':'X-Requested-With,Content-Type',
        //   'Access-Control-Allow-Methods':'PUT,POST,GET,DELETE,OPTIONS',
    }
    showLoading();
    config.timeout = 10000;
    return config
}),

/* 请求之后的操作 */
axios.interceptors.response.use((res) => {
    hideLoading();
    return res
  }, (err) => {
    hideLoading();
    return Promise.reject(err);
  });

// 拦截响应response，并做一些错误处理
axios.interceptors.response.use((response) => {
    //return data;
    return response;
}, (err) => {
    // 这里是返回状态码不为200时候的错误处理
    if (err.toString().indexOf("timeout") != -1) {
        this.$message({
            message: '请求超时，请稍后再试'
        });
    }
    if (err && err.response) {
        switch (err.response.status) {
            case 400:
                err.message = '请求错误'
                break
            case 401:
                // console.log(URLS.logIn+'?returnUrl='+encodeURIComponent(window.location.href)  )
                location.href=URLS.logIn+'?returnUrl='+encodeURIComponent(window.location.href)  
                break
            case 403:
                err.message = '拒绝访问'
                router.push({
                    path: '/home'
                })
                break
            case 500:
                err.message = '网络错误，请稍后再试'
                break
            default:
        }
        if (err.response.data.msg) {
            err.message = err.response.data.msg;
        }
        console.log(err)
        this.$message({
            message: err.message
          })
    }
    return Promise.reject(err)
})

export default axios