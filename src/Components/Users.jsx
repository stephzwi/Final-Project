import React, { useState, useEffect } from "react";

const Url = "https://fakestoreapi.com/users"; // Corrected the API URL

function Users() {
  const [users, setUsers] = useState([]); // Initialize state to hold user data

  // Use the useEffect hook to fetch user data when the component mounts
  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(Url);
        const data = await response.json();
        console.log(data);
        setUsers(data); // Update the state with the fetched user data
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    fetchUsers(); // Call the fetchUsers function when the component mounts
  }, []); // The empty dependency array [] ensures this effect runs once

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
