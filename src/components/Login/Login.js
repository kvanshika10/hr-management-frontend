import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    // Check if the username and password are correct
    if (username === "admin" && password === "admin") {
      // Call the handleLogin function passed down from the App component
      props.handleLogin();
      // Redirect to the dashboard page
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <h1>Welcome to HR Management Portal</h1>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default Login;
