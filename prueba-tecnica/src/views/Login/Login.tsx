import React from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthService from "../../services/AuthService";
import "./Login.css";
function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorText, setErrorText] = React.useState("");

  const onPasswordChange = (e: React.FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };
  const onUsernameChange = (e: React.FormEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value);
  };
  const verifyUser = async () => {
    const authService = new AuthService(username, password);

    try {
      await authService.getAuth().then((response) => {
        //navigate("/users", { replace: true });
        return response;
      });
    } catch (error) {
      if (error) {
        setErrorText(error as string);
      }
    }
  };
  return (
    <div className="login-container">
      <div className="home-container">
        <h1>Bienvenido</h1>

        <form action="" className="form-container">
          <label htmlFor="input-username">User</label>
          <input
            id="input-username"
            type="text"
            onInput={(value) => onUsernameChange(value)}
          />
          <label htmlFor="input-password">Password</label>
          <input
            id="input-password"
            type="text"
            onInput={(value) => onPasswordChange(value)}
          />
          <Link to={"/users"}>
            <button type="button" onClick={() => verifyUser()}>
              Log In
            </button>
          </Link>

          <span className="error-span">{errorText}</span>
        </form>
      </div>
    </div>
  );
}
export default Login;
