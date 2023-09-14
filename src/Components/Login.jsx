import React from "react";

function LoginForm({
  loginUsername,
  loginPassword,
  onLoginInputChange,
  onLogin,
}) {
  return (
    <form onSubmit={onLogin}>
      <input
        type="text"
        name="username" // Ensure the name attribute is set to "username"
        placeholder="Username"
        value={loginUsername}
        onChange={onLoginInputChange}
        required
      />
      <input
        type="password"
        name="password" // Ensure the name attribute is set to "password"
        placeholder="Password"
        value={loginPassword}
        onChange={onLoginInputChange}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
