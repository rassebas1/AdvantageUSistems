import MethodHash from "../constants/MethodHash"

export default class RequestCommon<T> {
    public readonly methodHash: MethodHash
    public readonly WSToken: string
    
    public readonly ContentType:string
    public readonly ContentEncoding:string
    public readonly ServiceName: string
    public readonly IDClient: string
    public readonly data: string
    public readonly responseEncoding:string

    constructor(topic: MethodHash, data: T) {

        this.ContentEncoding= "gzip"
        this.IDClient = process.env.REACT_APP_ID_Client as string
        this.methodHash = topic
        this.WSToken = process.env.REACT_APP_WS_Token as string
        this.data = JSON.stringify(data)
        this.ServiceName = "AdminService"
        this.ContentType="application/gzip"
        this.responseEncoding="UTF-8"
    }
    getHeaders(){
        const headers={            
            contentEncoding:this.ContentEncoding,
            IDClient:this.IDClient,
            methodHash:this.methodHash,
            WSToken:this.WSToken,
            data:this.data,
            ServiceName:this.ServiceName,
            ContentType:this.ContentType,
     } as Record<string, string | number | boolean>
        
        console.log(headers);
        
        return headers
    }
    stringifyInfo(){
        const header={
            contentEncoding:this.ContentEncoding,
            IDClient:this.IDClient,
            methodHash:this.methodHash,
            WSToken:this.WSToken,
            data:this.data,
            ServiceName:this.ServiceName,
            ContentType:this.ContentType,
        } 
        console.log(header);
        
        return JSON.stringify(header)
    }
}