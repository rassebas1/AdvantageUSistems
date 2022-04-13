import React from "react";
import "./ListUser.css";
import UserService from "../../services/UserService";
import { Link } from "react-router-dom";
function ListUser() {
  const [user, setUser] = React.useState([]);
  const fetchUser = async () => {
    const userService = new UserService();
    try {
      userService.fetchUsers().then((response) => {
        console.log("Response ReadUsers", response);
        setUser(response.data);
        return response;
      });
    } catch (error) {
      return error;
    }
  };
  React.useEffect(() => {
    fetchUser();
  });
  return (
    <div className="list-container">
      <span>{user}</span>
      <h1>Hooooladdd</h1>
      <Link replace={true} to="/">
        <button>logout</button>
      </Link>
    </div>
  );
}
export default ListUser;
