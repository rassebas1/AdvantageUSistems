import axios, {
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from "axios";
import pako from "pako";
import RequestCommon from "./RequestCommon";
import MethodHash from "../constants/MethodHash";

export default class UserService {
  private userToDetail: [];
  private users: [];

  private baseURL: string;

  constructor() {
    this.userToDetail = [];
    this.users = [];

    this.baseURL = "http://adminco.orangecloud.com.co/jsserver";
  }
  async fetchUsers(): Promise<AxiosResponse> {
    const request = new RequestCommon(MethodHash.ReadUser, [null, null, null]);
    return axios
      .get(this.baseURL, {
        responseType: "arraybuffer",
        decompress: true,

        headers: {
          "Content-Type":
            " application/x-www-form-urlencoded;application/json, text/plain, */*",
        },
      })
      .then((response) => {
        return response;
      });
  }
  async readpropertyId(data: any): Promise<AxiosResponse> {
    const request = new RequestCommon(MethodHash.ReadPropertyID, [data]);

    const axiosRequestConfiguration = request as AxiosRequestConfig;

    return axios
      .get(this.baseURL, axiosRequestConfiguration)
      .then((response) => {
        return response;
      });
  }
  async updatePropertyId(data: any): Promise<AxiosResponse> {
    return axios
      .get(this.baseURL, {
        headers: {
          "Content-Type": "aplication/x-www-form-urlencoded",
        },
      })
      .then((response) => {
        return response;
      });
  }
  async deletePropertyId(data: any): Promise<AxiosResponse> {
    const request = new RequestCommon(MethodHash.EditProperty, [data]);

    return axios
      .get(this.baseURL, {
        headers: {
          "Content-Type": "aplication/x-www-form-urlencoded",
        },
      })
      .then((response) => {
        return response;
      });
  }
}
