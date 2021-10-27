import { Toast } from "vant";

const { httpcode } = require("../axios/httpcode")
export default function ({ $axios, redirect, store }, inject) {
  // 请求拦截
  $axios.onRequest(config => {
    // 判断是否有token
    if (store.state.token) {
      // 添加请求头
      $axios.setHeader('Authorization', `Bearer ${store.state.token}`);
    }
    return config
  })
  // 响应拦截
  $axios.onResponse(res => {
    const { status, message } = res.data
    // 响应非200则弹出提示框, 提示错误信息
    if (!status) {
      Toast(message)
    }
  })

  // 错误拦截
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    // 弹框提示错误信息
    Toast(httpcode[code])
    // 404返回404页面
    if (code === 400) {
      // 重定向到400页面
      redirect('/400')
    } else if (code === 401) {
      // 401代表未登录, 没有限权, 需要重定向到登录页面
      redirect("/user/login")
    }
  })


  // inject  注册全局插件   封装请求方法
  // 目标 将请求方法封装成{get:()=>{},post:()=>{}}的形式
  // 1. 创建一个空对象
  const requestMethod = {};

  ["$get", "$post", "$put", "$delete"].forEach(method => {
    // 判断请求参数是params还是data
    // let paramsOrData = method == "$get" || method == "$delete" ? "params" : "data";
    // 请求方法 
    requestMethod[method] = (url, data) => {
      return $axios[method](url, data)
      // return $axios({
      //   method,
      //   url,
      //   [paramsOrData]: data
      // })
    }

  });

  inject("request", requestMethod)
}