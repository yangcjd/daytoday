import axios from 'axios';
export function instanceRequest(config){
  //1、创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  //2、axios的拦截器
  //全局axios.interceptors.request.use()
  instance.interceptors.request.use(config => {
    //发送成功
    //比如转圈图标
    console.log(config)
    return config
  },err => {
    //发送失败
    console.log(err)
  })
  //响应拦截
  instance.interceptors.response.use(res => {
    //响应成功
    console.log(111)
    console.log(res)
    return res.data
  },err => {
    //响应失败
    console.log('222'+err)
  })
  //3、发送请求 instance返回的本身就是一个Promise
  return instance(config)
}
