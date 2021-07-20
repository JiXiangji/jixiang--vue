import axios from "axios"
var instance = axios.create({    
baseURL: '/aaa',
timeout: 5000, 

});

instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    // if(response.data.status!=0){
    //     alert("信息错误")
    // }
    return response.data;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

export {instance}

