import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

export default class authService{
private axiosRequestConfiguration:AxiosRequestConfig;
private baseURL:string;
    /**
     *constructor
     */
    constructor(username:string,password:string) {
       
        this.baseURL="http://adminco.orangecloud.com.co/jsserver"
        this.axiosRequestConfiguration={
       headers:{
        "IDClient": "$#HHJGUY9773H5MNKD65389745KJDFGDGG==",
        "ServiceName": "AdminService",
        "WSToken": "$#HHJGUYUHSDFGS546546DFH654SGHUJJFF==",
        "MethodHash": "com.advantage.bean.account.WorkSession_loguinUsuarioWS_String_String",
         "ArgumentList": JSON.stringify([username, password],),
         "content-type":"gzip;charset=UTF-8"
      },
      
    }
        
    }
async getAuth():Promise<AxiosResponse>{
   console.log(this.axiosRequestConfiguration);
   
   return axios.get(this.baseURL,this.axiosRequestConfiguration.headers).then((response)=>{
       console.log(response.statusText);

    return response      
   })
};
}

