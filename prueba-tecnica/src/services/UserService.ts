import axios, { AxiosRequestConfig,AxiosResponse} from 'axios'
export default class UserService{
    private userToDetail:[]
    private users:[]
    private axiosRequestConfiguration:AxiosRequestConfig;
    private baseURL:string;

    constructor(){
        this.userToDetail=[]
        this.users=[]
        this.baseURL="http://adminco.orangecloud.com.co/jsserver"
        this.axiosRequestConfiguration={
       headers:{
        "IDClient": "$#HHJGUY9773H5MNKD65389745KJDFGDGG==","ServiceName": "AdminService","WSToken": "$#HHJGUYUHSDFGS546546DFH654SGHUJJFF==","MethodHash": "java.util.List_getPropiedadesCatalogPorPropiedad_String_Object_Number", 
        "ArgumentList":JSON.stringify( [null, null, null]),
         "content-type":"gzip;charset=UTF-8"
      }
      
    }
    
}
async fetchUsers():Promise<AxiosResponse>{
   console.log(this.axiosRequestConfiguration)
   
    return axios.get(this.baseURL,this.axiosRequestConfiguration).then((response)=>{
        console.log(response);
        
        return response
    })

 };
}