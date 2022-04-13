import React from "react";
import { Link } from "react-router-dom";
import AuthService from "../../services/AuthService";
import "./Login.css";
function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorText, setErrorText] = React.useState("");
  const onPasswordChange = (e: React.FormEvent<HTMLInputElement>) => {
    //const input = document.getElementById("input-password");
    console.log(e);
    setPassword(e.currentTarget.value);
  };
  const onUsernameChange = (e: React.FormEvent<HTMLInputElement>) => {
    //const input = document.getElementById("input-password");
    console.log(e.currentTarget.value);
    setUsername(e.currentTarget.value);
  };
  const verifyUser = async () => {
    const authService = new AuthService(username, password);

    try {
      await authService.getAuth().then((response) => {
        console.log(response);

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
        <h1>bienvenido</h1>

        <form action="">
          <label htmlFor="input-username">user</label>
          <input
            id="input-username"
            type="text"
            onInput={(value) => onUsernameChange(value)}
          />
          <label htmlFor="input-password">password</label>
          <input
            id="input-password"
            type="text"
            onInput={(value) => onPasswordChange(value)}
          />
          <Link to="/user">
            <button type="button" onClick={() => verifyUser()}>
              <span>login</span>
            </button>
          </Link>
          <span className="error-span">{errorText}</span>
        </form>
      </div>
    </div>
  );
}
export default Login;
