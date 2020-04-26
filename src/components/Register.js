import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../styles/auth.scss";

export default function Register() {
  let history = useHistory();
  const [credentials, setCredentials] = useState({
    username: "",
    password1: "",
    password2: "",
  });

  const register = (e) => {
    e.preventDefault();
    if (credentials.password1 !== credentials.password2) {
      alert("Passwords do not match");
    } else {
      axios
        .post(
          `${process.env.REACT_APP_BASEURL}/api/register?username=${credentials.username}&password1=${credentials.password1}&password2=${credentials.password2}`
        )
        .then((res) => {
          localStorage.setItem("user-key", res.data.key);
          history.push("/game");
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="auth-container">
      <h1>REGISTER</h1>
      <form onSubmit={register}>
        <input
          type="text"
          name="username"
          autoComplete="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password1"
          autoComplete="new-password"
          value={credentials.password1}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password2"
          autoComplete="new-password"
          value={credentials.password2}
          onChange={handleChange}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
