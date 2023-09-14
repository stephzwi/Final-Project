import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";
import LoginForm from "./Login";
import RegisterForm from "./Register";
import ForgotPasswordForm from "./ForgotPasswordForm";

const loginUrl = "https://fakestoreapi.com/auth/login";
const registerUrl = "https://fakestoreapi.com/auth/register";

function Account() {
  const [loginFormData, setLoginFormData] = useState({
    username: "",
    password: "",
  });

  const [registerFormData, setRegisterFormData] = useState({
    registerUsername: "",
    registerPassword: "",
  });

  const [loginResponseData, setLoginResponseData] = useState(null);
  const [registerResponseData, setRegisterResponseData] = useState(null);

  const [isRegistering, setIsRegistering] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // Your login and registration logic here...
  }, [isRegistering, loginFormData, registerFormData]);

  const handleLoginInputChange = (event) => {
    const { name, value } = event.target;
    setLoginFormData({
      ...loginFormData,
      [name]: value,
    });
  };

  const handleRegisterInputChange = (event) => {
    const { name, value } = event.target;
    setRegisterFormData({
      ...registerFormData,
      [name]: value,
    });
  };

  const handleForgotPasswordClick = () => {
    setShowForgotPassword(true);
  };

  const toggleRegisterForm = () => {
    setIsRegistering(!isRegistering);
  };

  const handleLogin = (formData) => {
    console.log(formData); // Add this line to log formData
    // Send a login request with formData
    fetch(loginUrl, {
      method: "POST",
      body: JSON.stringify({
        username: formData.username,
        password: formData.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        // Handle the login response data here
        setLoginResponseData(json);
        if (json.success) {
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleRegister = (formData) => {
    // Send a registration request with formData
    fetch(registerUrl, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        // Handle the registration response data here
        setRegisterResponseData(json);
        if (json.success) {
          navigate("/login");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Layout currentPage={Account} />
      <h1>Welcome to the Login and Registration Page</h1>

      {showForgotPassword ? (
        <ForgotPasswordForm />
      ) : (
        <>
          <div>
            <h2>{isRegistering ? "Register" : "Login"}</h2>
            {isRegistering ? (
              <RegisterForm
                onRegisterInputChange={handleRegisterInputChange}
                onRegister={handleRegister}
              />
            ) : (
              <LoginForm
                onLoginInputChange={handleLoginInputChange}
                onLogin={handleLogin}
              />
            )}
            {isRegistering ? null : (
              <button onClick={handleForgotPasswordClick}>
                Forgot Password
              </button>
            )}
          </div>

          <div>
            <button onClick={toggleRegisterForm}>
              {isRegistering ? "Cancel" : "Register"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Account;
