import MethodHash from "../constants/MethodHash";

export default class RequestCommon<T> {
  public readonly methodHash: MethodHash;
  public readonly WSToken: string;

  public readonly ContentType: string;
  public readonly ContentEncoding: string;
  public readonly ServiceName: string;
  public readonly IDClient: string;
  public readonly data: string;
  public readonly responseEncoding: string;

  constructor(topic: MethodHash, data: T) {
    this.ContentEncoding = "gzip";
    this.IDClient = process.env.REACT_APP_ID_Client as string;
    this.methodHash = topic;
    this.WSToken = process.env.REACT_APP_WS_Token as string;
    this.data = JSON.stringify(data);
    this.ServiceName = "AdminService";
    this.ContentType = "aplication/x-www-form-urlencoded; gzip;charset=UTF-8";
    this.responseEncoding = "UTF-8";
  }
  getHeaders() {
    const headers = {
      "Content-Encoding": this.ContentEncoding,
      IDClient: this.IDClient,
      methodHash: this.methodHash,
      WSToken: this.WSToken,
      data: this.data,
      ServiceName: this.ServiceName,
      "Content-Type": this.ContentType,
    } as Record<string, string | number | boolean>;

    return headers;
  }
  stringifyInfo() {
    const header = {
      contentEncoding: this.ContentEncoding,
      IDClient: this.IDClient,
      methodHash: this.methodHash,
      WSToken: this.WSToken,
      data: this.data,
      ServiceName: this.ServiceName,
      ContentType: this.ContentType,
    };

    return JSON.stringify(header);
  }
}
