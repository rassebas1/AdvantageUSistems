import axios, { AxiosRequestConfig,AxiosResponse} from 'axios'
import pako from 'pako'
import RequestCommon from './RequestCommon';
import MethodHash from '../constants/MethodHash';

export default class UserService{
    private userToDetail:[]
    private users:[]
    
    private baseURL:string;

    constructor(){
        this.userToDetail=[]
        this.users=[]
        
        this.baseURL="http://adminco.orangecloud.com.co/jsserver"
        
    
}
async fetchUsers():Promise<AxiosResponse>{
    const request= new RequestCommon(MethodHash.ReadUser,[null,null,null])
    //console.log("fetch",request);
    var axiosRequestConfiguration=request.getHeaders()
    
    
    console.log(axiosRequestConfiguration)
    console.log(request)
   //this.axiosRequestConfiguration.headers['MethodHash']=""
   //console.log(this.axiosRequestConfiguration)
   
    return axios.get(this.baseURL,axiosRequestConfiguration).then((response)=>{
        console.log("fetch",response);
       console.log("fetchpako", response.data);

       
        return response
    })

 };
 async readpropertyId(data:any):Promise<AxiosResponse> {
    const request= new RequestCommon(MethodHash.ReadPropertyID,[data])
    //console.log("propertyId",request);
    const axiosRequestConfiguration =request as AxiosRequestConfig
    // console.log("propertyId",axiosRequestConfiguration);
     
     return axios.get(this.baseURL,axiosRequestConfiguration).then((response)=>{
     //   console.log(response);
     //   console.log(response.headers);
         
         return response
     })
 }
 async updatePropertyId(data:any):Promise<AxiosResponse> {
    const request= new RequestCommon(MethodHash.EditProperty,data)
   // console.log("AJA",request);
    const axiosRequestConfiguration =request as AxiosRequestConfig
    // console.log("OJO",axiosRequestConfiguration);
     
     return axios.get(this.baseURL,axiosRequestConfiguration).then((response)=>{
    //    console.log("ojo2",response);
    //    console.log(response.headers);
         
         return response
     })
 }
 async deletePropertyId(data:any):Promise<AxiosResponse> {
    const request= new RequestCommon(MethodHash.EditProperty,[data])
  //  console.log("delete",request);
    const axiosRequestConfiguration =request as AxiosRequestConfig
   //  console.log("delete",axiosRequestConfiguration);
     
     return axios.get(this.baseURL,axiosRequestConfiguration).then((response)=>{
  //      console.log("delete",response);
  //      console.log(response.headers);
         
         return response
     })
 }
}