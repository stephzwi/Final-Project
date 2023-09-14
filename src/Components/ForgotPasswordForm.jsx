import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle forgot password logic and API call
  };

  const handleCancelClick = () => {
    // Refresh the page
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Forgot Password</h2>
      <p>Enter your email to reset your password.</p>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Reset Password</button>
      <button type="button" onClick={handleCancelClick}>
        Cancel
      </button>
    </form>
  );
}

export default ForgotPasswordForm;
