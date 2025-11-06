import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [role, setRole] = useState("student");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple login validation
    if (role === "student" && id === "student01" && password === "1234") {
      navigate("/student");
    } else if (role === "teacher" && id === "teacher01" && password === "1234") {
      navigate("/teacher");
    } else {
      alert("❌ Invalid credentials!\nTry:\nStudent → student01 / 1234\nTeacher → teacher01 / 1234");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-title">🎓 Student Portfolio Management System</h1>
        <h2 className="login-subtitle">Login</h2>

        <form className="login-form" onSubmit={handleSubmit}>
          <label>Select Role</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>

          <label>{role === "student" ? "Student ID" : "Teacher ID"}</label>
          <input
            type="text"
            placeholder={`Enter your ${role} ID`}
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
