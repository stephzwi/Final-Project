import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Layout from "./Layout";

const Url = "https://fakestoreapi.com/auth/login";

function Login() {
  // State to store form inputs
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // State to store response data
  const [responseData, setResponseData] = useState(null);

  // Use useEffect to make the API request when the component is mounted
  useEffect(() => {
    if (formData.username && formData.password) {
      fetch(Url, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json", // Specify the content type
        },
      })
        .then((res) => res.json())
        .then((json) => {
          // Handle the response data here
          setResponseData(json);
        })
        .catch((error) => {
          // Handle errors here
          console.error(error);
        });
    }
  }, [formData]); // Trigger the effect when formData changes

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <Layout currentPage={Login} />
      <h1>Welcome to the Login Page</h1>

      <form>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      {responseData && (
        <div>
          <h2>Response Data</h2>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default Login;
