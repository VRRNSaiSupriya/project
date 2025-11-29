import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const nav = useNavigate();

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundImage:
          "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4aKED5vgbJWNUKdc3iP5FLmhQJUTBtnmY8A&s.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        margin: 0,
        padding: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "430px",
          background: "rgba(255, 255, 255, 0.9)",
          padding: "30px",
          borderRadius: "16px",
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.3)",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#1e293b", marginBottom: "12px" }}>
          KL University Portal
        </h1>

        <p style={{ color: "#475569", marginBottom: "22px", fontSize: "15px" }}>
          Access courses, assignments & dashboards
        </p>

        <button
          onClick={() => nav("/login")}
          style={{
            width: "100%",
            padding: "12px",
            background: "#0a2a6c",
            color: "white",
            border: "none",
            fontSize: "16px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Go to Login
        </button>
      </div>
    </div>
  );
}
