import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [role, setRole] = useState("student");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (email.trim() === "" || pass.trim() === "") {
      setError("All fields are required!");
      return;
    }

    localStorage.setItem("user", JSON.stringify({ email, role }));

    if (role === "student") nav("/student");
    else nav("/teacher");
  };

  return (
    <div className="page-center">
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPass(e.target.value)}
      />

      <select onChange={(e) => setRole(e.target.value)}>
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
      </select>

      <button onClick={handleLogin}>Login</button>

      <p style={{ color: "red", textAlign: "center", marginTop: "10px" }}>
        {error}
      </p>
    </div>
  );
}
