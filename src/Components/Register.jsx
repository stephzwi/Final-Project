// RegisterForm.js
import React, { useState } from "react";

function RegisterForm({ onRegister }) {
  const [registerFormData, setRegisterFormData] = useState({
    registerUsername: "",
    registerPassword: "",
  });

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Send a registration request with registerFormData
    onRegister(registerFormData);
  };

  const handleRegisterInputChange = (event) => {
    const { name, value } = event.target;
    setRegisterFormData({
      ...registerFormData,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleRegisterSubmit}>
      <input
        type="text"
        name="registerUsername"
        value={registerFormData.registerUsername}
        onChange={handleRegisterInputChange}
        required
      />
      <input
        type="password"
        name="registerPassword"
        value={registerFormData.registerPassword}
        onChange={handleRegisterInputChange}
        required
      />
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;
