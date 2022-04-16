export default class UserModel {
  public name: string;
  public age: number;
  public lastName: string;
  public email: string;
  public IDNumber: number;
  public phone: string;
  public nickName: string;
  constructor(data: number) {
    this.IDNumber = data;
    this.age = 18 + data;
    this.name = "name" + data;
    this.lastName = "last name" + data;
    this.phone = "320 99" + data;
    this.email = "email" + data + "@correo.com";
    this.nickName = "nick" + data + "name";
  }
}

