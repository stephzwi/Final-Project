import { useState, useEffect } from "react";

export default function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getAllUsers() {
      const response = await fetch("https://fakestoreapi.com/users");
      const users = await response.json();
      const placeUsers= users.find(())
    getAllUsers();
  }, []);



  async function handleSubmit(e) {
    e.preventDefault();
    console.log(username, password);
    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      console.log("The response", response);
      const result = await response.json();
      console.log("The Result", result, result.token);
    } catch (error) {
      setError(error);
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        \<button>Submit</button>
      </form>
    </div>
  );
}
