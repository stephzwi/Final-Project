import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

// Mock user data (you can define your own mock data)
const users = [
  { username: "user1", password: "password1" },
  { username: "user2", password: "password2" },
];

// Mock login endpoint
app.post("/auth/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    res.status(200).json({ success: true, message: "Login successful" });
  } else {
    res
      .status(401)
      .json({ success: false, message: "Invalid username or password" });
  }
});

// Mock registration endpoint
app.post("/auth/register", (req, res) => {
  const { username, password } = req.body;
  // Check if the username is already taken (you can define your own logic)
  const isUsernameTaken = users.some((u) => u.username === username);

  if (isUsernameTaken) {
    res
      .status(400)
      .json({ success: false, message: "Username is already taken" });
  } else {
    // Add the new user to the mock user list (you can define your own logic)
    users.push({ username, password });
    res.status(200).json({ success: true, message: "Registration successful" });
  }
});

app.listen(port, () => {
  console.log(`Mock server is running on port ${port}`);
});
