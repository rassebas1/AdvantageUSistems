import React from "react";
import "./ListUser.css";
import UserService from "../../services/UserService";
import { Link } from "react-router-dom";
import UserModel from "../../Models/UserModel";
type User = {
  name: string;
  age: number;
  lastName: string;
  email: string;
  IDNumber: number;
  phone: string;
  nickName: string;
};
function ListUser() {
  const [users, setUsers] = React.useState([] as User[]);

  function UserCard(user: User) {
    return (
      <div key={user.IDNumber} className="user-card">
        <p>{user.name}</p>
        <p>{user.nickName}</p>
        <p>{user.lastName}</p>
        <p>{user.phone}</p>
        <p>{user.email}</p>
      </div>
    );
  }
  const fetchUser = async () => {
    const userService = new UserService();
    try {
      userService.fetchUsers().then((response) => {
        return response;
      });
    } catch (error) {
      return error;
    }
  };
  const createUsers = () => {
    var copy: UserModel[] = [];
    for (var PageSize = 0; PageSize <= 9; PageSize++) {
      var newUser = new UserModel(PageSize);
      copy.push(newUser);
    }
    setUsers(copy);
  };

  React.useEffect(() => {
    fetchUser();
    createUsers();
  }, []);
  return (
    <div className="list-container">
      <h1>Bienvenido {}</h1>
      <h1>Lista de Usuarios del Sistema</h1>
      <div className="user-container">
        {users.map((item) => {
          return UserCard(item);
        })}
      </div>
      <Link replace={true} to="/">
        <button>Log Out</button>
      </Link>
    </div>
  );
}
export default ListUser;
