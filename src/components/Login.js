import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../styles/auth.scss";

export default function Login() {
  let history = useHistory();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const login = (e) => {
    e.preventDefault();
    axios
      .post(
        `${process.env.REACT_APP_BASEURL}/api/login?username=${credentials.username}&password=${credentials.password}`
      )
      .then((res) => {
        localStorage.setItem("user-key", res.data.key);
        history.push("/game");
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="auth-container">
      <h1>LOGIN</h1>
      <form onSubmit={login}>
        <input
          type="text"
          name="username"
          autoComplete="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          autoComplete="current-password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
